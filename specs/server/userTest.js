const expect = require('chai').expect;
const request = require('supertest-as-promised');
const app = require('./../../server/server');


describe('User Model', () => {
  const user = {
    name: 'test',
    email: 'test@test.com',
    password: 'test',
  };
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
