


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



const filterData = (data, condition) => {
return "Terminó ejecución de la función fiterData";
}
window.fiterData = filterData;




const sortData = (data, sortBy, sortOrder) => {
return "Terminó ejecución de la función sortData";
}
window.sortData = sortData;


const computeStats = (data) => {
return "Terminó ejecución de la función computeStats";
}
window.computeStats = computeStats;
