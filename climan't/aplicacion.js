const colors = require('colors');
 
console.log('hello'.green); // outputs green text
console.log('i like cake and pies'.underline.red) // outputs red underlined text
console.log('inverse the color'.inverse); // inverses the color
console.log('OMG Rainbows!'.rainbow); // rainbow
console.log('Run the trap'.trap); // Drops the bass
const fs=require('fs');

const base=10;
let salida="";
console.log('============'.rainbow);
console.log(`Tabla del ${base} |`.rainbow);
console.log('============'.rainbow);
for(let i=1;i<=10;i++){
    salida+=(`${base}x${i}=${base*i}\n`.random);
}
console.log(salida);
fs.writeFile(`tabla-${base}.txt`,salida,(err)=>{
    if(err) throw err;
    console.log(`tabla del ${base}.txt creado`);
});

