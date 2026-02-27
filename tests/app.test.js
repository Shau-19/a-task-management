const request = require('supertest');
const app = require('../index');
jest.mock('../services/core');
const coreService = require('../services/core');
describe('GET /graphql', () => {
  it('should return a user', async () => {
    coreService.getUser.mockReturnValue({ id: '123', name: 'John Doe' });
    const response = await request(app).get('/graphql?query={user(id:\"123\") { id name }}');
    expect(response.status).toBe(200);
    expect(response.body.data.user).toEqual({ id: '123', name: 'John Doe' });
  });
});