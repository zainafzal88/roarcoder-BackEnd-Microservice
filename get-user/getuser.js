const AWS = require('aws-sdk')
const dynamodb = new AWS.DynamoDB.DocumentClient({region: 'ap-southeast-2'})

exports.lambdaHandler = async (event, context) => {

    var params = {
        TableName: "users"
    };

    var userInfo = await dynamodb.scan(params).promise()
    let response;
        
    try {
            response = {
                statusCode: 200,
                body: JSON.stringify(userInfo),
            };
        }
    catch (err) {
        console.log(err);
        return err;
    }

    return response
};
