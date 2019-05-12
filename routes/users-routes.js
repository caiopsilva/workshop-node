const Router = require('koa-router')
const router = new Router()
const ctrl = require('../controllers/users-controller')

router.get('/users', ctrl.index)
router.post('/users', ctrl.create)

module.exports = router.routes()