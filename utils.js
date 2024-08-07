const bcryptjs = require('bcryptjs')

const generateUniqueId = () => {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456u89'
  let result = ''
  for(let i = 0; i < 10; i++){
    result += characters.charAt(Math.floor(Math.random() * characters.length))
  }
  return result
}
const generateApiKey = () => {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456u89'
  let template = 'Stream_'
  for(let i = 0; i < 10; i++){
    template += characters.charAt(Math.floor(Math.random() * characters.length))
  }
  return template
}

//console.log(generateApiKey())

module.exports = {
  generateUniqueId,
  generateApiKey
}
