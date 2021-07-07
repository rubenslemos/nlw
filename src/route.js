const express = require('express')
const QuestionController = require('./controllers/QuestionController.js')
const route = express.Router()
const RoomController = require('./controllers/RoomController')

route.get('/', (_req, res) => res.render("index", { page: 'enter-room' }))
route.get('/pass', (_req, res) => res.render("index", { page: 'pass' }))

route.post('/create/', RoomController.create)
route.get('/room/:room', RoomController.open)
route.post('/enter-room', RoomController.enter)

route.post('/question/create/:room', QuestionController.create)
route.post('/question/:room/:question/:action', QuestionController.index)

module.exports = route