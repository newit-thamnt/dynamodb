'use strict';

const AWS = require("aws-sdk");
const fs = require('fs');

AWS.config.update({
    region: "ap-northeast-1",
    endpoint: "http://localhost:4569"
});

const docClient = new AWS.DynamoDB.DocumentClient();

console.log("Importing movies into DynamoDB. Please wait.");

const allMovies = JSON.parse(fs.readFileSync('./resources/moviedata.json', 'utf8'));

allMovies.forEach(function (movie) {
    const params = {
        TableName: "Movies",
        Item: {
            "year": movie.year,
            "title": movie.title,
            "info": movie.info
        }
    };

    docClient.put(params, function (err, data) {
        if (err) {
            console.error("Unable to add movie", movie.title, ". Error JSON:", JSON.stringify(err, null, 2));
        } else {
            console.log("PutItem succeeded:", movie.title);
        }
    });
});