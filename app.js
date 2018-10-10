
const argv =  require('./config/yargs.js').argv;

const colors = require('colors');

const porHacer =  require('./por-hacer/por-hacer');
// console.log(argv);
let comando = argv._[0];

switch (comando) {
  case 'listar':
  let listado = porHacer.getListado();
  // console.log("listado",listado);
  for(let tarea of listado){
    console.log('=========Por Hacer========='.black);
    console.log(tarea.descripcion);
    console.log('Estado: ',tarea.completado);
    console.log('==========================='.black);
  }
  break;
  case 'crear':
  // console.log("crea una tarea por hacer");
  let tarea = porHacer.crear(argv.descripcion);
  console.log(tarea);
  break;
  case 'actualizar':
    let actualizado = porHacer.actualizar(argv.descripcion,argv.completado);
    console.log(actualizado);
  break;
  case 'borrar':
    let borrado = porHacer.borrar(argv.descripcion);
    console.log(borrado);
  break;
  default:
  console.log("Comando no es reconocido");
  break;

}
