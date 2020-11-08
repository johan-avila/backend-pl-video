const passport = require("passport");
const { BasicStrategy } = require("passport-http")

const bcrypt = require("bcrypt")

const UserService = require("../../../services/users");

passport.use(new BasicStrategy(async (email, password, cb)=>{
    const userService = new UserService()
    try {
        const user = await userService.getUsers({email})

        if(!user){
            return cb("user not found", false)
        }
        if(!(await bcrypt.compare(password, user.password))){
            return cb("user not found", false)
        }

        delete user.password

        return cb(null, user)
    } catch (error) {
        return cb("User not found")
    }
}))