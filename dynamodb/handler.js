const AWS = require('aws-sdk');
const dynamo = new AWS.DynamoDB.DocumentClient();
const TABLE_NAME = 'MyDynamoTableDev';

module.exports.create = async (event) => {
    const item = JSON.parse(event.body);

    await dynamo.put({
        TableName: TABLE_NAME,
        Item: item
    }).promise();

    return { statusCode: 200, body: JSON.stringify(item) };
};

module.exports.read = async (event) => {
    const id = event.pathParameters.id;

    const data = await dynamo.get({
        TableName: TABLE_NAME,
        Key: { id }
    }).promise();

    return { statusCode: 200, body: JSON.stringify(data.Item) };
};

module.exports.update = async (event) => {
    const id = event.pathParameters.id;
    const body = JSON.parse(event.body);

    await dynamo.update({
        TableName: TABLE_NAME,
        Key: { id },
        UpdateExpression: 'set info = :info',
        ExpressionAttributeValues: {
            ':info': body.info
        }
    }).promise();

    return { statusCode: 200, body: JSON.stringify(body) };
};

module.exports.delete = async (event) => {
    const id = event.pathParameters.id;

    await dynamo.delete({
        TableName: TABLE_NAME,
        Key: { id }
    }).promise();

    return { statusCode: 200, body: JSON.stringify({ id }) };
};
