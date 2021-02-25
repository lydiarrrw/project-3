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

  it('Should be able to register user, login a new user, find a company and then the user should be able to post a comment and then delete that comment BUT the user should not be able to delete a company', done => {

    api.post('/api/register')
      .send({
        name: 'tim',
        email: 'tim@tim.com',
        password: 'tim',
        type: 'job-seeker'
      })
      .end((err, res) => {
        expect(res.status).to.eq(201)
        expect(res.body.name).to.eq('tim')

        api.post('/api/login')
          .send({
            email: 'tim@tim.com',
            password: 'tim'
          })
          .end((err, res) => {
            expect(res.status).to.eq(202)
            expect(res.body.token).to.be.a('string')
            console.log(res.body)
            console.log(res.body.token)
            const token = res.body.token

            api.get('/api/companies')
              .end((err, res) => {
                expect(res.body).to.be.a('array')
                expect(res.body[0].company).to.eq('Apple')
                const companyId = res.body[0]._id

                api.get(`/api/company/${companyId}`)
                  .end((err, res) => {
                    expect(res.body.company).to.eq('Apple')

                    api.post(`/api/company/${companyId}/comment`)
                      .set('Authorization', `Bearer ${token}`)
                      .send({
                        text: 'I love this company'
                      })
                      .end((err, res) => {
                        const commentId = res.body.comments[0]._id
                        expect(res.status).to.eq(201)
                        expect(res.body.comments[0].text).to.eq('I love this company')

                        api.delete(`/api/company/${companyId}/comment/${commentId}`)
                          .set('Authorization', `Bearer ${token}`)
                          .end((err, res) => {
                            console.log(res.body)
                            expect(res.status).to.eq(200)

                            api.delete(`/api/company/${companyId}`)
                              .set('Authorization', `Bearer ${token}`)
                              .end((err, res) => {
                                expect(res.text).to.include('Unauthorized')
                                expect(res.status).to.eq(401)
                                done()
                              })
                          })
                      })
                  })
              })
          })
      })
  })

})

