const request = require('supertest-as-promised');
const app = require('./../../server/server');

// User Creation test
describe('User creation', () => {
  const user = {
    name: 'test',
    email: 'test@test.com',
    password: 'test',
  };
  beforeEach((done) => {
    request(app)
      .delete('/users')
      .send(user)
      .end((err) => {
        if (err) {
          return done(err);
        }
        return done();
      });
  });
  it('should create a new user', (done) => {
    request(app)
      .post('/users')
      .send(user)
      .expect(201)
      .then(() => {
        return done();
      });
  });
});

describe('User login', () => {
  const user1 = {
    name: 'test1',
    email: 'test1@test.com',
    password: 'test1',
  };
  const user2 = {
    name: 'test2',
    email: 'test2@test.com',
    password: 'test2',
  };
  beforeEach((done) => {
    request(app)
      .post('/users')
      .send(user1)
      .then(() => {
        return done();
      });
  });

  it('should login existing users', (done) => {
    request(app)
      .post('/users/login')
      .send(user1)
      .expect(302)
      .then(() => {
        return done();
      });
  });
  it('should not login non existing users', (done) => {
    request(app)
      .post('users/login')
      .send(user2)
      .expect(404)
      .then(() => {
        return done();
      });
  });
});