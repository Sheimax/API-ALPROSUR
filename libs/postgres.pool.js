const {Pool} = require("pg")

const pool = new Pool({
  host: "localhost",
  port: 5432,
  user: "postgres",
  password: "gow22Postgres",
  database: "api_alprosur"
})

module.exports = pool
