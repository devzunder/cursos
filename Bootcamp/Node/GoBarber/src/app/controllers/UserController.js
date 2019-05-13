const { User } = require('../models')

class UserController {
  create (req, res) {
    return res.render('auth/signup')
  }
  async store (req, res) {
    try {
      req.body.avatar = 'teste.jpg'
      await User.create(req.body)
      return res.redirect('/')
    } catch (err) {
      console.warn(err)
    }
  }
}

module.exports = new UserController()
