# RoarCoder BackEnd Microservice
This project is about building backend microservice architecture from monolith of my personal [website](https://roarcoder.dev) in AWS such as [User Layer](https://roarcoder.atlassian.net/wiki/x/AQDvCQ)

# Motivation
The intention behind this project is to learn the engineering of microservice from monolith architecture by doing it.

# Prerequisites
1. AWS Account
2. Familiarity with AWS SAM
3. Node Package Manager(NPM) installed on your machine (check if already installed by running `npm --version`)
4. Knowledge of Node.js and YAML (check if already installed by running `node --version`)
5. AWS Command Line Interface (CLI) (check if already installed by running `aws --version`)
6. SAM CLI (check if already installed by running `sam --version`)

# Getting Started
1. Clone or download the repository.
2. Open in Visual Studio Code or any of your favourite text editor.

# Running The Project 
## Deploying to AWS
1. Get AWS-SDK by running *npm install aws-sdk* on the root
2. Create a S3 bucket in `ap-southeast-2` (Sydney) region by `aws s3 mb s3://your-bucket-name --region ap-southeast-2`
3. Replace endpoint in the `index.html` with your endpoint
4. Build the project using `sam build` command
4. If build is successfull, package the project by running `sam package --template-file template.yaml --output-template-file package.yaml --s3-bucket your-bucket-name`
5. Deploy it by running `sam deploy --template-file package.yaml --stack-name your-application-name --capabilities CAPABILITY_IAM --region ap-southeast-2`
6. Execute endpoint in your preferred browser
7. Data from DynamoDB should be shown

## Testing Locally
1. Ensure you have [Docker](https://www.docker.com/products/docker-desktop)
2. Get AWS-SDK by running `npm install aws-sdk` on the root
3. Test lambda function with `sam local invoke GetUserFunction --no-event --profile your-profile-name`
4. You should see the response from DynamoDB.
