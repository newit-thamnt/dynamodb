'use strict';

const AWS = require("aws-sdk");

AWS.config.update({
    region: "ap-northeast-1",
    endpoint: "http://localhost:4569"
});

const docClient = new AWS.DynamoDB.DocumentClient();

const table = "Movies";
const year = 2022;
const title = "The Big New Movie 2022";

const params = {
    TableName: table,
    Key:{
        "year": year,
        "title": title,
    }
}

docClient.get(params, function(err, data) {
    if (err) {
        console.error("Unable to read item. Error JSON:", JSON.stringify(err, null, 2));
    } else {
        console.log("GetItem succeeded:", data);
    }
});