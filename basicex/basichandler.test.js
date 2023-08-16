const { handler, basichandlerfunc } = require('./basichandler');

describe('squareLambda', () => {
    it('should return the square of a number', async () => {
        const event = { number: 5 };
        const response = await basichandlerfunc(event);
        expect(response.statusCode).toBe(200);
        expect(JSON.parse(response.body).result).toBe(25);
    });

    it('should return an error when number is not provided', async () => {
        const event = {};
        const response = await basichandlerfunc(event);
        expect(response.statusCode).toBe(400);
        expect(JSON.parse(response.body).message).toBe("Number is required!");
    });
});
