import { v4 as uuidv4 } from 'uuid';
const AWS = require('aws-sdk')
const dynamodb = new AWS.DynamoDB.DocumentClient({region: 'ap-southeast-2'})

exports.lambdaHandler = async (event, context) => {

    const params = {
        TableName: process.env.TABLE,
    };
    
    const getUserInfo = await dynamodb.scan(params).promise()
    let response;
        
    try {
        response = {
            statusCode: 200,
            body: JSON.stringify(getUserInfo),
        };
    }
    catch (err) {
        response = {
            statusCode: 200,
            body: "An error occured: " + err,
        };
    }

    return response
};
