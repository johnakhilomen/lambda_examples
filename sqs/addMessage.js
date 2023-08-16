
const AWS = require('aws-sdk');
const SQS = new AWS.SQS();

module.exports.addMessageFunc = async (event) => {
  const { body } = event;
  const params = {
    MessageBody: body,
    QueueUrl: process.env.QUEUE_URL
  };

  await SQS.sendMessage(params).promise();

  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'Message added successfully' }),
  };
};



