const {Sequelize} = require("sequelize")
const {setupModels} = require("../database/modelos")

const user = "postgres"
const host = "localhost"
const port = 5432
const password = "gow22Postgres"
const database = "api_alprosur"

const USUARIO = encodeURIComponent(user)
const PASSWORD = encodeURIComponent(password)

const URI = `Postgres://${USUARIO}:${PASSWORD}@${host}:${port}/${database}`

const sequelize = new Sequelize(URI, {
  dialect: "postgres",
  logging: console.log
})

setupModels(sequelize)
sequelize.sync()

module.exports = sequelize
