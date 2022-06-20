const {PEDIDO_TABLE, PedidoSchema, Pedido} = require("./pedido.model")
const {TIPO_PEDIDO_TABLE, TipoPedidoSchema, TipoPedido} = require("./factura.model")

function setupModels(sequelize) {
  Pedido.init(PedidoSchema, Pedido.config(sequelize))
  TipoPedido.init(TipoPedidoSchema, TipoPedido.config(sequelize))
  TipoPedido.associate(sequelize.models)
}

module.exports = {setupModels}
