const inquirer=require('inquirer');
const { async } = require('rxjs');
require('colors');
const preguntas =[
    {
        type:'list' , 
        name: 'opcion' , 
        message:'Que desea hacer?' , 
        choices:[
            {
                value:1,
                name:`${'1. '.green} Buscar ciudad`
            },
            {
                value:2,
                name:`${'2. '.green} Historial`
            },
            {
                value:0,
                name:`${'0.' .green} Salir`
            },
            
        ] 
    }
];
const inquirerMenu=async()=>{
    console.clear();
    console.log(`***********************`.green);
    console.log('Seleccione una opcion'.white);
    console.log('**********************\n'.green);
    const {opcion}=await inquirer.prompt(preguntas);
    return opcion;
}
const pausa = async ()=>{
    const question=[
        {
            type:'input',
            name: 'enter',
            message:`Presione ${'enter'.green} para continuar`
        }
    ];
    console.log('\n');
    await inquirer.prompt(question);
}
const leerInput=async(message)=>{
    const question=[
        {
            type:'input',
            name: 'desc',
            message,
            Validate(value){
                if(value.length===0)
                {
                    return 'Ingrese un valor';
                }
                return true;
            }
        }
    ];
    const {desc}=await inquirer.prompt(question);
    return desc;
}
const listarLugares=async(lugares=[])=>{
    const choices=lugares.map((lugar,indice)=>{
        const idx=`${indice+1}`.green;
        return{
            value:lugar.id,
            name:`${idx} ${lugar.nombre}`
        }

    });
    choices.unshift({
        value:'0',
        name:'0'.green + 'cancelar'
    });
    const preguntas =[{
        type:'list',
        name:'id',
        message:'seleccione lugar',
        choices
    }]
    const {id}=await inquirer.prompt(preguntas);
    return id;
}
const confirmar=async(message)=>{
    const question=[
        {
            type: 'confirm',
            name:'ok',
            message
        }
    ];
    const {ok} = await inquirer.prompt(question);
    return ok;
}
const mostrarListadoCheckList=async(tareas=[])=>{
    const choices=tareas.map((tarea,indice)=>{
        const idx = `${indice + 1}`.green;
        return {
            value: tareas.id,
            name:`${idx}${tarea.desc}`,
            checked: (tarea.completadoEn) ? true:false
        }
    });
    const pregunta=[
        {
            type:'checkbox',
            name:'ids',
            message:'Selecciones',
            choices
        }
    ]
    const {ids}=await inquirer.prompt(pregunta);
    return ids;
}
module.exports={
    inquirerMenu,
    pausa,
    leerInput,
    listarLugares,
    mostrarListadoCheckList,

}