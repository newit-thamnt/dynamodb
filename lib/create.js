'use strict';

const AWS = require("aws-sdk");

AWS.config.update({
    region: "ap-northeast-1",
    endpoint: "http://localhost:4569"
});

const docClient = new AWS.DynamoDB.DocumentClient();

const params = {
    TableName: "Movies",
    Item: {
        "year": 2022,
        "title": "The Big New Movie 2022",
        "info": {
            "plot": "Nothing happens at all.",
            "rating": 0
        }
    }
}

console.log("Adding a new item...");
docClient.put(params, function(err, data) {
    if (err) {
        console.error("Unable to add item. Error JSON:", JSON.stringify(err, null, 2));
    } else {
        console.log("Added item:", data);
    }
});