const express = require("express");
const { addMovie, getMovies, deleteMovie, updateMovie, upload } = require("../controller/userController");

const router = express.Router();

router.post("/add", upload.single("image"), addMovie);
router.get("/", getMovies);
router.delete("/delete/:id", deleteMovie);
router.put("/update/:id", upload.single("image"), updateMovie);

module.exports = router;
