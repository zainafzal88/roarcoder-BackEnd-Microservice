#!/bin/bash
BUCKET_NAME=expertise-layer-backend
AWS_PROFILE=yahoo
# GROUP_NAME="Elderly Support Platform"

echo Now deploying the sam cloud formation
sam build \
    && sam package \
    --output-template-file packaged.yaml \
    --s3-bucket $BUCKET_NAME \
    --profile $AWS_PROFILE\
    && sam deploy \
    --template-file packaged.yaml \
    --stack-name get-expertise-data \
    --capabilities CAPABILITY_IAM \
    --region ap-southeast-2 \
    --profile $AWS_PROFILE