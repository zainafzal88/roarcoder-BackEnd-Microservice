const AWS = require('aws-sdk')
const dynamodb = new AWS.DynamoDB.DocumentClient({ region: 'ap-southeast-2' })

let response;

exports.lambdaHandler = async (event) => {

    let uuid = event['pathParameters']['proxy']
    const params = {
        TableName: process.env.TABLE,
        KeyConditionExpression: '#uuid = :uuid',
        FilterExpression: '#active = :active',
        ExpressionAttributeNames: {
            '#uuid': 'UUID',
            '#active': 'active'
        },
        ExpressionAttributeValues: {
            ':uuid': uuid,
            ':active': true
        },
        ProjectionExpression: 'title, image1, image2, image3, summary'
    };

    const getExpertiseInfo = await dynamodb.query(params).promise();

    try {
        response = {
            statusCode: 200,

            // Enabled Cors
            headers: {
                "Access-Control-Allow-Origin": 'https://roarcoder.dev'
            },
            body: JSON.stringify(getExpertiseInfo, null, 3)
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
