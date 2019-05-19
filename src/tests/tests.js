import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import env from 'dotenv';
import App from '../app';

chai.use(chaiHttp);

env.config();

describe('check test', () => {
  it('should get the base endpoint', (done) => {
    chai
      .request(App)
      .get('/api')
      .set({
        'Content-type': 'application/json',
      })
      .end((err, res) => {
        expect(res.status).to.equal(200);
        done();
      });
  });
});
