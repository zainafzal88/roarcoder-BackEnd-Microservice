const AWS = require('aws-sdk')
const dynamodb = new AWS.DynamoDB.DocumentClient({region: 'ap-southeast-2'})

exports.lambdaHandler = async (event, context) => {

    let params = {
        TableName:process.env.TABLE,
        Key: {
            UUID: "1"
        },
        ProjectionExpression:"firstName, lastName, title, email, url_LinkedIn, url_Github"
    }

    let getUserInfo = await dynamodb.get(params).promise()
    let response;
        
    try {
        response = {
            statusCode: 200,
            body: JSON.stringify(getUserInfo.Item, null, 3)
        };
    }
    catch (err) {
        response = {
            statusCode: 200,
            body: "An error occured: " + err
        };
    }

    return response
};
