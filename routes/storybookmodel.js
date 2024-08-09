const mysql = require('mysql')
const { mysqlDB } = require('../models/models')

// .env variables
const dbHost = process.env.DB_HOST
const dbUser = process.env.DB_USER
const dbPassword = process.env.DB_PASSWORD
const dbDatabase = process.env.DB_DATABASE

const Stream = new mysqlDB(dbHost, dbUser, dbPassword, dbDatabase)

const displayInXml = (data) => {
  const xml = `
    <Storybooks>
    ${data.map((s) => `
        <storybook>
          <id>${s.id}</id>
          <title>${s.title}</title>
          <body>${s.body}</body>
          <author>${s.author}</author>
          <date_added>${s.data_added}</date_added>
        </storybook>
      `).join('')}
    </Storybooks>
    `
  return xml
}

class storybook {
  contructor(){
    this.util = ''
    this.dbQuery = ''
  }

  viewAllStoryBooks(req, res){
    this.dbQuery = `SELECT * FROM Storybook`
    Stream.db.connect((err) => {
      if(err){
        console.log(err)
      }
      Stream.db.query(this.dbQuery, (err, result) => {
        if(err){
          console.log(err)
        }else if(req.query.restype === 'xml'){
          this.util = displayInXml(result)
          res.header('Content-Type', 'application/xml').send(this.util)
        }else{

          res.json({allBooks: result})
        }
      })
    })
  }

  findStoryBookByName(data, req, res){
    this.dbQuery = `SELECT * FROM Storybook WHERE Storybook.title = ${mysql.escape(data.title)}`
    Stream.db.connect((err) => {
      if(err){
        console.log(err)
      }
      Stream.db.query(this.dbQuery, (err, result) => {
        if(err){
          console.log(err)
        }else if(result.length === 0){
          res.status(404).json({message: `Book not found`})
        }else if(req.query.restype === 'xml'){
          this.util = displayInXml(result)
          res.header('Content-Type', 'application/xml').send(this.util)
        }else{
          res.json({StoryBook: result})
        }
      })
    })
  }
  
  findStoryBookById(data, req, res){
    this.dbQuery = `SELECT * FROM Storybook WHERE Storybook.id = ${mysql.escape(data.id)}`
    Stream.db.connect((err) => {
      if(err){
        console.log(err)
      }
      Stream.db.query(this.dbQuery, (err, result) => {
        if(err){
          console.log(err)
        }else if(result.length === 0){
          res.status(404).json({message: `Book not found`})
        }else if(req.query.restype === 'xml'){
          this.util = displayInXml(result)
          res.header('Content-Type', 'application/xml').send(this.util)
        }else{
          res.json({StoryBook: result})
        }
      })
    })
  }
  
  findStoryBookByAuthor(data, req, res){
    this.dbQuery = `SELECT * FROM Storybook WHERE Storybook.author = ${mysql.escape(data.author)}`
    Stream.db.connect((err) => {
      if(err){
        console.log(err)
      }
      Stream.db.query(this.dbQuery, (err, result) => {
        if(err){
          console.log(err)
        }else if(result.length === 0){
          res.status(404).json({message: `Book not found`})
        }else if(req.query.restype === 'xml'){
          this.util = displayInXml(result)
          res.header('Content-Type', 'application/xml').send(this.util)
        }else{
          res.json({StoryBook: result})
        }
      })
    })
  }
}

module.exports = {
  storybook
}
