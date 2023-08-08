const empleados=[{
    id:1,
    nombre:"Combo Familiar"
  },
  {
    id:2,
    nombre:"Combo amigos"
  },
  {
    id:3,
    nombre:"Combo Pareja"
  }];
  const salarios=[{
    id:1,
    salario:"$421.00"
  },
  {
    id:2,
    salario:"$220.00"
  },
  {
    id:3,
    salario:"$187.00"
  }];
  const puestos=[{
    id:1,
    puesto:"Pizza Grande de 3 ingredientes, 2 cocas grandes de 3L"
  },
  {
    id:2,
    puesto:"Pizza grande de 2 ingredientes"
  },
  {
    id:3,
    puesto:"Pizza mediana de 2 ingredientes"
  }];
  const getEmpleado=(id)=>{
    return new Promise ((resolve,reject) => {
        const empleado = empleados.find(e=>e.id===id)?.nombre;
        (empleado)
        ?resolve(empleado)
        :reject(`No existe el combo con id: ${id}`);
    });
  }
  const getSalario=(id)=>{
    return new Promise ((resolve,reject) => {
        const salario = salarios.find(s=>s.id===id)?.salario;
        (salario)
        ?resolve(salario)
        :reject(`No existe el combo con id: ${id}`);
    });
  }
  const getPuesto=(id)=>{
    return new Promise ((resolve,reject) => {
        const puesto = puestos.find(e=>e.id===id)?.puesto;
        (puesto)
        ?resolve(puesto)
        :reject(`No existe el combo con id: ${id}`);
    });
  }
  //const getInfoUsuario=async()=>{
    //return "ola";
    const getInfoUsuario=async(id)=>{
        try{
            const empleado=await getEmpleado(id);
            const salario=await getSalario(id);
            const puesto=await getPuesto(id);
            return `El ${empleado} tiene un precio de ${salario} pesos y contiene lo siguiente:
              ${puesto}`;
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