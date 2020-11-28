const joi = require("@hapi/joi");

const {movieIdSchema} = require("./movie")
const {userIdSchema} = require("./users")

const userMoviesIdSchema = joi.string().regex(/^[0-9a-fA-F]{24}$/);

const createUserMoviesSchema ={
    userId : userIdSchema,
    movieId : movieIdSchema
}

module.exports = {
    userMoviesIdSchema,
    createUserMoviesSchema
}