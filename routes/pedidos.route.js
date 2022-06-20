const express = require("express")
const PedidosService = require("../services/pedidos.services")
const controlValidar = require("../middlewares/validar.middleware")
const {createPedidoSchema, updatePedidoSchema, findByPedidoSchema} = require("../schemas/pedido.schema")
const servicio = new PedidosService()
const router = express.Router()

// Lista de Pedidos
router.get("/list", async (req, res) => {
  servicio.findAll().then(data => {
    res.status(200).json(data)
  })
})

// Crear Pedido
router.post("/", controlValidar(createPedidoSchema, "body"), async (req, res, next) => {
  try {
    const body = req.body
    const pedido = await servicio.create(body)
    res.status(200).json(pedido)
  } catch (error) {
    next(error)
  }
})

// Actualizar un Pedido
router.put("/:id", (req, res) => {
  try {
    const id = req.params
    const body = req.body
    const pedido = servicio.update(id, body)
    res.status(200).json(pedido)
  } catch (error) {
    res.status(404).json({
      mensaje: error
    })
  }
})

// Actualización parcial de un Pedido
router.patch("/:id", async (req, res, next) => {
  try {
    const id = req.params
    const body = req.body
    const pedido = await servicio.updateParcial(id, body)
    res.status(200).json(pedido)
  } catch (error) {
    next(error)
  }
})

// Eliminar un Pedido
router.delete("/:id", (req, res) => {
  const id = req.params
  const salida = servicio.delete(id)
  res.status(200).json(salida)
})

// Buscar un Pedido
router.get("/:id", controlValidar(findByPedidoSchema, "params"), async (req, res, next) => {
  try {
    const id = req.params
    const pedido = await servicio.findBy(id)
    res.status(200).json(pedido)
  } catch (error) {
    next(error)
  }
})

module.exports = router
