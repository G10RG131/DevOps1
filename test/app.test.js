// test/app.test.js
import { expect } from 'chai';
import http from 'http';
import { describe, it, before, after } from 'mocha';

let server;

describe('GET /hello', () => {
  before(async () => {
    const module = await import('../index.js');
    server = module.default;
    await new Promise(resolve => setTimeout(resolve, 300)); // wait for server to start
  });

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
