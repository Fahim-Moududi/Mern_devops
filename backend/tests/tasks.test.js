const request = require('supertest');

const {server, app} = require('../index');


describe("GET /api/tasks", () => {
    it("should return 200 ok ", async () => {
        const res = await request(app).get('/api/tasks');
        expect(res.statusCode).toBe(200);
    })
})

afterAll(() => {
    server.close();
})