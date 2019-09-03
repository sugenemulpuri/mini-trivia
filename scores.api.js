const express = require("express");
//pulling in express
const scores = express.Router();
//pulling in router from server
const pool = require("../connection");
//connecting the connection file

function selectAllScores(res) {
    //select all animals, lists all animals from table using postgres code
    pool.query("select * from scores").then(result => {
        res.send(result.rows);
    });

}

scores.get("/scores", (res) => {
    //selecting animals from postgres, to get the table
    // res.send("GET works");
    // pool.query("select * from animals").then(result => {
    //     res.send(result.rows);
    // });
    selectAllScores(res);
    //calling select all animals

});

scores.post("/scores", (res) => {
    //inserting the postman information into the table, with setting up the columns and types for each column
    pool.query("insert into scores (username, score) values ($1::text, $2::int)", [req.body.username, req.body.score]).then(() => {
        selectAllScores(res);
        //listing the whole table again

    });
    // res.send("POST works");
});

module.exports = scores;

