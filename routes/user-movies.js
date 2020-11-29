const express = require("express")

const UserMoviesService = require("../services/user-movies")
// const validationHandler = require("../utils/middlewares/validationHandler")

// const { movieIdSchema } = require("../utils/schema/movie")
// const { userIdSchema } = require("../utils/schema/users")
// const { createUserMoviesSchema } = require("../utils/schema/user-movies")

function userMoviesApi(app) {
    const router = express.Router()
    app.use("/api/user-movies", router)
    
    const userMoviesService = new UserMoviesService()
    
    router.get("/",
        async (req, res, next)=>{
            const {userId} = req.query
            try {
                const userMovies = await userMoviesService.getUserMovies({userId})
                res.status(200).json({
                    data: userMovies,
                    message: "User-Movies listed"
                })
            } catch (error) {
                next(error)
            }
        }
    )
    router.post("/", async (req, res, next)=>{
        const {userMovie} = req.body
        try {
            const createdUserMovie = await userMoviesService.createUserMovies({userMovie})
            res.status(201).json({
                data: createdUserMovie,
                message: "User movie created"
            })
        } catch (error) {
            next(error)
        }
    })
    router.delete("/:userMovieId", async (req, res, next)=>{
        try {
            const { userMovieId } = req.params
            const deletedUserMovie = userMoviesService.deleteUserMovie({userMovieId})

            res.status(200).json({
                data: deletedUserMovie,
                message: "User-movie deleted"
            })
        } catch (error) {
            next(error)
        }
    })

}

module.exports = userMoviesApi