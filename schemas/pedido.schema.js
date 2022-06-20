const Joi = require("joi")

const id = Joi.integer()
const supermercado = Joi.string().min(2).max(30)
const producto = Joi.string().min(2).max(50)
const cantidad = Joi.number().integer()
const fecha = Joi.string().min(6).max(12)

const createPedidoSchema = Joi.object({
  supermercado: supermercado.required(),
  producto: producto.required(),
  cantidad: cantidad.required(),
  fecha: fecha.required()
})

const updatePedidoSchema = Joi.object({
  id: id.required(),
  supermercado,
  producto,
  cantidad,
  fecha
})

const findByPedidoSchema = Joi.object({
  id: id.required()
})

module.exports = {createPedidoSchema, updatePedidoSchema, findByPedidoSchema}
