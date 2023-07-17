const mongoose = require('mongoose');

async function main() {
  await mongoose.connect( process.env.DB_CONNECTION );
  console.log({ message: 'Conectado a la base de Datos'})
}

module.exports = {
    dbConnection: main
}