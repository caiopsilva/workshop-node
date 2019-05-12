const knex = require('../db.js')
const hashPassword = require('../utils/hash-password')

module.exports = {
  index: async (ctx) => {
    const user = await knex('users')
      .select('name', 'email', 'created_at', 'updated_at')

    ctx.body = user
  },

  create: async (ctx) => {
    const body = ctx.request.body

    body.password = await hashPassword(body.password)

    const user = await knex('users')
    .insert({
      name: body.name,
      email:body.email,
      password: body.password
    })
    .returning(['name', 'email', 'created_at', 'updated_at'])
    
    ctx.body = user[0]
  }
}