const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    releaseYear: { type: Number, required: true },
    image: { type: String, required: true } // ✅ Store image filename
});

const Movie = mongoose.model("Moviedata", movieSchema);
module.exports = Movie;
