const JokeController = require('../controllers/joke.controller');

module.exports = app => {
    app.get('api/jokes', JokeController.findAllJokes);
    app.post("/api/jokes", JokeController.create);
    app.get("/api/jokes/:_id", JokeController.findOneById);
    app.put("/api/jokes/:_id", JokeController.updateJoke);
    app.delete("/api/jokes/:_id", JokeController.deleteJoke);
}