const express = require("express");
const { moviesMock } = require("../utils/mockes/movies");

function moviesApi(app) {
    //Exportar y pasar el APP de Express como parametro
    const router = express.Router(); //Enrutador de Express
    app.use("/api/movies", router); //Crearemos la ruta primer ruta

    //***Get All Movies***
    router.get("/", async (req, res, next) => {
        try {
            const movies = await Promise.resolve(moviesMock); /* ESTO INTERACTUARA CON LA DB */

            res.status(200).json({
                data: movies, //En la "data" viene de la Base de Datos, o en su defecto un simple mock
                message: "movies listed"
            });
        } catch (error) {
            next(error);
        }
    });
    //***Get One Movie***
    router.get("/:movieId", async (req, res, next) => {
        try {
            const movies = await Promise.resolve(moviesMock[0]); /* ESTO INTERACTUARA CON LA DB */

            res.status(200).json({
                data: movies, //En la "data" viene de la Base de Datos, o en su defecto un simple mock
                message: "movie retrieved"
            });
        } catch (error) {
            next(error);
        }
    });
    // ***How Create Movie
    router.post("/", async (req, res, next) => {
        try {
            const movieCreatedId = await Promise.resolve(moviesMock[0].id); /* ESTO INTERACTUARA CON LA DB */

            res.status(201).json({
                data: movieCreatedId, //En la "data" viene de la Base de Datos, o en su defecto un simple mock
                message: "movie created"
            });
        } catch (error) {
            next(error);
        }
    });
    //***Update ONE movie***
    router.put("/:movieId", async (req, res, next) => {
        try {
            const updatedMovieId = await Promise.resolve(moviesMock[0].id); /* ESTO INTERACTUARA CON LA DB */

            res.status(200).json({
                data: updatedMovieId, //En la "data" viene de la Base de Datos, o en su defecto un simple mock
                message: "movie updated"
            });
        } catch (error) {
            next(error);
        }
    });
    //***Delete ONE Movie***
    router.delete("/:movieId", async (req, res, next) => {
        try {
            const deleteMovieId = await Promise.resolve(moviesMock[0].id); /* ESTO INTERACTUARA CON LA DB */

            res.status(200).json({
                data: deleteMovieId, //En la "data" viene de la Base de Datos, o en su defecto un simple mock
                message: "movie deleted"
            });
        } catch (error) {
            next(error);
        }
    });
}

module.exports = moviesApi;
