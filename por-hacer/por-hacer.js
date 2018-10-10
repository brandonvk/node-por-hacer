

const fs = require('fs');



let listadoPorHacer = [];

const guardarDB = ()=>{

  let data = JSON.stringify(listadoPorHacer);
  fs.writeFile('./db/data.json',data,(err)=>{
    if(err)throw new Error('No se pudo grabar',err);
  });
  return data;
}


const cargarDB = () =>{
  try {
    listadoPorHacer = require("../db/data.json");
  } catch (e) {
      listadoPorHacer = [];
  }
}

const crear = (descripcion) => {
  cargarDB();
  let porHacer ={
    descripcion,
    completado:false
  }

  listadoPorHacer.push(porHacer)
  guardarDB();
  return porHacer;
}

const getListado= () =>{
  cargarDB();
  return listadoPorHacer;
}


const actualizar = (description,completado=true)=>{
  cargarDB();

  let index = listadoPorHacer.findIndex(tarea => tarea.descripcion===description);

  if(index>=0){
    listadoPorHacer[index].completado = completado;
    guardarDB();
    return true;
  }
  else return false;
}

const borrar = (description)=>{
  cargarDB();
  let nuevo = [];
  for(let tarea of listadoPorHacer) if(tarea.descripcion!=description) nuevo.push(tarea);
  if(listadoPorHacer.length===nuevo.length) return false;
  else{
    listadoPorHacer=nuevo;
    guardarDB();
    return true;    
  }
}

module.exports = {crear,getListado,actualizar,borrar}
