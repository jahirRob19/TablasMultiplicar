/*setTimeout(()=>{
    console.log("Hola");
},1500);*/
const getUsuarioByID=(id,callback)=>{
    const usuario={
        id,
        nombre:"Jahir"
    }
    setTimeout(()=>{
        /*console.log(usuario);
       callback();*/
       callback(usuario)
    },1500)
}
getUsuarioByID(10,(usuario)=>{
    console.log(usuario.id);
    console.log(usuario.nombre.toUpperCase())
});