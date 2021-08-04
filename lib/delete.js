'use strict';

const AWS = require("aws-sdk");

AWS.config.update({
    region: "ap-northeast-1",
    endpoint: "http://localhost:4569"
});

var docClient = new AWS.DynamoDB.DocumentClient();

const table = "Movies";
const year = 1940;
const title = "Rebecca";

const params = {
    TableName:table,
    Key:{
        "year": year,
        "title": title
    },
    ConditionExpression:"info.rating = :val",
    ExpressionAttributeValues: {
        ":val": 8.3
    }
};

console.log("Attempting a conditional delete...");
docClient.delete(params, function(err, data) {
    if (err) {
        console.error("Unable to delete item. Error JSON:", JSON.stringify(err, null, 2));
    } else {
        console.log("DeleteItem succeeded:", data);
    }
});