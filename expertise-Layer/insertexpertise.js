const AWS = require('aws-sdk')
const dynamodb = new AWS.DynamoDB.DocumentClient({ region: 'ap-southeast-2' })
const uuid = require('uuid')

let response;

exports.lambdaHandler = async () => {

    const params = {
        TableName: process.env.TABLE,
        Item: {
            'UUID': uuid.v4(),
            'title': 'Design',
            'active': true,
            'image1': 'https://s3-ap-southeast-2.amazonaws.com/roarcoder.dev/assets/images/css.svg',
            'image2': 'https://s3-ap-southeast-2.amazonaws.com/roarcoder.dev/assets/images/bootstrap.svg',
            'image3': 'https://s3-ap-southeast-2.amazonaws.com/roarcoder.dev/assets/images/html5Image.svg',
            'summary': 'I feel comfortable working on the front-end, going from pure CSS & HTML5 and Bootstrap',
        },
    }
    const insertRecord = await dynamodb.put(params).promise();
    
    try {
        response = {
            statusCode: 200,
            body: JSON.stringify(insertRecord, null, 3)
        };
    }
    catch (err) {
        response = {
            statusCode: 200,
            body: "An error occured: " + err
        };
    }

    const params1 = {
        TableName: process.env.TABLE,
        Item: {
            'UUID': uuid.v4(),
            'title': 'Code',
            'active': true,
            'image1': 'https://s3-ap-southeast-2.amazonaws.com/roarcoder.dev/assets/images/c%23.svg',
            'image2': 'https://s3-ap-southeast-2.amazonaws.com/roarcoder.dev/assets/images/java.svg',
            'image3': 'https://s3-ap-southeast-2.amazonaws.com/roarcoder.dev/assets/images/js.svg',
            'summary': 'My primary development language is C# however, I have worked with VB.NET, Java(Android),Objective C , JavaScript, Objective C and bit of PHP.',
        },
    }
    const insertRecord1 = await dynamodb.put(params1).promise();
    
    try {
        response = {
            statusCode: 200,
            body: JSON.stringify(insertRecord1, null, 3)
        };
    }
    catch (err) {
        response = {
            statusCode: 200,
            body: "An error occured: " + err
        };
    }

    const params2 = {
        TableName: process.env.TABLE,
        Item: {
            'UUID': uuid.v4(),
            'title': 'Tools',
            'active': true,
            'image1': 'https://s3-ap-southeast-2.amazonaws.com/roarcoder.dev/assets/images/git.svg',
            'image2': 'https://s3-ap-southeast-2.amazonaws.com/roarcoder.dev/assets/images/github.svg',
            'image3': 'https://s3-ap-southeast-2.amazonaws.com/roarcoder.dev/assets/images/linux.svg',
            'summary': 'Git, Github, TFS, Visual Studio Code, Asana, Trello, Visual Studio and Linux.',
        },
    }
    const insertRecord2 = await dynamodb.put(params2).promise();
    
    try {
        response = {
            statusCode: 200,
            body: JSON.stringify(insertRecord2, null, 3)
        };
    }
    catch (err) {
        response = {
            statusCode: 200,
            body: "An error occured: " + err
        };
    }
    return response;
}
