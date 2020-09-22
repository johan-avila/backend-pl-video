const express = require("express");
const MoviesService = require("../services/movies");

const {
    movieIdSchema,
    createMovieSchema,
    updateMovieSchema
} = require("../utils/schema/movie");

const validationHandler = require("../utils/middlewares/validationHandler");

const cacheResponse = require("../utils/cacheRespond");
const {
    FIVE_MINUTES_IN_SECONDS,
    SIXTY_MINUTES_IN_SECONDS
} = require("../utils/time");
//*******LOGICA*******

function moviesApi(app) {
    //Exportar y pasar el APP de Express como parametro
    const router = express.Router(); //Enrutador de Express
    app.use("/api/movies", router); //Crearemos la ruta primer ruta

    const moviesService = new MoviesService();

    //***Get All Movies***
    router.get("/", async (req, res, next) => {
        cacheResponse(res, FIVE_MINUTES_IN_SECONDS)
        const { tags } = req.query;
        try {
            const movies = await moviesService.getMovies({ tags });

            res.status(200).json({
                data: movies, //En la "data" viene de la Base de Datos, o en su defecto un simple mock
                message: "movies listed"
            });
        } catch (error) {
            next(error);
        }
    });
    //***Get One Movie***
    //validationHandlers(schema, check= "params" || "body" || "query" || "etc" )
    // validationHandlers({movieId: movieIdSchema}, "params" )
    router.get(
        "/:movieId",
        validationHandler({ movieId: movieIdSchema }, "params"),
        async (req, res, next) => {
            cacheResponse(res, SIXTY_MINUTES_IN_SECONDS)
            const { movieId } = req.params;
            try {
                const movies = await moviesService.getMovie({ movieId });
                res.status(200).json({
                    data: movies, //En la "data" viene de la Base de Datos, o en su defecto un simple mock
                    message: "movie retrieved"
                });
            } catch (error) {
                next(error);
            }
        }
    );
    // ***How Create Movie
    // router.post("/", PODEMOS PONER VARIOS MIDDLEWARES ENTRE LOS DOS PARAMETROS, async (req, res, next) => {
    router.post(
        "/",
        validationHandler(createMovieSchema),
        async (req, res, next) => {
            const { body: movie } = req;
            try {
                const movieCreatedId = await moviesService.createMovie({
                    movie
                });
                res.status(201).json({
                    data: movieCreatedId, //En la "data" viene de la Base de Datos, o en su defecto un simple mock
                    message: "movie created"
                });
            } catch (error) {
                next(error);
            }
        }
    );
    //***Update ONE movie***
    router.put(
        "/:movieId",
        validationHandler({ movieId: movieIdSchema }, "params"),
        validationHandler(updateMovieSchema),
        async (req, res, next) => {
            const { movieId } = req.params;
            const { body: movie } = req;

            try {
                const updatedMovieId = await moviesService.updateMovie({
                    movieId,
                    movie
                });

                res.status(200).json({
                    data: updatedMovieId, //En la "data" viene de la Base de Datos, o en su defecto un simple mock
                    message: "movie updated"
                });
            } catch (error) {
                next(error);
            }
        }
    );
    //***Delete ONE Movie***
    router.delete(
        "/:movieId",
        validationHandler({ movieId: movieIdSchema }, "params"),
        async (req, res, next) => {
            const { movieId } = req.params;
            try {
                const deleteMovieId = await moviesService.deleteMovie({
                    movieId
                });
                res.status(200).json({
                    data: deleteMovieId, //En la "data" viene de la Base de Datos, o en su defecto un simple mock
                    message: "movie deleted"
                });
            } catch (error) {
                next(error);
            }
        }
    );
}

module.exports = moviesApi;
