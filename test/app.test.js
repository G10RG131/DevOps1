const chai = require('chai');
const expect = chai.expect;
const http = require('http');

describe('GET /hello', () => {
  let server;

  // Start the server before tests
  before((done) => {
    server = require('../index');
    setTimeout(done, 500); // Wait briefly for server to start
  });

  // Stop the server after tests
  after((done) => {
    server.close(done);
  });

  it('should return "Hello World!"', (done) => {
    http.get('http://localhost:3000/hello', (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        expect(data).to.equal('Hello World!');
        done();
      });
    });
  });
});
