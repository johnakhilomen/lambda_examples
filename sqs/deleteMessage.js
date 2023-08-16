const AWS = require('aws-sdk');
const SQS = new AWS.SQS();

module.exports.deleteMessageFunc = async (event) => {
    const { receiptHandle } = JSON.parse(event.body);
    const params = {
      QueueUrl: process.env.QUEUE_URL,
      ReceiptHandle: receiptHandle,
    };
  
    await SQS.deleteMessage(params).promise();
  
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Message deleted successfully' }),
    };
  };
  