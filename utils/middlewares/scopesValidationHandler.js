const boom = require("@hapi/boom")

let scopesValidationHandler = (allowScopes) => {
    return function(req, res, next){
        console.log("__req.user__",req.user);
        if(!req.user || req.user && !req.user.scopes ){
            boom.unauthorized("Missing scopes 🌵")
        }
        const hasAcces = allowScopes
            .map(allowScopes => req.user.scopes.includes(allowScopes))
            .find(allowed =>  Boolean(allowed))
        if(hasAcces){
            next()
        } else {
            next(boom.unauthorized("Insufficient scopes 🍄"))
        }
    }
}

module.exports = scopesValidationHandler