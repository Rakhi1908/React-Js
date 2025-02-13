// Database Connection
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/movies");

const db = mongoose.connection;

db.on("connected", () => {
    console.log("Database connected");
});
db.on("error", (err) => {
    console.log("Database connection error", err);
});
