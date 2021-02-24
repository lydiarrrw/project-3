/* eslint-disable no-undef */
import { expect } from 'chai'
import setup from './lib/setup.js'
import tearDown from './lib/tearDown.js'

// * Mocha

describe('Testing GET companies', () => {

  beforeEach(done => {
    setup(done)
  })
  afterEach(done => {
    tearDown(done)
  })

  it('should return a 200 response', done => {
    api.get('/api/companies')
      .end((err, res) => {
        expect(res.status).to.eq(200)
        done()
      })
  })

  // ? This is an individual test:
  it('should return an array of 1 company', done => {
    // ! The api part is SUPERTEST
    api.get('/api/companies')
      .end((err, res) => {
        expect(res.body).to.be.an('array')
        expect(res.body.length).to.eq(1)
        done()
      })
  })

})

