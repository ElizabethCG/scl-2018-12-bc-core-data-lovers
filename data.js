// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

const example = () => {

// let informatioBm =Object.keys(WORLDBANK.PER.indicators);
// console.log(informatioBm);
// let informatioBm2 =(Object.keys(WORLDBANK.PER.indicatorName));
// let informationBm3= WORLDBANK.PER.dataSource;
// console.log(Object.keys(WORLDBANK));

// if (window.UndefinedVariable) {
//     Object.assign(window.UndefinedVariable, {});
// }

// console.log(array[j]); ojo con esto

console.log(WORLDBANK.PER.dataSource);

// ULTIMA ACTUALIZACIÓN POR PAIS
console.log(WORLDBANK.PER.lastUpdated);
console.log(WORLDBANK.MEX.lastUpdated);
console.log(WORLDBANK.CHL.lastUpdated);
console.log(WORLDBANK.BRA.lastUpdated);

console.log(WORLDBANK.PER.indicators[0].countryName);
console.log(WORLDBANK.MEX.indicators[0].countryName);
console.log(WORLDBANK.CHL.indicators[0].countryName);
console.log(WORLDBANK.BRA.indicators[0].countryName);


console.log(WORLDBANK.PER.indicators[0].countryCode);
console.log(WORLDBANK.PER.indicators[0].indicatorName);
/*console.log(WORLDBANK.PER.indicators[0].data);*/ /*Se debe almacenar en una variable. Aún no se cómo tomar directamente el valor desde el objeto*/
let almacenarObjetoData=(WORLDBANK.PER.indicators[0].data);
let mirarYear=(almacenarObjetoData[2004]);
console.log(mirarYear);


// LISTA DE TODOS LOS NOMBRE DE INDICADORES EXISTENTES.

for (i=0; i<139; i++){
  console.log(WORLDBANK.PER.indicators[i].indicatorName);
}



// EJEMPLO PARA IMPRIMIR POR PAIS E INDICADOR
console.log(" "+"\n"+"\n");
console.log("EMPIEZA IMPRESION POR PAIS");
array=[WORLDBANK.PER,WORLDBANK.MEX,WORLDBANK.BRA,WORLDBANK.CHL];

for (let j=0; j<4; j++){
console.log(array[j].indicators[0].countryName);


for (i=0; i<139; i++){
  console.log(array[j].indicators[i].indicatorName);


  let almacenarObjetoData=(array[j].indicators[0].data);

  for (k=1960; k<=2017 ; k++){

     let mirarYear=(almacenarObjetoData[k]);
     if (mirarYear===""){
       continue;
     }else{
console.log(k,mirarYear);}
}

}

}


   return "Terminó ejecución de la función";
}

window.example = example;
// console.log(example());
