const express = require("express");
const passport = require("passport");

const UserMoviesService = require("../services/userMovies");
const validationHandler = require("../utils/middlewares/validationHandler");
const scopesValidationHandler = require("../utils/middlewares/scopesValidationHandler");

const { movieIdSchema } = require("../utils/schema/movie");
const { userIdSchema } = require("../utils/schema/users");
const { createUserMovieSchema } = require("../utils/schema/userMovies");

function userMoviesApi(app) {
    const router = express.Router();
    app.use("/api/user-movies", router);

    const userMoviesService = new UserMoviesService();
    /*Estrategia de passport.js */
    require("../utils/auth/strategies/jwt");
    router.get(
        "/",
        passport.authenticate("jwt", { session: false }),
        scopesValidationHandler(["read:user-movies"]),
        validationHandler({ userId: userIdSchema }, "query"),

        async (req, res, next) => {
            const { userId } = req.query;
            try {
                const userMovies = await userMoviesService.getUserMovies({
                    userId
                });
                res.status(200).json({
                    message: "User movies listed",
                    data: userMovies
                });
            } catch (error) {
                next(error);
            }
        }
    );
    router.post(
        "/",
        passport.authenticate("jwt", { session: false }),
        scopesValidationHandler(["create:user-movies"]),
        validationHandler(createUserMovieSchema),
        async (req, res, next) => {
            const { body: userMovie } = req;
            console.log(userMovie);
            try {
                const createUserMovieId = await userMoviesService.createUserMovies(
                    { userMovie }
                );
                res.status(201).json({
                    message: "User movie created",
                    data: createUserMovieId
                });
            } catch (error) {
                next(error);
            }
        }
    );
    router.delete(
        "/:userMovieId",
        passport.authenticate("jwt", { session: false }),
        scopesValidationHandler(["delete:user-movies"]),
        validationHandler({ userMovieId: movieIdSchema }, "params"),
        async (req, res, next) => {
            const { userMovieId } = req.params;

            try {
                const deleteUserMovieId = await userMoviesService.deleteUserMovie(
                    { userMovieId }
                );
                res.status(201).json({
                    message: "User movie created",
                    data: deleteUserMovieId
                });
            } catch (error) {
                next(error);
            }
        }
    );
}

module.exports = userMoviesApi;
  