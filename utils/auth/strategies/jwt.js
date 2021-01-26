const passport = require("passport");
const { Strategy, ExtractJwt } = require("passport-jwt");
const boom = require("@hapi/boom");

const UserService = require("../../../services/users")
const { config } = require("../../../config")

passport.use(
    new Strategy({
    secretOrKey: config.auth_jwt_secret, 
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    },
    async (tokenPayload, cb) => {
        const userService = new UserService()
        try {
            const user = userService.getUsers({email : tokenPayload.email})
            if (!user)  cb(boom.unauthorized("User or token doesnt exist"), false) 
            
            delete user.password
            
            cb(null, {...user , scopes: tokenPayload.scopes })

        } catch (error) {
            cb(boom.unauthorized("Error"))
        }
    }
))