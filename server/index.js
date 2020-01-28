require('dotenv').config()
const express = require('express')
const massive = require('massive')
const cors = require('cors')
const app = express()
const {SERVER_PORT, CONNECTION_STRING} = process.env

const userCtrl = require('./controllers/userController')
const userUrl = '/api/users'

app.use(cors())
app.use(express.json())

massive(CONNECTION_STRING).then(db => {
  app.set('db', db)
  app.listen(SERVER_PORT, () => console.log(`Listening on port ${SERVER_PORT}`))
}).catch(err => console.log(err))

//ENDPOINTS
app.get(`${userUrl}/:id`, userCtrl.getUser)
app.get(userUrl, userCtrl.getUsers)
app.post(userUrl, userCtrl.postUser)
app.put(`${userUrl}/:id`, userCtrl.putUser)
app.delete(`${userUrl}/:id`, userCtrl.deleteUser)