const AWS = require('aws-sdk')
const dynamodb = new AWS.DynamoDB.DocumentClient({region: 'ap-southeast-2'})

exports.handler = async (event) => {
    // TODO implement
    
    var params = {
        TableName: 'users',
        Key: {
            "id": "1"
        }
    };
    
    var userInfo = await dynamodb.get(params).promise()
    const response = {
        statusCode: 200,
        body: JSON.stringify(userInfo),
    };
    return response;
};