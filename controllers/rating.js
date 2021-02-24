import Company from '../models/company.js'

async function makeRating(req, res, next) {

  const ratingData = req.body
  const companyId = req.params.companyId
  ratingData.user = req.currentUser
  const currentUser = req.currentUser

  try {

    const company = await Company.findById(companyId).populate('ratings.user').populate('user')


    if (!company) {
      console.log('COMPANY', company)
      
      return res.status(404).send({ message: 'Not found' })
    
    }
    if (currentUser.type === 'company-admin') {
      return res.status(401).send({ message: 'Unauthorized' })
    }
    company.ratings.push(ratingData)


    const savedCompany = await company.save()

    res.send(savedCompany)

  } catch (err) {
    next(err)
  }
}



export default {
  makeRating 
}