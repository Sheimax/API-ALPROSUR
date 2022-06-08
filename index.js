const express = require("express")
const routes = require("./routes")
const {mostrarError, manejarError, boomManejarError} = require("./middlewares/error.middleware")
const aplicacion = express()
const port = 3500

aplicacion.use(express.json())

routes(aplicacion)

aplicacion.use(mostrarError)
aplicacion.use(boomManejarError)
aplicacion.use(manejarError)

aplicacion.listen(port, () => {
  console.log("Puerto activo: " + port)
})

aplicacion.get("/", (req, res) => {
  res.send("Ventana principal del API")
})
