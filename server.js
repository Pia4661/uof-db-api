const express = require("express");
const students = require("./students");
const cors = require("cors");

const dotenv = require("dotenv");
dotenv.config();

const app = express();
app.use(cors());

// import Student model
const { Student } = require("./db");

// main endpoint
app.get("/", (req, res) => res.send("✅ - SETU DB API working."));

// students endpoint with caching
app.get("/students", (req, res) => {
    Student.findAll().then((students) => {
        res.send(students);
    });
});

// start express server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log("Server listening on port:", PORT);
});