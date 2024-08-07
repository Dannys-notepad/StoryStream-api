const { mysqlDB } = require('../models/models')

const dbHost = process.env.DB_HOST
const dbUser = process.env.DB_USER
const dbPassword = process.env.DB_PASSWORD
const dbDatabase = process.env.DB_DATABASE

const Stream = new mysqlDB(dbHost, dbUser, dbPassword, dbDatabase)

class storybook {
  contructor(data, req, res){
    this.data = data
    this.req = req
    this.res = res
    this.dbQuery = ''
  }

  viewAllStoryBooks(res){
    this.dbQuery = `SELECT * FROM Storybook`
    Stream.db.connect((err) => {
      if(err){
        console.log(err)
      }
      Stream.db.query(this.dbQuery, (err, result) => {
        if(err){
          console.log(err)
        }
        res.json({allBooks: result})
      })
    })
  }
}

module.exports = {
  storybook
}
