const { mysqlDB } = require('../models/models')

const Stream = new mysqlDB('localhost', 'root', '', 'StoryStream-api')

class storybook {
  contructor(data, req, res){
    this.data = data
    this.req = req
    this.res = res
    //other variables
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
        //console.log(result)
      })
    })
  }
}

module.exports = {
  storybook
}
