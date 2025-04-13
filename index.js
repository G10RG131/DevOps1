import { expect } from 'chai';
import http from 'http';
import { describe, it, before, after } from 'mocha';
import server from '../index.js';  // direct import instead of dynamic

describe('GET /hello', () => {
  before(async () => {
    await new Promise(resolve => setTimeout(resolve, 300));
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