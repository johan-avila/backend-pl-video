const passport = require("passport")
const { BasicStrategy } = require("passport-http")
const boom  = require("@hapi/boom")
const bcrypt = require("bcrypt")

const UserService =  require("../../../services/users")

passport.use(new BasicStrategy(async (email/* email debe pasarse como si fuera username*/,
     password, cb) => {
    const userService = new UserService();
    
    try {   
        const user = await userService.getUsers({email})
        if  (!user){
            return cb(boom.unauthorized("User or email incorrect"), false)
        }
        let comparePassword = await bcrypt.compare(password, user.password)
        if(!comparePassword){
            return cb(boom.unauthorized("User or email incorrect"), false)
        }
        
        delete user.password

        return cb(null, user)
    } catch (err) {
        return cb(boom.unauthorized("Error interno"), false)
    }
}))