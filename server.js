const express = require("express");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const authRoutes = require("./routes/authRoutes");
const connectDB = require("./config/db"); 

const app = express();
app.set("view engine", "ejs");
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());



app.use("/", authRoutes);

app.listen(7857, () => {
    console.log(" Server running on port 7857");
});
