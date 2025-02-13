const multer = require("multer");
const Movie = require("../model/userModel");

// Configure Multer Storage
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "uploads/"); // Ensure this folder exists
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + "-" + file.originalname);
    },
});

const upload = multer({ storage: storage });

// Add Movie with Image Upload
const addMovie = async (req, res) => {
    try {
        const { title, description, releaseYear } = req.body;
        const image = req.file ? req.file.filename : null;

        if (!image) {
            return res.redirect("/movie");
        }

        const movie = new Movie({ title, description, releaseYear, image });
        await movie.save();
        
        return res.redirect("/movie");
    } catch (error) {
        res.redirect("/movie");
    }
};

// Get Movies
const getMovies = async (req, res) => {
    try {
        const movies = await Movie.find();
        res.render("movie", { movies });
    } catch (error) {
        res.redirect("/movie");
    }
};

// Delete Movie
const deleteMovie = async (req, res) => {
    try {
        const movie = await Movie.findByIdAndDelete(req.params.id);
        if (!movie) return res.redirect("/movie");

        res.redirect("/movie");
    } catch (error) {
        res.redirect("/movie");
    }
};

// Update Movie
const updateMovie = async (req, res) => {
    try {
        const { title, description, releaseYear } = req.body;
        const image = req.file ? req.file.filename : req.body.oldImage;

        const movie = await Movie.findByIdAndUpdate(
            req.params.id,
            { title, description, releaseYear, image },
            { new: true }
        );

        if (!movie) return res.redirect("/movie");

        res.redirect("/movie");
    } catch (error) {
        res.redirect("/movie");
    }
};

// ✅ Export `upload` along with functions
module.exports = { addMovie, getMovies, deleteMovie, updateMovie, upload };
