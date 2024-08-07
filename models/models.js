const mysql = require('mysql')

const superUserKey = process.env.APIKEY
const dbHost = process.env.DB_HOST
const dbUser = process.env.DB_USER
const dbPassword = process.env.DB_PASSWORD
const dbDatabase = process.env.DB_DATABASE

const setSignupSession = (data, req, res) => {
  req.session.user = {
    username: `${data.username}`,
    email: `${data.email}`,
    apiKey: `${data.apiKey}`
  }

  res.status(201).json({message: `Hello @${req.session.user.username}`, apiKey: req.session.user.apiKey})
}

const setLoginSession = (result, req, res) => {
  req.session.user = {
    username: result[0].username,
    email: result[0].email,
    apiKey: result[0].apiKey
  }

  res.json({message: `Welcome back @${req.session.user.username}`, apiKey: req.session.user.apiKey})
}

const checkIfSession = (req, res) => {
  let session = req.session.user
  res.json({user: session})
}


class mysqlDB {
  constructor(host, user, password, database){
    this.host = host
    this.user = user
    this.password = password
    this.database = database
    this.db = mysql.createConnection({
      host: this.host,
      user: this.user,
      password: this.password,
      database: this.database
    })
  }
}

const Stream = new mysqlDB(dbHost, dbUser, dbPassword, dbDatabase)

const exeQuery = (sql) => {
  return new Promise((resolve, reject) => {
    Stream.db.query(sql, (err, response) => {
      if(err){
        reject(err)
      }else{
        resolve(response)
        //console.log(result)
      }
    })
  })
}


class user {
  constructor(data, req, res){
    this.data = data
    this.req = req
    this.res = res
    this.dbQuery = ''
  }
  
  signup(){
    this.dbQuery = `SELECT * FROM Users WHERE username = '${this.data.username}' AND email = '${this.data.email}'`
    Stream.db.connect((err) => {
      if(err){
        console.error(err)
      }
      Stream.db.query(this.dbQuery, (err, result) => {
        if(err){
          console.error(err)
        } else if(result.length > 0){
          this.res.status(401).json({message: 'This user already exist'})
        }else{
          this.dbQuery = `INSERT INTO Users (uniqueId, username, email, password, apiKey) VALUES ('${this.data.uniqueId}', '${this.data.username}', '${this.data.email}', '${this.data.password}', '${this.data.apiKey}')`
          Stream.db.query(this.dbQuery, (err, result) => {
            if(err){
              console.error(err)
            }else{
              setSignupSession(this.data, this.req, this.res)
              this.dbQuery = `INSERT INTO apiKeys (userId, apiKey) VALUES ('${this.data.uniqueId}', '${this.data.apiKey}')`
              exeQuery(this.dbQuery)

            }
          })
        }
      })
    })
  }
  
  login(){
    this.dbQuery = `SELECT * FROM Users WHERE email = '${this.data.email}' AND password = '${this.data.password}'`
    Stream.db.connect((err) => {
      if(err){
        console.error(err)
      }
      Stream.db.query(this.dbQuery, (err, result) => {
        if(err){
          console.error(err)
        }else if(result.length > 0){
          setLoginSession(result, this.req, this.res)
        }else{
          this.res.status(401).json({message: `User does not exist`})
          console.log(result)
      }
      })
    })
  }
}

class superUser extends user{
  
  confirmSuperUser(){
    //this.req.session.username = req.query.api_key
    if(this.data.apikey === superUserKey){
      return true
    }else{
      return false
    }
  }

  viewAllUsers(){
    this.dbQuery = `SELECT * FROM Users`
    Stream.db.connect((err) => {
      if(err){
        console.error(err)
      }
      Stream.db.query(this.dbQuery, (err, result) => {
        if(err){
          console.error(err)
        }
        this.dbQuery = `SELECT * FROM apiKeys`
        Stream.db.query(this.dbQuery, (err, response) => {
          if(err){
            console.log(err)
          }
          this.res.json({allUsers: result, allApiKeys: response})
        })
      })
    })
  }
  
  deleteUser(){
    this.dbQuery = `DELETE FROM Users WHERE Users.uniqueId = '${this.data.id}'`
    Stream.db.connect((err) => {
      Stream.db.query(this.dbQuery, (err, result) => {
        if(err){
          console.error(err)
        }
        this.dbQuery = `DELETE FROM apiKeys WHERE apiKeys.userId = '${this.data.id}'`
        exeQuery(this.dbQuery)
        this.res.json({message: `User Deleted`})
      })
    })
  }

  viewStoryBooks(){
    this.dbQuery = `SELECT * FROM Storybook`
    Stream.db.connect((err) => {
      if(err){
        console.log(err)
      }
      Stream.db.query(this.dbQuery, (err, result) => {
        if(err){
          console.log(err)
        }
        this.res.json({allBooks: result})
      })
    })
  }

  addStoryBook(){
    this.dbQuery = `INSERT INTO Storybook (id, title, body, author) VALUES ('${this.data.id}', '${this.data.title}', '${this.data.body}', '${this.data.author}')`
    Stream.db.connect((err) => {
      if(err){
        console.log(err)
      }
      exeQuery(this.dbQuery)
      this.res.json({message: `Book titled ${this.data.title} added to database`})
    })
  }

  updateStoryBook(){
    this.dbQuery = `UPDATE Storybook SET body = '${this.data.body}' WHERE id = '${this.data.id}'`
    Stream.db.connect((err) => {
      if(err){
        console.log(err)
      }
      Stream.db.query(this.dbQuery, (err, result) => {
        if(err){
          console.log(err)
        }
        this.res.json({message: `Book '${this.data.id}' was successfully updated`})
      })
    })
  }

  deleteStoryBook(){
    this.dbQuery = `DELETE FROM Storybook WHERE Storybook.id = '${this.data.id}'`
    Stream.db.connect((err) => {
      if(err){
        console.log(err)
      }
      Stream.db.query(this.dbQuery, (err, result) => {
        if(err){
          console.log(err)
        }
        this.res.json({message: `Book '${this.data.id}' successfully deleted`})
      })
    })
  }
}


module.exports = {
  mysqlDB,
  user,
  superUser
}
