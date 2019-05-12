const Koa = require('koa')
const routes = require('./routes')
const koaBody = require('koa-body')

const PORT = 3000

const app = new Koa()

app.use(koaBody())
app.use(routes.routes())

app.listen(PORT, () => {
  console.log('Listening on port ' + PORT)
})
