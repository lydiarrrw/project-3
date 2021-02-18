import mongoose from 'mongoose'
import connectToDb from '../lib/connectToDb.js'
import Company from '../models/company.js'
import User from '../models/user.js'
import getCompanyData from './data/companyData.js'
import getUserData from './data/userData.js'

async function seedDatabase() {
  try {
    await connectToDb()

    console.log('🤖 Database connected!')

    await mongoose.connection.db.dropDatabase()

    console.log('🤖 Database was dropped!')

    const users = await User.create(getUserData())

    console.log(`🤖 ${users.length} users created!`)

    const companyData = await getCompanyData(users)

    const company = await Company.create(companyData)

    console.log(`🤖 ${company.length} company created!`)

    await mongoose.connection.close()
    console.log('🤖 Goodbye!')

  } catch (err) {
    console.log('🤖 Something went wrong with seeding!')
    console.log(err)

    await mongoose.connection.close()
    console.log('🤖 Goodbye!')
  }
}

seedDatabase()