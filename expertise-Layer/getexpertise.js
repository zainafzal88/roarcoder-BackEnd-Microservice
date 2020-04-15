const AWS = require('aws-sdk')
const dynamodb = new AWS.DynamoDB.DocumentClient({ region: 'ap-southeast-2' })

let response;

exports.lambdaHandler = async (event) => {

    let uuid = event['pathParameters']['proxy']
    const params = {
        TableName: process.env.TABLE,
        KeyConditionExpression: '#uuid = :uuid',
        ExpressionAttributeNames: {
            '#uuid': 'UUID'
        },
        ExpressionAttributeValues: {
            ':uuid': uuid
        },
        ProjectionExpression: 'title, image1, image2, image3, summary, active'
    };

    const getExpertiseInfo = await dynamodb.query(params).promise();

    try {
        response = {
            statusCode: 200,

            // Enabled Cors
            headers: {
                "Access-Control-Allow-Origin": 'https://roarcoder.dev'
            },
            body: JSON.stringify(getExpertiseInfo.Items, null, 3)
        };
    }
    catch (err) {
        response = {
            statusCode: 200,
            body: "An error occured: " + err
        };
    }

    return response;
};
