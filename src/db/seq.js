const { Sequelize } = require('sequelize')
const {
  MYSQL_HOST,
  MYSQL_PORT,
  MYSQL_USER,
  MYSQL_PWD,
  MYSQL_DB,
} = require('../config/index')

// 'database', 'username', 'password'
const seq = new Sequelize('dom_test', 'domzhang', 'XXXX',
  {
    host: 'mysql5.sqlpub.com', // TCP代理地址
    port: 3310, // 代理端口（按你看到的数值填写）
    dialect: 'mysql',
    dialectModule: require('mysql2'),
    ssl: {
      rejectUnauthorized: false
    }
  }
);

// seq.authenticate()
//   .then(() => {
//     console.log('Connection has been established successfully.')
//   })
//   .catch((error) => {
//     console.error('Unable to connect to the database:', error)
//   })

  module.exports = seq