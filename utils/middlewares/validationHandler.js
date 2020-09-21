const boom = require("@hapi/boom")
const joi = require("@hapi/joi")

//Funcion que valida que haga match con el SCHEMA
function validate(data, schema) {
    const {error}= joi.validate(data, schema)
    return error
}
//Manejador de la validacion
function validationHandler(schema, check = "body") {
    return function (req, res, next) {
        const error = validate(req[check], schema); //Checamos la parte del req que queremos

        error ? next(boom.badRequest(error)) : next(); //Si hay error llamamos next(new Error(err),
        //si no hay error solo lamamos a  next() para que todo se siga ejecutando
    };
}


module.exports = validationHandler