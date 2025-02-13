const express = require("express");
const path = require("path");
const app = express();
const db = require("./config/db");
const route = require("./router/userRouter");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static("public"));  
app.use(express.json());
app.use("/movies", route);
app.use("/uploads", express.static(path.join(__dirname, "uploads"))); 

app.listen(8000, () => {
    console.log("Server is running on port 8000");
});
