const empleados=[{
  id:1,
  nombre:"Jahir"
},
{
  id:2,
  nombre:"Leon"
},
{
  id:3,
  nombre:"Tavizon"
}];
const salarios=[{
  id:1,
  salario:"12000"
},
{
  id:2,
  salario:"1400"
},
{
  id:3,
  salario:"1150"
}];
const puestos=[{
  id:1,
  puesto:"Super visor"
},
{
  id:2,
  puesto:"Jefe de grupo"
},
{
  id:3,
  puesto:"Operador de produccion"
}];
const getEmpleado=(id)=>{
  return new Promise ((resolve,reject) => {
      const empleado = empleados.find(e=>e.id===id)?.nombre;
      (empleado)
      ?resolve(empleado)
      :reject(`No existe el empleado con id: ${id}`);
  });
}
const getSalario=(id)=>{
  return new Promise ((resolve,reject) => {
      const salario = salarios.find(s=>s.id===id)?.salario;
      (salario)
      ?resolve(salario)
      :reject(`No existe el salario con id: ${id}`);
  });
}
const getPuesto=(id)=>{
  return new Promise ((resolve,reject) => {
      const puesto = puestos.find(e=>e.id===id)?.puesto;
      (puesto)
      ?resolve(puesto)
      :reject(`No existe un puesto con id: ${id}`);
  });
}
//const getInfoUsuario=async()=>{
  //return "ola";
  const getInfoUsuario=async(id)=>{
      try{
          const empleado=await getEmpleado(id);
          const salario=await getSalario(id);
          const puesto=await getPuesto(id);
          return `El empleado ${empleado} tiene un salario de ${salario} pesos y tiene el puesto de ${puesto}`;
      }catch(error){
          throw error;
      }
  }
  const id=1;
//}
getInfoUsuario(id)
  .then(msg=>{
      console.log("TODO BIEN!")
      console.log(msg)
  })
  .catch(err=>{
      console.log("ALGO SALIO MAL!")
      console.log(err)
  });