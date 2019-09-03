const express = require("express");
const cors = require("cors");
const app = express ();
const questions = require('./question.api');
const scores = require ('./scores.api');


app.use(cors());
app.use(express.json());
app.use("/", questions);
app.use("/", scores);

const port = 8080;

app.listen(port, () => console.log(`Server running on PORT: ${port}.`));






