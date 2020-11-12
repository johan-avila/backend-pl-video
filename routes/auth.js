const express = require("express");
const passport = require("passport");
const boom = require("@hapi/boom");
const jwt = require("jsonwebtoken");
const ApiKeysService = require("../services/apiKeys");
const UserService = require("../services/users");
const validationHandler = require("../utils/middlewares/validationHandler");

const { createUserSchema } = require("../utils/schema/users");

const { config } = require("../config/index");
//Basic strategy
require("../utils/auth/strategies/basic");

function AuthApi(app) {
    const router = express.Router();
    app.use("/api/auth", router);
    //Services
    const apiKeysService = new ApiKeysService();
    const userService = new UserService();
    //Services
    router.post("/sign-in", async (req, res, next) => {
        const { apiToken } = req.body;

        if (!apiToken) {
            next(boom.unauthorized("Api token is required"));
        }
        passport.authenticate("basic", async (err, user) => {
            try {
                if (err || !user) {
                    next(boom.unauthorized());
                }

                //Esto es para no manejar un estado de sesion, es error de seguridad
                req.login(user, { session: false }, async (error) => {
                    if (error) {
                        next(error);
                    }
                    const apikey = await apiKeysService.getApiKey({
                        token: apiToken
                    });
                    if (!apikey) {
                        next(boom.unauthorized());
                    }

                    const { _id: id, name, email } = user;
                    const payload = {
                        sub: id,
                        name,
                        email,
                        scope: apikey.scopes
                    };

                    const token = jwt.sign(payload, config.auth_jwt_secret, {
                        expiresIn: "15m"
                    });
                    return res
                        .status(200)
                        .json({ token, user: { id, name, email } });
                });
            } catch (err) {
                next(err);
            }
        })(req, res, next);
    });
    router.post(

        "/sign-up",
        validationHandler(createUserSchema),
        async (req, res, next) => {
            const { user } = req.body;
            console.log(user);
            try {
                
                const createUserId = await userService.createUser({user})
                res.status(201).json({
                    data: createUserId, 
                    message: "User created"
                })
            } catch (error) {
                next(error)
            }
        }
    );
}

module.exports = AuthApi;
