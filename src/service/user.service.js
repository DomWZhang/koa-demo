const User = require('../model/user.model')

class UserService {
  async createUser(user_name, password) {
    // todo: 写入数据库 
    try {
      const res = await User.create({ user_name, password })
      return res.dataValues
    } catch (error) {
      console.log('errMsg:', error)
    }
    
  } 
}

module.exports = new UserService()