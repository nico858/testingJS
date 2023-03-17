const request = require('supertest');

const createApp = require('../src/app');

describe('Test for hello endpoint', () => {
  let app = null;
  let server = null;

  beforeAll(async () => {
    app = await createApp();
    server = app.listen(3001);
  });

  afterAll(async () => {
    await server.close();
  });

  describe('test for [GET] /', () => {
    test('should return "Hello world!"', async () => request(app)
      .get('/')
      .expect(200)
      .then((response) => {
        expect(response.text).toBe('Hello world!');
      }));
  });
});
