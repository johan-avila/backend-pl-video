const boom = require("@hapi/boom");

function scopesValidationHandler(allowedScopes) {
    return function (req, res, next) {

        if (!req.user || (req.user && !req.user.scopes)) {
            next(boom.unauthorized());
        }
        const hasAcces = allowedScopes
            .map((allowedScope) => {
                
                return req.user.scopes.includes(allowedScope);
            })
            .find((allowed) => Boolean(allowed));
    
        if(hasAcces){
            next()
        }else{
            next(boom.unauthorized("Insufficient scoopes"))
        }
    };
}

module.exports = scopesValidationHandler