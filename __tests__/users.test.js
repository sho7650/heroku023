const request = require('supertest');
const express = require('express');

const app = express();
const router = require('../routes/users');

app.use('/users', router);

describe('GET /users', () => {
  test('should return 200 and text "respond with a resource"', async () => {
    const res = await request(app).get('/users');
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe('respond with a resource');
  });
});
