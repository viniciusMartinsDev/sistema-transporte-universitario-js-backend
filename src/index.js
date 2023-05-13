const express = require('express')

const app = express()
const userRoute = require('./routes/UserRoute')
const transportRoute = require('./routes/TransportRoute')
const passengerRoute = require('./routes/PassengerRoute')

app.use(express.json())

app.use(userRoute)
app.use(transportRoute)
app.use(passengerRoute)

app.listen(3000, () => { console.log('Server started') })
