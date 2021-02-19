import Company from '../models/company.js'

async function postJob(req, res, next) {

  const jobData = req.body
  const companyId = req.params.companyId
  jobData.user = req.currentUser

  try {
    const company = await Company.findById(companyId).populate('jobs.user').populate('user')


    if (!company) {
      return res.status(404).send({ message: 'Not found' })
    }
 
    company.jobs.push(jobData)
    const savedCompany = await company.save()
    res.send(savedCompany)
  } catch (err) {
    next(err)
  }
}

async function updateJob(req, res, next) {
  const jobData = req.body
  const currentUser = req.currentUser
  const { jobId, companyId } = req.params

  try {
    const company = await Company.findById(companyId).populate('user').populate('jobs.user')
    if (!company) {
      return res.status(404).send({ message: 'Not found' })
    }


    const job = company.jobs.id(jobId)
    console.log('job user', job.user)
    console.log('current user', currentUser._id)

    if (!currentUser.isAdmin && !job.user.equals(currentUser._id)) {
      return res.status(401).send({ message: 'Unauthorized' })
    }
    job.set(jobData)

    const savedCompany = await company.save()

    res.send(savedCompany)

  } catch (err) {
    next(err)
  }
}

async function removeJob(req, res, next) {
  const currentUser = req.currentUser
  const { jobId, companyId } = req.params

  try {

    const company = await Company.findById(companyId).populate('user').populate('jobs.user')

    if (!company) {
      return res.status(404).send({ message: 'Not found' })
    }


    // ? .id is a mongoose method for grabbing a document out of an array of documents.
    const job = company.jobs.id(jobId)

    if (!currentUser.isAdmin && !job.user.equals(currentUser._id)) {
      return res.status(401).send({ message: 'Unauthorized' })
    }

    job.remove()

    const savedCompany = await company.save()

    res.send(savedCompany)

  } catch (err) {
    next(err)
  }
}

async function getSingleJob(req, res, next) {

  const companyId = req.params.companyId
  const jobId = req.params.jobId

  try {
    const company = await Company.findById(companyId).populate('user').populate('jobs.user')

    const job = company.jobs.id(jobId)

    res.send(job)
  } catch (err) {
    next(err)
  }
}


export default {
  postJob,
  updateJob,
  removeJob,
  getSingleJob
}