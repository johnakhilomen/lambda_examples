const AWS = require('aws-sdk');
const SQS = new AWS.SQS();

exports.getQueueUrlFunc = async (event) => {
    const queueUrl = process.env.QUEUE_URL;
    if (!queueUrl) {
        return {
            statusCode: 400,
            body: JSON.stringify({ message: "No found QUEUE_URL!" })
        };
    }
    
    const result = queueUrl;
  
    return {
        statusCode: 200,
        body: JSON.stringify({ result })
    };
  };
  