const boom = require("@hapi/boom")

class PedidosService {
  Pedidos = []

  constructor() {
    this.Pedidos = []
  }

  // Lista de Pedidos
  list() {
    return this.Pedidos
  }

  // Crear un Pedido
  create(aux) {
    // const error = this.update()
    const tam = this.Pedidos.length
    if (tam == 0) {
      aux.id = 1
    } else {
      aux.id = this.Pedidos[tam - 1].id + 1
    }
    this.Pedidos.push(aux)
  }

  // Actualizar un Pedido
  update(index, aux) {
    let repetir = true
    let i = 0
    let mensaje = ""
    if (this.Pedidos.length <= 0) {
      mensaje = "La lista de Pedidos está vacía"
    } else if (index <= 0 || index > this.Pedidos[this.Pedidos.length - 1].id) {
      mensaje = "Id no válido"
    } else {
      while (repetir) {
        if (i == this.Pedidos.length) {
          throw boom.notFound("No se encontró el Pedido")
          repetir = false
        } else {
          if (index == this.Pedidos[i].id) {
            if (aux.supermercado != undefined) {
              this.Pedidos[i].supermercado = aux.supermercado
            } if (aux.producto != undefined) {
              this.Pedidos[i].producto = aux.producto
            } if (aux.cantidad != undefined) {
              this.Pedidos[i].cantidad = aux.cantidad
            } if (aux.fecha != undefined) {
              this.Pedidos[i].fecha = aux.fecha
            }
            mensaje = "Pedido actualizado"
            repetir = false
          }
          i ++
        }
      }
    }
    return mensaje
  }

  // Actualización parcial de un Pedido
  updateParcial(index, aux) {
    let repetir = true
    let i = 0
    let mensaje = ""
    if (this.Pedidos.length <= 0) {
      mensaje = "La lista de Pedidos está vacía"
    } else if (index <= 0 || index > this.Pedidos[this.Pedidos.length - 1].id) {
      mensaje = "Id no válido"
    } else {
      while (repetir) {
        if (i == this.Pedidos.length) {
          throw boom.notFound("No se encontró el Pedido")
          repetir = false
        } else {
          if (index == this.Pedidos[i].id) {
            if (aux.supermercado != undefined) {
              this.Pedidos[i].supermercado = aux.supermercado
            } if (aux.producto != undefined) {
              this.Pedidos[i].producto = aux.producto
            } if (aux.cantidad != undefined) {
              this.Pedidos[i].cantidad = aux.cantidad
            } if (aux.fecha != undefined) {
              this.Pedidos[i].fecha = aux.fecha
            }
            mensaje = "Pedido parcialmente actualizado"
            repetir = false
          }
          i ++
        }
      }
    }
    return mensaje
  }

  delete(index) {
    let mensaje = ""
    if (index <= 0 ||index > this.Pedidos.length) {
      throw boom.notFound("No se encontró el Pedido")
    } else {
      this.Pedidos.splice(index - 1, 1)
      mensaje = "Pedido eliminado"
    }
    return mensaje
  }

  findAll(index) {
    let mensaje = ""
    if (this.Pedidos.length <= 0) {
      mensaje = "La lista de Pedidos está vacía"
    } else if (index <= 0 || index > this.Pedidos[this.Pedidos.length - 1].id) {
      mensaje = "Id no encontrado"
    } else {
      mensaje = "Pedido encontrado"
    }
    return mensaje
  }

  findBy(id) {
    const index = Number(id)
    const pedido = this.Pedidos.find(item => item.id === index)
    if (pedido == undefined) {
      throw boom.notFound("No se encontró el Pedido")
    } else {
      return pedido
    }
  }
}

module.exports = PedidosService
