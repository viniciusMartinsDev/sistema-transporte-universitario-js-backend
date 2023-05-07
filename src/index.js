const express = require('express')

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

const routeTeste = require('./routes/teste')

app.use(routeTeste)

app.listen(3000)
console.log('Servidor iniciado')
