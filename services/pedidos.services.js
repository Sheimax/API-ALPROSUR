const boom = require("@hapi/boom")
// const getConnection = require("../libs/postgres")
// const pool = require("../libs/postgres.pool")
const sequelize = require("../libs/sequelize")

class PedidosService {

  constructor() {
    // this.pool = pool
    // this.pool.on("error", (err) => console.log(err))
  }

  // Crear un Pedido
  async create(pedido) {
    const newPedido = {
      ...pedido
    }
    const {supermercado, producto, cantidad, fecha} = newPedido
    const query = "insert into pedidos {supermercado, producto, cantidad, fecha} values ('" + supermercado + "', '" + producto + "', " + cantidad + ", '" + fecha + "')"
    await sequelize.query(query)
    // const cliente = await getConnection()
    // await cliente.query("insert into pedidos {supermercado, producto, cantidad, fecha} values ('" + supermercado + "', '" + producto + "', " + cantidad + ", '" + fecha + "')")
    return newPedido
  }

  // Actualizar un Pedido
  async update(id, pedido) {
    return pedido
  }

  // Actualización parcial de un Pedido
  updateParcial(id, pedidoParcial) {
    return pedidoParcial
  }

  // Borrar un Pedido
  delete(id) {
    return id
  }

  findAll() {
    const query = "select * from pedidos"
    const [data] = await sequelize.query(query)
    // const cliente = await getConnection()
    // const exit = await cliente.query("select * from pedidos")
    return data
  }

  findBy(id) {
    return id
  }
}

module.exports = PedidosService
