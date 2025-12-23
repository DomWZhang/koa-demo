const Router = require('koa-router')
const { register, login } = require('../controller/user.controller')

const router = new Router({prefix: '/users'})


router.get('/', (ctx, next) => {
  ctx.body = 'Users '
})

router.post('/register', register)
router.post('/login', login)

module.exports = router