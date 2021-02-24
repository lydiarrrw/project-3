/* eslint-disable no-undef */
import { expect } from 'chai'
import setup from './lib/setup.js'
import tearDown from './lib/tearDown.js'

// * Mocha 

describe('Testing REGISTER', () => {


  beforeEach(done => {
    setup(done)
  })

  afterEach(done => {
    tearDown(done)
  })


  it('Should be able to register a new user', done => {
    api.post('/api/register')
      // ? this supertest method is for sending data
      .send({
        name: 'max',
        email: 'max@max.com',
        password: 'max',
        type: 'job-seeker'
      })
      .end((err, res) => {
        expect(res.status).to.eq(201)
        expect(res.body.name).to.eq('max')
        done()
      })
  })

  it('Should be able to register user, then login a new user', done => {

    api.post('/api/register')
      .send({
        name: 'max',
        email: 'max@max.com',
        password: 'max',
        type: 'job-seeker'
      })
      .end((err, res) => {
        expect(res.status).to.eq(201)
        expect(res.body.name).to.eq('max')

        // ! trying to login
        api.post('/api/login')
          .send({
            email: 'max@max.com',
            password: 'max'
          })
          .end((err, res) => {
            expect(res.status).to.eq(202)
            expect(res.body.token).to.be.a('string')

            done()
          })
      })
  })

  it('Should be able to get a list of all the companies', done => {

    api.get('/api/companies')
      .end((err, res) => {
        // expect(res.status).to.eq(201)
        expect(res.body).to.be.a('array')
        expect(res.body[0].company).to.eq('Apple')
        expect(res.body[0].website).to.eq('apple.com')
        expect(res.body[0].jobs).to.be.a('array')
        expect(res.body[0].jobs[0].title).to.eq('Java Developer')
        expect(res.body[0].jobs[0]._id).to.be.a('string')


        done()

      })
  })

})
