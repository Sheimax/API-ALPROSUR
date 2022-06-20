const {Model, Sequelize, DataTypes} = require("sequelize")
const PEDIDO_TABLE = "pedidos"
const PedidoSchema = {
  id: {
    primaryKey: null,
    type: DataTypes.INTEGER,
    unique: true
  },
  supermercado: {
    allowNull: false,
    type: DataTypes.STRING
  },
  producto: {
    allowNull: false,
    type: DataTypes.STRING
  },
  cantidad: {
    allowNull: false,
    type: DataTypes.INTEGER
  },
  fecha: {
    allowNull: false,
    type: DataTypes.STRING
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: "created_at",
    defaultValue: Sequelize.NOW
  },
  tipoPedidoId: {
    type: DataTypes.INTEGER,
    field: "tipo_pedido_id",
    allowNull: false,
    references: {
      model: "tipo_pedido"
    }
  }
}

class Pedido extends Model {
  static associate(models) {
    this.belongsTo(models.tipoPedido, {
      as: "tipoPedido"
    })
  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: PEDIDO_TABLE,
      modelName: "pedido",
      timeStamps: false
    }
  }
}

module.exports = {PEDIDO_TABLE, PedidoSchema, Pedido}
