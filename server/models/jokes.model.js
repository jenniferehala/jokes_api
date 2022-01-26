const mongoose = require("mongoose")
const jokesRoutes = require("../routes/jokes.routes")


const JokesSchema = new mongoose.Schema({
    setup: String,
    punchline: String
}, {timestamps: true})

const Jokes = mongoose.model("Jokes", JokesSchema);

module.exports = Jokes;