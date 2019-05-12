const bcrypt = require('bcrypt')

module.exports = password => {
  const hashPassword = bcrypt.hash(password, 10)
  return hashPassword
}