import Company from '../models/company.js'

async function makeComment(req, res, next) {

  const commentData = req.body
  const companyId = req.params.companyId
  commentData.user = req.currentUser

  try {

    const company = await Company.findById(companyId).populate('comments.user').populate('user')


    if (!company) {
      return res.status(404).send({ message: 'Not found' })
    }

    company.comments.push(commentData)


    const savedCompany = await company.save()

    res.send(savedCompany)

  } catch (err) {
    next(err)
  }
}

async function updateComment(req, res, next) {
  const commentData = req.body
  const currentUser = req.currentUser
  const { commentId, companyId } = req.params

  try {

    const company = await Company.findById(companyId).populate('user').populate('comments.user')

    if (!company) {
      return res.status(404).send({ message: 'Not found' })
    }


    const comment = company.comments.id(commentId)


    if (!comment.user.equals(currentUser._id)) {
      return res.status(401).send({ message: 'Unauthorized' })
    }

    comment.set(commentData)

    const savedCompany = await company.save()

    res.send(savedCompany)

  } catch (err) {
    next(err)
  }
}

async function removeComment(req, res, next) {
  const currentUser = req.currentUser
  const { commentId, companyId } = req.params

  try {

    const company = await Company.findById(companyId).populate('user').populate('comments.user')

    if (!company) {
      return res.status(404).send({ message: 'Not found' })
    }


    // ? .id is a mongoose method for grabbing a document out of an array of documents.
    const comment = company.comments.id(commentId)

    if (!comment.user.equals(currentUser._id)) {
      return res.status(401).send({ message: 'Unauthorized' })
    }

    comment.remove()

    const savedCompany = await company.save()

    res.send(savedCompany)

  } catch (err) {
    next(err)
  }
}

export default {
  makeComment,
  updateComment,
  removeComment
}