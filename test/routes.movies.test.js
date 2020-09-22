// const assert = require("assert");
const proxyquire = require("proxyquire");

const { /* moviesMock, */ MoviesServiceMock } = require("../utils/mockes/movies.js");

const testServer = require("../utils/testServer");

describe("routes - movies", function () {
    const route = proxyquire("../routes/movies", {
        "../services/movies": MoviesServiceMock //El service original se remplaza con "MoviesServiceMock" para hacer el test
    });

    const request = testServer(route)
    describe("GET /movies", function () {
        it("should respond with status 200", function (done) {
            request.get("/api/movies").expect(200, done )
             done()
        })
    });
});
