process.env.NODE_ENV = 'test'

//! Importing Chai -- an assertion library 
import chai from 'chai'
global.expect = chai.expect

//! Importing Supertest -- a wrapper for testing APIs
import supertest from 'supertest'
import expressApp from '../index.js'
global.api = supertest(expressApp)
