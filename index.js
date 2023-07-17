require('dotenv').config()

const express = require('express')
const cors = require('cors')

const { dbConnection } = require('./database/config')

const PORT = process.env.PORT || 3001

const app = express()

app.use(cors())
app.use(express.json())

dbConnection()

app.get('/', (req, res) => {
    res.json({
        ok: true,
        message: 'Hola Mundo'
    })
})

app.use('/api/usuarios', require('./routes/usuarios.routes'))

app.listen(PORT, () => {
    console.log({ message: `Servidor corriendo en el puerto ${ PORT }`})
})