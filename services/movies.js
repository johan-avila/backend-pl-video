//20 //15
const { moviesMock } = require("../utils/mockes/movies.js");

class MoviesService {
    //get ALL movies
    async getMovies() {
        const movies = await Promise.resolve(moviesMock);
        return movies || [];
    }
    //get ONE movie
    async getMovie() {
        const movies = await Promise.resolve(moviesMock[0]);
        return movies || {};
    }
    //Create One movie
    async createMovie() {
        const createMovieId = await Promise.resolve(moviesMock[0].id);
        return createMovieId || "Can't create movie";
    }
    //update ONE movie
    async updateMovie() {
        const movies = await Promise.resolve(moviesMock[0]);
        return movies || "Can't updated movie";
    }
    //Delete ONE movie
    async deleteMovie() {
        const deletedMovieId = await Promise.resolve(moviesMock[0].id);
        return deletedMovieId || "Can't deleted movie";
    }
}

module.exports = MoviesService;
