import Company from '../models/company.js'

async function getCompanyData(_req, res, next) {
  try {
    const companyList = await Company.find().populate('user').populate('comments.user')
    res.send(companyList)
  } catch (err) {
    next(err)
  }
}

// async function createCompany(req, res, next) {
//   const body = req.body

//   body.user = req.currentUser
//   try {
//     const newCompany = await Company.create(body)
//     res.status(201).send(newCompany)
//   } catch (err) {
//     next(err)
//   }
// }

async function getSingleCompany(req, res, next) {
  const id = req.params.id

  try {
    const company = await Company.findById(id).populate('user').populate('comments.user')
    res.send(company)
  } catch (err) {
    next(err)
  }
}

async function removeCompany(req, res, next) {
  const id = req.params.id
  const currentUser = req.currentUser

  try {

    const companyToRemove = await Company.findById(id).populate('user').populate('comments.user')

    console.log(typeof companyToRemove.user)
    console.log(typeof currentUser._id)

    if (!currentUser.isAdmin && !currentUser._id.equals(companyToRemove.user)) {
      return res.status(401).send({ message: 'Unauthorized' })
    }

    await companyToRemove.deleteOne()

    res.send(companyToRemove)
  } catch (err) {
    next(err)
  }
}

async function updateCompany(req, res, next) {
  const id = req.params.id
  const currentUser = req.currentUser
  const body = req.body

  try {
    const companyToUpdate = await Company.findById(id)

    if (!companyToUpdate) {
      return res.send({ message: 'No company found' })
    }

    if (!currentUser.isAdmin && !companyToUpdate.user.equals(currentUser._id)) {
      return res.status(401).send({ message: 'Unauthorized' })
    }

    companyToUpdate.set(body)

    companyToUpdate.save()

    res.send(companyToUpdate)

  } catch (err) {
    next()
  }
}

export default {
  getCompanyData,
  //createCompany,
  getSingleCompany,
  removeCompany,
  updateCompany
}