const assert = require("assert");
const proxyquire = require("proxyquire");

const { MongoLibMock, getAllStub } = require("../utils/mockes/mongoLib");
const { moviesMock } = require("../utils/mockes/movies");

describe("services - movies", function(){
    const MoviesServices = proxyquire("../services/movies", {
        "../lib/mongodb": MongoLibMock
    })

    const MoviesService = new MoviesServices()

    describe("when getMovies method is called", async function(){
        it("should call the getall MongoLib method", async function(){
            await MoviesService.getMovies({});
            assert.strictEqual(getAllStub.called, true)
        })
        it("should return an array of movies", async function(){
            const result = await MoviesService.getMovies({})
            const expected =  moviesMock;
            assert.deepEqual(result, expected)
        })
    })
})