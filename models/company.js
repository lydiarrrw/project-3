import mongoose from 'mongoose'
import uniqueValidator from 'mongoose-unique-validator'


const commentSchema = new mongoose.Schema({
  
  text: { type: String, required: true },

  user: { type: mongoose.Schema.ObjectId, ref: 'User', required: true }
}, { 
  timestamps: true
})

const jobSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  salary: { type: String, required: true },
  location: { type: String, required: true },
  user: { type: mongoose.Schema.ObjectId, ref: 'User', required: true }
}, { 
  timestamps: true
})

const companySchema = new mongoose.Schema({
  company: { type: String, required: true, unique: true },
  website: { type: String, required: true },
  about: { type: String, required: true },
  industry: { type: [String], required: true },
  logo: { type: String, required: true },
  jobs: [ jobSchema ],
  user: { type: mongoose.Schema.ObjectId, ref: 'User', required: true },
  rating: { type: Number },
  comments: [ commentSchema ]
})

companySchema.plugin(uniqueValidator)

export default mongoose.model('Company', companySchema)

