const MongoLib = require("../lib/mongodb")

class UserMoviesService {
    constructor (){
        this.collection = "user-movies";
        this.mongoDB = new MongoLib()
    }
    async getUserMovies ({ userId }){
        const query = userId && {userId}
        const userMovie = await this.mongoDB.getAll(this.collection , query)
        return userMovie || []
    }
    async createUserMovies ({ userMovie }){
        const createdUserMovie = await this.mongoDB.createOne(this.collection , userMovie)
        return createdUserMovie

    } 
    async deleteUserMovie({userMovieId}){
        const deletedUserMovie = this.mongoDB.deleteOne(this.collection, userMovieId)
        return deletedUserMovie
    }
}
module.exports = UserMoviesService