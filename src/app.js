const express = require("express")


const app = express();

app.use(express())

app.use("/todo", (req, res) => {
    res.json({ message: "Use petition", method: req.method})
})

// ? Here are all the routes of my tasks