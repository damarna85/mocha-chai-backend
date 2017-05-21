import mongoose from 'mongoose'
import chai from 'chai'
import chaiHttp from 'chai-http'
import server from '../../index.js'
import {
  findUsers,
  createUser,
  removeAllUsers,
} from '../../models/users.model'

const should = chai.should();
chai.use(chaiHttp);

//Our parent block
describe('Users', () => {
  
  beforeEach((done) => { //Before each test we empty the database
    removeAllUsers({}).then(
      res => done()
    ).catch(
      error => done()
    )
  });
  /*
  * Test the /GET route
  */
  describe('/GET users', () => {
    it('it should GET all the users', (done) => {
      chai.request(server)
      .get('/api/users')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.results.should.be.a('array');
        res.body.total.should.be.eql(0);
        done();
      });
    });
  });

  /*
  * Test the /POST route
  */
  describe('/POST user', () => {
    describe('whithout gender field set', () => {
      it('it should not POST a user without gender', (done) => {
        const user = {
          name: 'Pepo',
          lastname: "Domínguez",
          email: "pepo@devgurus.io",
        }
        chai.request(server)
        .post('/api/users')
        .send(user)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.should.have.property('errors');
          res.body.errors.should.have.property('gender');
          res.body.errors.gender.should.have.property('kind').eql('required');
          done();
        });
      });
    });

    /*
    * Test the /POST route
    */
    describe('without name field set', () => {
      it('it should not POST a user without name', (done) => {
        const user = {
          gender: 'Male',
          lastname: "Domínguez",
          email: "pepo@devgurus.io",
        }
        chai.request(server)
        .post('/api/users')
        .send(user)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.should.have.property('errors');
          res.body.errors.should.have.property('name');
          res.body.errors.name.should.have.property('kind').eql('required');
          done();
        });
      });
    });

    /*
    * Test the /POST route
    */
    describe('without a valid user', () => {
      it('it should not POST a user without name', (done) => {
        const user = {
          name: 'Pepo',
          gender: 'Male',
          lastname: "Domínguez",
          email: "pepo@devgurus.io",
        }
        chai.request(server)
        .post('/api/users')
        .send(user)
        .end((err, res) => {
          res.should.have.status(200);
          done();
        });
      });
    });
  });
});
