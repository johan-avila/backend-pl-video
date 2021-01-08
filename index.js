const express = require("express");
const cors = require("cors")
const app = express();

const { config } = require("./config/index");

const moviesApi = require("./routes/movies.js");
const userMoviesApi = require("./routes/userMovie");
const authApi = require("./routes/auth");

//req.middlewares   
const {
    errorHandler,
    logError,
    wrapErrors
} = require("./utils/middlewares/errorHandler");

const notFoundHandler = require("./utils/middlewares/notFound");

//Middlewares
/* BodyParser */
app.use(express.json());
app.use(cors());

//API routes *Las rutas tambien son middlewares*
authApi(app)
moviesApi(app);
userMoviesApi(app);

//Catch 404
app.use(notFoundHandler);
/* Handler Errors */
app.use(logError);
app.use(wrapErrors);
app.use(errorHandler);
//
app.listen(config.port, () => {
    console.log(`listen on http://localhost:${config.port}`);
});
