const express = require("express");

const UserMoviesService = require("../services/userMovies");
const validationHandler = require("../utils/middlewares/validationHandler");

const { movieIdSchema } = require("../utils/schema/movie");
const { userIdSchema } = require("../utils/schema/users");
const { createUserMovieSchema } = require("../utils/schema/userMovies");

function userMoviesApi(app) {
    const router = express.Router();
    app.use("/api/user-movies", router);

    const userMoviesService = new UserMoviesService();

    router.get(
        "/",
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
        validationHandler(createUserMovieSchema),
        async (req, res, next) => {
            const {  body: userMovie } = req;
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
