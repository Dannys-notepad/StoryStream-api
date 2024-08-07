const mysql = require('mysql')
const { mysqlDB } = require('../models/models')

const Stream = new mysqlDB('localhost', 'root', '', 'StoryStream-api')

const checkApiKey = (req, res, next) => {
  let dbQuery = `SELECT * FROM apiKeys WHERE apiKeys.apiKey = '${req.params.apikey}'`
  Stream.db.connect((err) => {
    if(err){
      console.log(err)
    }
    Stream.db.query(dbQuery, (err, result) => {
      if(err){
        console.log(err)
      }else if(result.length > 0){
        next()
      }else{
        res.status(401).json({message: `The entered api key does not exist, recheck and try again`})
        console.log(req.params.apikey)
      }
    })
  })
}


module.exports = {
  checkApiKey
}
