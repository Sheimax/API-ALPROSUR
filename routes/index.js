const express = require("express")
const pedidosRouter = require("./pedidos.route")

function routes(app) {
  const router = express.Router()
  app.use("/api/v1", router)
  router.use("/pedidos", pedidosRouter)
}

module.exports = routes
