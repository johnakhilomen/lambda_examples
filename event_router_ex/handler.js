const AWS = require('aws-sdk');
const dynamodb = new AWS.DynamoDB.DocumentClient();
const tableName = 'MyDynamoTableDev';

exports.create = async (event) => {
    // Logic to create an item in DynamoDB
    let response = {
        statusCode: 200,
        body: JSON.stringify({ message: 'Item created successfully' })
    };
    try {
        const item = JSON.parse(event.body);
        await dynamodb.put({
            TableName: tableName,
            Item: item
        }).promise();
    } catch (error) {
        response = {
            statusCode: 500,
            body: JSON.stringify({ message: 'Error creating item' })
        };
    }
    return response;
};

exports.read = async (event) => {
    // Logic to read an item from DynamoDB using event['pathParameters']['id']
    const id = event.pathParameters.id;
    let response = {
        statusCode: 200,
        body: JSON.stringify({ message: 'Item fetched successfully' })
    };
    try {
        const result = await dynamodb.get({
            TableName: tableName,
            Key: { id }
        }).promise();
        response.body = JSON.stringify(result.Item);
    } catch (error) {
        response = {
            statusCode: 500,
            body: JSON.stringify({ message: 'Error fetching item' })
        };
    }
    return response;
};

exports.update = async (event) => {
    // Logic to update an item in DynamoDB using event['pathParameters']['id']
    const id = event.pathParameters.id;
    const item = JSON.parse(event.body);
    let response = {
        statusCode: 200,
        body: JSON.stringify({ message: 'Item updated successfully' })
    };
    try {
        await dynamodb.update({
            TableName: tableName,
            Key: { id },
            UpdateExpression: "set info = :info",
            ExpressionAttributeValues: {
                ":info": item.info
            }
        }).promise();
    } catch (error) {
        response = {
            statusCode: 500,
            body: JSON.stringify({ message: 'Error updating item' })
        };
    }
    return response;
};

exports.delete = async (event) => {
    // Logic to delete an item from DynamoDB using event['pathParameters']['id']
    const id = event.pathParameters.id;
    let response = {
        statusCode: 200,
        body: JSON.stringify({ message: 'Item deleted successfully' })
    };
    try {
        await dynamodb.delete({
            TableName: tableName,
            Key: { id }
        }).promise();
    } catch (error) {
        response = {
            statusCode: 500,
            body: JSON.stringify({ message: 'Error deleting item' })
        };
    }
    return response;
};

exports.router = async (event) => {
    if (!event.body || typeof event.body !== 'string') {
        return {
            statusCode: 400,
            body: JSON.stringify({ message: 'Invalid request payload' })
        };
    }
    console.log('Event Body:', event.body);
    const body = JSON.parse(event.body);
    const operation = body.operation;
    switch(operation) {
        case 'CREATE':
            return await exports.create(event);
        case 'READ':
            return await exports.read(event);
        case 'UPDATE':
            return await exports.update(event);
        case 'DELETE':
            return await exports.delete(event);
        default:
            return {
                statusCode: 400,
                body: JSON.stringify({ message: 'Invalid operation' })
            };
    }
};
