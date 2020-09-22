const express = require("express");
const app = express();

const { config } = require("./config/index");

const moviesApi = require("./routes/movies.js");
//req.middlewares
const {errorHandler, logError, wrapErrors} = require("./utils/middlewares/errorHandler")

const notFoundHandler = require("./utils/middlewares/notFound")


//Middlewares
/* BodyParser */
app.use(express.json());

//API routes *Las rutas tambien son middlewares*
moviesApi(app);
//Catch 404
app.use(notFoundHandler)
/* Handler Errors */
app.use(logError)
app.use(wrapErrors)
app.use(errorHandler)
//
app.listen(config.port, () => {
    console.log(`listen on http://localhost:${config.port}`);
});
