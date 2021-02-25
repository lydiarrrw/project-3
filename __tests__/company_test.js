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
        expect(res.body.length).to.eq(2)
        done()
      })
  })
  it('Should be able to get a list of all the companies then grap a single company then grab a single job', done => {

    api.get('/api/companies')
      .end((err, res) => {
        const companyId = res.body[0]._id

        // ! trying to grab a single company
        api.get(`/api/company/${companyId}`)
          .end((err, res) => {
            const jobId = res.body.jobs[0]._id
            api.get(`/api/company/${companyId}/job/${jobId}`)
              .end((err, res) => {
                expect(res.body.title).to.be.a('string')
                expect(res.body.salary).to.be.a('string')
                done()
              })
          })
      })
  })

  it('A company should be able log in and post a job and then delete a job', done => {

    api.post('/api/login')
      .send({
        email: 'nick@nick.com',
        password: 'nick'
      })
      .end((err, res) => {
        expect(res.status).to.eq(202)
        expect(res.body.token).to.be.a('string')

        const token = res.body.token

        api.get('/api/companies')
          .end((err, res) => {
            expect(res.body).to.be.a('array')
            expect(res.body[0].company).to.eq('Apple')
            const companyId = res.body[0]._id

            api.get(`/api/company/${companyId}`)
              .end((err, res) => {
                expect(res.body.company).to.eq('Apple')

                api.post(`/api/company/${companyId}/job`)
                  .set('Authorization', `Bearer ${token}`)
                  .send({
                    title: 'React Developer',
                    description: 'Know React? Join our team!',
                    salary: '£500,000',
                    location: 'Mexico City'
                  })
                  .end((err, res) => {
                    expect(res.status).to.eq(200)
                    const jobId = (res.body.jobs[1]._id)
                    api.delete(`/api/company/${companyId}/job/${jobId}`)
                      .set('Authorization', `Bearer ${token}`)
                      .end((err, res) => {
                        expect(res.status).to.eq(200)
                        done()
                      })
                  })
              })
          })
      })
  })
  it('A company should not be able to delete a comment posted by a user', done => {

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

                        api.post('/api/login')
                          .send({
                            email: 'nick@nick.com',
                            password: 'nick'
                          })
                          .end((err, res) => {
                            expect(res.status).to.eq(202)
                            expect(res.body.token).to.be.a('string')
                            const adminToken = res.body.token

                            api.delete(`/api/company/${companyId}/comment/${commentId}`)
                              .set('Authorization', `Bearer ${adminToken}`)
                              .end((err, res) => {
                                console.log(res.status, res.text)
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
  it('A company should not be able to delete a job post by another company', done => {

    api.post('/api/login')
      .send({
        email: 'nick@nick.com',
        password: 'nick'
      })
      .end((err, res) => {
        expect(res.status).to.eq(202)
        expect(res.body.token).to.be.a('string')
        const token = res.body.token

        api.get('/api/companies')
          .end((err, res) => {
            expect(res.body).to.be.a('array')
            expect(res.body[1].company).to.eq('Facebook')
            const companyId = res.body[1]._id

            api.get(`/api/company/${companyId}`)
              .end((err, res) => {
                expect(res.body.company).to.eq('Facebook')
                expect(res.body.jobs.length).to.eq(1)
                const jobId = res.body.jobs[0]._id


                api.get(`/api/company/${companyId}/job/${jobId}`)
                  .end((err, res) => {
                    api.delete(`/api/company/${companyId}/job/${jobId}`)
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

