require('dotenv').config()
const express = require('express')

const app = express()
const userRoute = require('./routes/UserRoute')
const transportRoute = require('./routes/TransportRoute')
const passengerRoute = require('./routes/PassengerRoute')
const checkListRoute = require('./routes/CheckListRoute')
const loginRoute = require('./routes/UserLoginRoute')
const { validateUser } = require('./middlewares/validateLogin')

app.use(express.json())

app.use(loginRoute)
app.use(userRoute)

app.use(validateUser)

app.use(transportRoute)
app.use(passengerRoute)
app.use(checkListRoute)

app.listen(3000, () => { console.log('Server started') })
