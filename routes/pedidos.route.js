const express = require("express")
const PedidosService = require("../services/pedidos.services")
const controlValidar = require("../middlewares/validar.middleware")
const {createPedidoSchema, updatePedidoSchema, findByPedidoSchema} = require("../schemas/pedido.schema")
const servicio = new PedidosService()
const router = express.Router()

router.get("/", (req, res) => {
  res.status("Ventana de Pedidos")
})

// Lista de Pedidos
router.get("/list", (req, res) => {
  res.status(200).json(servicio.list())
})

// Crear Pedido
router.post("/", (req, res) => {
  const aux = req.body
  servicio.create(aux)
  res.status(201).json({
    mensaje: "Pedido agregado",
    datos: aux
  })
})

// Actualizar un Pedido
router.put("/:id", (req, res) => {
  const id = req.params
  const aux = req.body
  res.json({
    mensaje: servicio.update(id, aux),
    datosInsertados: aux
  })
})

// Actualización parcial de un Pedido
router.patch("/:id", (req, res) => {
  const id = req.params
  const aux = req.body
  res.json({
    mensaje: servicio.updateParcial(id, aux),
    datosInsertados: aux
  })
})

// Eliminar un Pedido
router.delete("/:id", (req, res) => {
  const id = req.params
  res.json({
    mensaje: servicio.delete(id),
    datosInsertados: aux
  })
})

// Buscar un Pedido
router.get("/:id", controlValidar(findByPedidoSchema, "params"), async (req, res, next) => {
  try {
    const id = req.params
    const pedido = await servicio.findBy(id)
    res.json(pedido)
  } catch (error) {
    next(error)
  }
})

module.exports = router;
