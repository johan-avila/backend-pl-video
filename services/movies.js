    //20 //15
const MongoLib = require("../lib/mongodb");

class MoviesService {
    //ESTO NO ME ES MUY CLARO, ES COMO TENER INCRUSTADA LA COLLECTION
    constructor() {
        this.collection = "movies";
        this.mongoDB = new MongoLib() 
        }
    //get ALL movies
    async getMovies({ tags }) {
        const query = tags && { tags: { $in: tags } };
        const movies = await this.mongoDB.getAll(this.collection, query);

        return movies || [];
    }
    //get ONE movie
    async getMovie({movieId}) {
        const movies = await this.mongoDB.getOne(this.collection, movieId)
        return movies || {};
    }
    //Create One movie
    async createMovie({movie}) {
        const createMovieId = await this.mongoDB.createOne(this.collection, movie)
       
        return createMovieId ;
    }
    //update ONE movie
    async updateMovie({movieId, movie} = {}) {
        const movies = await this.mongoDB.updateOne(this.collection, movieId, movie)
        return movies ;
    }
    //Delete ONE movie
    async deleteMovie({movieId}) {
        const deletedMovieId = await this.mongoDB.deleteOne(this.collection, movieId)
        return deletedMovieId || "Can't deleted movie";
    }
}

module.exports = MoviesService;
