#!/bin/bash

# Path to the specific log file
LOG_FILE="/home/ubuntu/apilogs/logs/apicalls.log"

# S3 bucket name
S3_BUCKET="ecbnk-apilogs"

# AWS region
AWS_REGION="ap-south-1"

# Upload the specific file to the S3 bucket
aws s3 cp "$LOG_FILE" "s3://$S3_BUCKET/logs/" --region "$AWS_REGION"
