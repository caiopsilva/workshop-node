const Router = require('koa-router')
const users = require('./users-routes')
const router = new Router()

router.use(users)

module.exports = router