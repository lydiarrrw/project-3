import User from '../models/user.js'
import jwt from 'jsonwebtoken'
import { secret } from '../config/environment.js'


async function register(req, res, next) {
  if (req.body.isAdmin) {
    delete req.body.isAdmin
  }
  const body = req.body
  try {
    const user = await User.create(body)
    res.status(201).send(user)
  } catch (err) {
    next(err)
  }
}

async function getUser(req, res, next) {
  // ? Sending back all my users
  try {
    const userList = await User.find()
    res.send(userList)
  } catch (err) {
    next(err)
  }
}

async function getSingleUser(req, res, next) {
  const userId = req.params.userId
  console.log('params', req.params)
  console.log('body', req.body)
  try {
    const user = await User.findById(userId)
    res.send(user)
  } catch (err) {
    next(err)
  }
}

async function login(req, res, next) {
  const password = req.body.password
  try {

    const user = await User.findOne({ email: req.body.email })

    console.log('logged in user')
    console.log(user)

    if (!user || !user.validatePassword(password)) {
      return res.status(401).send({ message: 'Unauthorized' })
    }
    console.log('User Has Validated')

    const token = jwt.sign(
      { userId: user._id },
      secret,
      { expiresIn: '12h' }
    )
    console.log(token)

    res.status(202).send({ token, message: 'Login successful!' })

  } catch (err) {
    next(err)
  }
}

export default {
  register,
  login,
  getUser,
  getSingleUser
}