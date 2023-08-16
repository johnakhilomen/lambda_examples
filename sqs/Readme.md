# Add a message with curl
`curl -X POST -H "Content-Type: application/json" -d "Hello SQS" YOUR_ENDPOINT_URL/message

curl -X POST -H "Content-Type: application/json" -d "Hello SQS" https://5r82032xl1.execute-api.us-east-1.amazonaws.com/dev/message
`

# List Messages with curl
`curl -X GET YOUR_ENDPOINT_URL/messages
curl -X GET https://5r82032xl1.execute-api.us-east-1.amazonaws.com/dev/messages
`

# Delete a message with curl
`curl -X DELETE -H "Content-Type: application/json" -d '{"receiptHandle": "YOUR_RECEIPT_HANDLE"}' YOUR_ENDPOINT_URL/message

curl -X DELETE -H "Content-Type: application/json" -d '{"receiptHandle": "YOUR_RECEIPT_HANDLE"}' https://5r82032xl1.execute-api.us-east-1.amazonaws.com/dev/message

`

# Get sqs url
`curl -X GET https://5r82032xl1.execute-api.us-east-1.amazonaws.com/dev/messages`


# Invoke addMessage:
If your addMessage function requires a message as input, you can provide it using the --data flag:
`npx serverless invoke -f addMessage --data '{"body": "Hello, World!"}'
`

# Invoke listMessages:
`npx serverless invoke -f listMessages
`

# Invoke deleteMessage

`npx serverless invoke -f deleteMessage --data '{"messageId": "example-message-id"}'
`