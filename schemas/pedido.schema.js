const Joi = require("joi")

const id = Joi.string()
const supermercado = Joi.string().alphanum().min(2).max(30)
const producto = Joi.string().alphanum().min(2).max(50)
const cantidad = Joi.number().integer().min(2)
const fecha = Joi.string().alphanum().min(6).max(10)

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
