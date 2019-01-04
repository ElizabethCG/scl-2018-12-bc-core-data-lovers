
// función donde recorreré el arreglo de objetos para acceder a su propiedad name
const nombreIndicadores = (paisBuscar) => {
  let nombres = []; // arreglo vacío donde pushearé los nombres de indicadores.
  for (let i = 0; i<139;i++) {
    let nombreIndicador = paisBuscar.indicators[i];
    nombres.push(nombreIndicador.indicatorName);
  }
  return nombres; //retorno el arreglo de nombres para luego tomarlo desde el archivo main.js y hacer la visualización de datos con el DOM
}
window.nombreIndicadores = nombreIndicadores;



const datosPorYear = (paisBuscar,nombreIndicador,almacenarObjetoData) => {
  let m=0;
    let otroObjeto = [];
    for (let k=1960; k<=2017 ; k++){

       let mirarYear=(almacenarObjetoData[k]);
       if (mirarYear===""){
         continue;
       }else{
  let nuevoObjeto = {year : 0 , valor : 0};
  nuevoObjeto.year = k;
  nuevoObjeto.valor=mirarYear ;
  otroObjeto[m] = nuevoObjeto;
  m=m+1;
  }
}
  return otroObjeto; //retorno el arreglo de objetos para luego tomarlo desde el archivo main.js y hacer la visualización de datos con el DOM
}
window.datosPorYear = datosPorYear;



// FUNCION QUE ORDENA
const ordenarDatosPorYear = (retornoDatosYear) => {

  let arrayOrdenado=retornoDatosYear;

    arrayOrdenado.sort(function (a, b) {
      if (a.year > b.year) {
        return -1;
      }
      if (a.year < b.year) {
        return 1;
      }
      // a must be equal to b
      return 0;


    });

    return arrayOrdenado; //retorno el arreglo de objetos para luego tomarlo desde el archivo main.js y hacer la visualización de datos con el DOM
  }
  window.ordenarDatosPorYear = ordenarDatosPorYear;




const sortData = (data, sortBy, sortOrder) => {
return "Terminó ejecución de la función sortData";
}
window.sortData = sortData;


const computeStats = (data) => {
return "Terminó ejecución de la función computeStats";
}
window.computeStats = computeStats;


// FUNCION DADA COMO EJEMPLO PARA EMPEZAR A TRABAJAR SEGUN README
// const filterData = (data, condition) => {
// return "Terminó ejecución de la función fiterData";
// }
// window.fiterData = filterData;
