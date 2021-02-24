import Company from '../../models/company.js'
import User from '../../models/user.js'

export default async function tearDown(done) {
  try {
    await User.deleteMany()
    await Company.deleteMany()
  } catch (err) {
    console.log(err)
  }
  done()
}