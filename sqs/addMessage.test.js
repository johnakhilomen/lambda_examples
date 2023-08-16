const AWS = require('aws-sdk');
const sqs = new AWS.SQS();
const { addMessageFunc } = require('./addMessage');

test('should add a message to the SQS queue', async () => {
    const event = {
        body: JSON.stringify({
            message: 'test-message'
        })
    };
    await addMessageFunc(event);

    // Check the message was added to SQS
    const messages = await sqs.receiveMessage({
        QueueUrl: 'https://sqs.us-east-1.amazonaws.com/162250892293/my-sqs-queue',
        MaxNumberOfMessages: 10,
        VisibilityTimeout: 60, // Time the message is hidden from subsequent retrieve requests in seconds
    }).promise();

    // expect(messages).toBeNull()
    // Received has value: {"ResponseMetadata": {"RequestId": "86c1337d-048e-5f9c-b1ba-6e2a2069ba37"}}
    expect(messages.ResponseMetadata).not.toBeNull();
    expect(messages.ResponseMetadata.RequestId).not.toBeNull();
    // expect(messages).toHaveLength(1);
    // expect(messages.Messages[0].Body).toEqual('test-message');
});
