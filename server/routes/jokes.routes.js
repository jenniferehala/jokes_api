const JokesController = require("../controllers/jokes.controller");

module.exports = app => {
    app.get("/api/test", JokesController.testResponse); 
    app.get("/api/jokes/findAll", JokesController.findAllJokes);
    app.get("/api/jokes/:_id", JokesController.findOneJoke)
    app.post("/api/jokes/create", JokesController.createJoke);
    app.delete("/api/jokes/:_id/delete", JokesController.deleteJoke )
    app.patch("/api/jokes/:_id/update", JokesController.updateOneJoke)

}   