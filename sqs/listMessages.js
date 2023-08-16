const AWS = require('aws-sdk');
const SQS = new AWS.SQS();

module.exports.listMessagesFunc = async () => {
    const params = {
      QueueUrl: process.env.QUEUE_URL,
      MaxNumberOfMessages: 10,
    };
  
    const data = await SQS.receiveMessage(params).promise();

    return {
      statusCode: 200,
      body: JSON.stringify(data.Messages),
    };
  };
  