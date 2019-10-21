import * as request from 'supertest';

import app from './app';

describe('app', () => {
  describe('GET /tasks', () => {
    it('responses 200', async () => {
      await request(app)
        .get('/tasks')
        .expect('Content-Type', /json/)
        .expect(200);
    });

    it('renders tasks', async () => {
      const { body } = await request(app).get('/tasks');
      expect(body.length).toBe(0);
    });
  });

  describe('POST /tasks', () => {
    const getTasks = async () => {
      const { body } = await request(app).get('/tasks');
      return body;
    }

    it('responses 201', (done) => {
      request(app)
        .post('/tasks')
        .send({ title: 'Test Task' })
        .set('Accept', 'application/json')
        .expect(201, done);
    });

    it('creates a new task', async () => {
      const { length: oldCount } = await getTasks();

      const response = await request(app)
        .post('/tasks')
        .send({ title: 'Test Task!' })
        .set('Accept', 'application/json');

        const tasks = await getTasks();
        const { length: newCount } = tasks;

      expect(newCount - oldCount).toBe(1);

      const { length: l, [l - 1]: lastTask } = tasks;

      expect(lastTask.title).toBe('Test Task!');
    });
  });
});
