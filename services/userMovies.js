const MongoLib = require("../lib/mongodb");

class UserMoviesService {
    constructor() {
        this.collection = "user-movies";
        this.mongoDB = new MongoLib();
    }

    async getUserMovies({ userId }) {
        const query = userId && { userId };
        const userMovies = await this.mongoDB.getAll(this.collection, query);

        return userMovies || [];
    }
    async createUserMovies({ userMovie }) {
        const createdUserMovieId = await this.mongoDB.createOne(
            this.collection,
            userMovie
        );
        return createdUserMovieId;
    }
    async deleteUserMovie({ userMovieId }) {
        const deleteUserMovieId = await this.mongoDB.deleteOne(
            this.collection,
            userMovieId
        );
        return deleteUserMovieId;
    }
}

module.exports = UserMoviesService;
