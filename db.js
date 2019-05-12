const config =  require('./knexfile')
const Knex = require('knex')
const environment = 'development'

const knex = Knex(config[environment])

module.exports = knex