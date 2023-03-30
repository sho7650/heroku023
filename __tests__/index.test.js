const request = require('supertest');
const express = require('express');

const app = express();
const router = require('../routes/index');

app.set("view engine", "ejs");
app.use('/', router);

describe('Routing', () => {
  test('GET / with localhost should render local template', async () => {
    const response = await request(app).get('/').set('host', 'localhost');
    expect(response.status).toBe(200);
    expect(response.text).toContain('access to localhost');
  });

  test('GET / with prfm.info should render prfm template', async () => {
    const response = await request(app).get('/').set('host', 'prfm.info');
    expect(response.status).toBe(200);
    expect(response.text).toContain('access to Perfume');
  });

  test('GET / with multi.kashiyuka.info should render kashiyuka template', async () => {
    const response = await request(app).get('/').set('host', 'multi.kashiyuka.info');
    expect(response.status).toBe(200);
    expect(response.text).toContain('access to kashiyuka');
  });

  test('GET / with multi.prfm.jp should render index template', async () => {
    const response = await request(app).get('/').set('host', 'multi.prfm.jp');
    expect(response.status).toBe(200);
    expect(response.text).toContain('access to prfm.jp');
  });

  test('GET / with unknown host should return 400 error', async () => {
    const response = await request(app).get('/').set('host', 'unknown.host');
    expect(response.status).toBe(400);
  });
});
