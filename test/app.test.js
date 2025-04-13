// test/app.test.js
import { expect } from 'chai';
import http from 'http';
import { after, before, describe, it } from 'mocha';

let server;

describe('GET /hello', () => {
  before(async () => {
    server = (await import('../index.js')).default;
    await new Promise(resolve => setTimeout(resolve, 500));
  });

  after(done => {
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
