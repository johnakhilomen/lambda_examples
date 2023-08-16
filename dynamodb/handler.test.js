const { create, get, update, deleteItem } = require('./handler');
const AWS = require('aws-sdk');
const dynamoDb = new AWS.DynamoDB.DocumentClient();

// Mocking the DynamoDB functions

dynamoDb.put = jest.fn().mockReturnValue({
    promise: jest.fn().mockResolvedValueOnce({ Attributes: { id: '1', name: 'Test Item' } }),
});

dynamoDb.get = jest.fn().mockReturnValue({
    promise: jest.fn().mockResolvedValueOnce({ Item: { id: '1', name: 'Test Item' } }),
});

dynamoDb.update = jest.fn().mockReturnValue({
    promise: jest.fn().mockResolvedValueOnce({ Attributes: { id: '1', name: 'Updated Item' } }),
});

dynamoDb.delete = jest.fn().mockReturnValue({
    promise: jest.fn().mockResolvedValueOnce({}),
});



describe('DynamoDB CRUD Operations', () => {
 
  it('should create an item', async () => {
    const event = {
      body: JSON.stringify({
        id: '1',
        name: 'Test Item'
      })
    };

    const response = await create(event);
    const body = JSON.parse(response.body);

    expect(response.statusCode).toBe(200);
    expect(body.name).toBe('Test Item');
  });

  it('should fetch an item', async () => {
    const event = {
      pathParameters: {
        id: '1'
      }
    };

    const response = await get(event);
    const body = JSON.parse(response.body);

    expect(response.statusCode).toBe(200);
    expect(body.name).toBe('Test Item');
  });

  it('should update an item', async () => {
    const event = {
      pathParameters: {
        id: '1'
      },
      body: JSON.stringify({
        name: 'Updated Item'
      })
    };

    const response = await update(event);
    const body = JSON.parse(response.body);

    expect(response.statusCode).toBe(200);
    expect(body.name).toBe('Updated Item');
  });

//   it('should delete an item', async () => {
//     const event = {
//       pathParameters: {
//         id: '1'
//       }
//     };

//     const response = await delete(event);

//     expect(response.statusCode).toBe(200);
//   });

  // You should add more negative tests to handle errors
});
