const express = require("express")
const Sequelize = require("sequelize")
const app = express()

const sequelize = new Sequelize("ALPROSUR", "root", "gow22MySQL", {
  host: "localhost",
  dialect: "mysql"
})

const Alprosur = sequelize.define("pedidos", {
  "id": {type:Sequelize.INTEGER, primaryKey: true},
  "supermercado": Sequelize.STRING,
  "producto": Sequelize.STRING,
  "cantidad": Sequelize.INTEGER,
  "fecha": Sequelize.STRING
})

sequelize.authenticate()
  .then(() => {
    console.log("Estamos conectados")
  })
  .catch(error => {
    console.log("Error de conexión" + error)
  })

app.listen(3306, () => {
  console.log("SERVER UP en http://localhost:3306")
})
