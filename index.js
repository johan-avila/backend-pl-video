const express = require("express");

const app = express();
const { config } = require("./config/index");

const moviesApi = require("./routes/movies.js");

//Middlewares
/* BodyParser */
app.use(express.json());
//API routes
moviesApi(app);

app.listen(config.port, () => {
    console.log(`listen on http://localhost:${config.port}`);
});
