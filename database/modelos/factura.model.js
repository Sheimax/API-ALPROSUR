const {Model, Sequelize, DataTypes} = require("sequelize")
const TIPO_PEDIDO_TABLE = "tipo_pedidos"
const TipoPedidoSchema = {
  id: {
    primaryKey: null,
    type: DataTypes.INTEGER,
    field: "nombre_tipo_pedido",
    unique: true
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: "created_at",
    defaultValue: Sequelize.NOW
  },
  updatedAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: "updated_at",
    defaultValue: Sequelize.NOW
  }
}

class TipoPedido extends Model {
  static associate() {
  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: TIPO_PEDIDO_TABLE,
      modelName: "tipoPedido",
      timeStamps: false
    }
  }
}

module.exports = {TIPO_PEDIDO_TABLE, TipoPedidoSchema, TipoPedido}
