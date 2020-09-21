const { config } = require("../../config/index");
const boom = require("@hapi/boom");
//Esta funcion valida si estamos en modo desarrollo o Produccion
function withErrorStack(err, stack) {
    if (config.dev) {
        return { ...err, stack };
    } else {
        return err;
    }
}
//Este middleware solo imprime el error y da siguiente
function logError(err, req, res, next) {
    console.log(err);
    next(err);
}
//W

function wrapErrors(err, req, res, next) {
    if (!err.isBoom) {
        //Es una forma de que boom marque los errores que manejo y cuales no
        next(boom.badImplementation(err));
    }
    next(err)
}
//Este middleware maneja  otra parte del error
function errorHandler(err, req, res, next) {//eslint-disable-line
    const {output : {statusCode, payload}}= err
    res.status(statusCode);
    console.log(err.stack /* err */);
    res.json(withErrorStack(payload, err.stack));
}

module.exports = {
    logError,
    errorHandler,
    wrapErrors
};
