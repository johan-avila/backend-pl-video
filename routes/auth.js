const express = require("express");
const passport = require("passport");
const boom = require("@hapi/boom")
const jwt = require("jsonwebtoken")

const ApiKeysService = require("../services/apiKeys")
const UserService = require("../services/users");
const { config } = require("../config");

//Basic Strategy
require("../utils/auth/strategies/basic")

function authApi (app) {
    const router = express.Router();
    app.use("/api/auth", router)
    
    const apiKeysService = new ApiKeysService()
    const usersService = new UserService()


    router.post("/sign-in", (req, res, next)=>{
        //  this key is required and isnt diferent by public client and Admin client
        const { apiKeyToken } = req.body 
        
        if (!apiKeyToken) {
            return next(boom.unauthorized("ApiKeyToken is required👀"))
        }
        //Use passport for autenticate
        passport.authenticate("basic", (err, user)=>{
            try {
                if (err || !user) {
                    return next(boom.unauthorized())
                }
                
                req.login(user, {session: false}, async(err)=>{
                    if (err){
                        return next(err)
                    }
                    
                    const apikey = await apiKeysService.getApiKey({token: apiKeyToken })
                    
                    if (!apikey) {
                        return next(boom.unauthorized())
                    }
                    
                    const {  _id , name, email} = user;
                    const payload = {
                        sub:_id,
                        name,
                        email, 
                        scopes: apikey.scopes
                    }

                    const token = jwt.sign(payload, config.auth_jwt_secret, {
                        expiresIn: "600m",

                    })
                    return res.status(200).json({
                        token,
                        user: {
                            id:_id,
                            name,
                            email
                        }
                    })
                })
            } catch (error) {
                return next(error)
            }
        })(req,res, next )
    })

    router.post("/sign-up", async (req, res, next)=>{
        const { apiKeyToken, user } = req.body
        if(!apiKeyToken){
            return next(boom.unauthorized("ApiKeyToken is required"))
        } 
        try {
            const cretedUser = await usersService.createUser({user})
         
            res.status(201).json({
                message :"User created",
                data : [
                    cretedUser
                ]
            })
        } catch (error) {
            return next(error)
        }
    })

    router.post("/sign-provider", async(req, res, next)=>{
        
        const { apiKeyToken, user } = req.body
        if (!apiKeyToken) {
            next(boom.unauthorized("ApiKeyToken is required"))
        }
        try {
            const queriedUser = await usersService.getOrCreateUser({user})
            const apikey = await apiKeysService.getApiKey({token: apiKeyToken})
            if (!apikey) {
                return next(boom.unauthorized())
            }
            const { _id: id, name, email} = queriedUser
            const payload = {
                sub: id,
                name,
                email,
                scopes: apikey.scopes
            }

            const token = jwt.sign(payload, config.auth_jwt_secret, {
                expiresIn: "60m"
            }) 

            return res.status(200).json({
                token,
                user: {
                    id,
                    name,
                    email
                }
            })
        } catch (error) {
            next(error)
        }
        
    })
}

module.exports = authApi;