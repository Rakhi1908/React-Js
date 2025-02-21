const User = require("../models/userModel");

const signup = async (req, res) => {
    const { username, password } = req.body;
    const user = new User({ username, password });
    await user.save();
    res.send("Signup successful, go to login page!");
};

const login = async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ username, password });

    if (!user) {
        return res.send("Invalid username or password");
    }

    res.cookie("userId", user._id.toString(), { maxAge: 1000 * 60 * 60 * 24 }); // 1 day expiry
    res.redirect("/home");
};

const logout = (req, res) => {
    res.clearCookie("userId");
    res.send("Logged out successfully");
};

const home = (req, res) => {
    if (!req.cookies.userId) {
        return res.redirect("/login");
    }
    res.render("home");
};

module.exports = { signup, login, logout, home };
