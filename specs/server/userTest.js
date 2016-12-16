const expect = require('chai').expect;
const request = require('supertest-as-promised');
const app = require('./../../server/server');

// User Creation test
describe('Account creation', () => {
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
      .expect(200, (err, res) => {
        if (err) {
          return done(err);
        }
        expect(res.body[0].email).to.equal(user.email);
        return done();
      });
  });
});

describe('User login', () => {
  const user = {
    name: 'test1',
    email: 'test1@tes.com',
    password: 'test1',
  };
  beforeEach((done) => {
    request(app)
      .post('/users')
      .send(user)
      .end((err) => {
        if (err) {
          return done(err);
        }
        return done();
      });
  });

  it('should login existing users', (done) => {
    request(app)
      .post('/users/login')
      .send(user)
      .expect(302)
      .end(done);
  });
  it('should not login non existing users', (done) => {
    request(app)
      .post('users/login')
      .send({ name: 'test2', email: 'test2@test.com', password: 'test2' })
      .expect(401)
      .end(done);
  });
});