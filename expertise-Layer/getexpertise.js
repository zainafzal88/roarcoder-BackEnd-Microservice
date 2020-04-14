const AWS = require('aws-sdk')
const dynamodb = new AWS.DynamoDB.DocumentClient({ region: 'ap-southeast-2' })

let response;

exports.lambdaHandler = async (event, context) => {

    let uuid = event['pathParameters']['proxy']
    const params = {
        TableName: process.env.TABLE,
        Key: {
            UUID: uuid
        },
        ProjectionExpression: "title, image1, image2, image3, summary"
    };

    const getExpertiseInfo = await dynamodb.get(params).promise()

    try {
        response = {
            statusCode: 200,
            body: JSON.stringify(getExpertiseInfo.Item, null, 3)
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
