import express from 'express'

import company from '../controllers/company.js'
import comment from '../controllers/comment.js'
import user from '../controllers/user.js'
import job from '../controllers/job.js'
import rating from '../controllers/rating.js'

const router = express.Router()

import secureRoute from '../middleware/secureRoute.js'

router.route('/companies')
  .get(company.getCompanyData)
  
router.route('/company/create')
  .post(secureRoute, company.createCompany)

router.route('/company/:id')
  .get(company.getSingleCompany)
  .put(secureRoute, company.updateCompany)
  .delete(secureRoute, company.removeCompany)

router.route('/register')
  .post(user.register)
  .get(user.getUser)

router.route('/login')
  .post(user.login)

router.route('/company/:companyId/comment')
  .post(secureRoute, comment.makeComment)

router.route('/company/:companyId/comment/:commentId')
  .put(secureRoute, comment.updateComment)
  .delete(secureRoute, comment.removeComment)

router.route('/company/:companyId/job')
  .post(secureRoute, job.postJob)

router.route('/company/:companyId/job/:jobId')
  .get(job.getSingleJob)
  .put(secureRoute, job.updateJob)
  .delete(secureRoute, job.removeJob)

router.route('/company/:companyId/rating')
  .post(secureRoute, rating.makeRating)

// router.route('/jobs')
//   .get(company.getAllJobs)

export default router