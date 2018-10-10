
const description = {
  descripcion:{
    demand:true,
    alias:'d',
    desc:"Descripción de la tarea por hacer"
  }
}

const completado =   {
  alias:'c',
  default:true,
  desc:"Marca como acompletada la tarea"
}

const argv = require('yargs')
.command('crear','Crea una tarea',description)
.command('actualizar','Actualiza el status de una tarea',
  {
    completado,
    description
  })
.command('listar','Lista todas las tareas',{prioridad:{alias:'p'}})
.command('borrar','Borrra un registro de la lista',description)
.help()
.argv;

module.exports = {argv}
