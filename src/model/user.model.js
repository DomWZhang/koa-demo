const { DataTypes } = require('sequelize')
const seq = require('../db/seq')

const User = seq.define('user', {
  // 主键 ID，会自动创建并自增
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    comment: '用户ID，自增主键'
  },
  user_name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    comment: '用户名，唯一'
  },
  password: {
    type: DataTypes.CHAR(64),
    allowNull: false,
    comment: '密码'
  },
  //  is_admin: {
  //   type: DataTypes.BOOLEAN,
  //   allowNull: false,
  //   defaultValue: 0,
  //   comment: '是否为管理员, 0: 不是管理员(默认); 1: 是管理员',
  // }
}, {
  tableName: 'users',
  timestamps: true, // 自动创建 createdAt 和 updatedAt
  comment: '用户表'
})

User.sync({ alter: true })
  .then(() => console.log('Users 表已同步/创建成功'))
  .catch(err => console.error('同步 Users 表失败:', err))

module.exports = User
