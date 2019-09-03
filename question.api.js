const express = require("express");
//pulling in express
const questions = express.Router();
//pulling in router from server
const pool = require("../connection");
//connecting the connection file


questions.get("/questions", (res) => {
    //selecting animals from postgres, to get the table
    // res.send("GET works");
    // pool.query("select * from animals").then(result => {
    //     res.send(result.rows);
    // });
    selectRandomQuestions(res);
    //calling select all animals

});

function selectRandomQuestions(res) {
    //select all animals, lists all animals from table using postgres code
    pool.query("select * from questions order by random() limit 10").then(result => {
        res.send(result.rows);
    });

}

module.exports = questions;