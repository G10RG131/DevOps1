const request = require('supertest');
const app = require('../index'); // Import your Express app
const expect = require('chai').expect;

describe('GET /hello', () => {
  it('should return "Hello World!"', (done) => {
    request(app)
      .get('/hello')
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.text).to.equal('Hello World!');
        done();
      });
  });
});