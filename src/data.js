
// función donde recorreré el arreglo de objetos para acceder a su propiedad name
//Función para filtrar
const nombreIndicadores = (paisBuscar) => {   //paisBuscar (condición)//
  let nombres = []; // arreglo vacío donde pushearé los nombres de indicadores.
  for (let i = 0; i < paisBuscar.indicators.length; i++) { //paisBuscar
    let nombreIndicador = paisBuscar.indicators[i];
    nombres.push(nombreIndicador.indicatorName);
  }
  return nombres; //retorno el arreglo de nombres para luego tomarlo desde el archivo main.js y hacer la visualización de datos con el DOM
}
window.nombreIndicadores = nombreIndicadores;


//Filtrar por país y nombre del indicador
const dataForYear = (paisBuscar, nombreIndicador, almacenarObjetoData) => {
  let otroObjeto = [];
  for (let k = 1960; k <= 2017; k++) { //aquí está buscando el atributo dentro de data (que está dentro de otra data)
    let mirarYear = (almacenarObjetoData[k]);
    if (mirarYear === "") {
      continue; //si pasa eso que no haga nada
    } else {
      let nuevoObjeto = { year: 0, valor: 0 };  //inicializando un objeto
      nuevoObjeto.year = k;
      nuevoObjeto.valor = mirarYear;
      otroObjeto.push(nuevoObjeto);
    }
  }
  console.log(otroObjeto.length);
 
  return otroObjeto; //retorno el arreglo de objetos para luego tomarlo desde el archivo main.js y hacer la visualización de datos con el DOM
}
window.dataForYear = dataForYear;



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




// FUNCION QUE CALCULA EL PROMEDIO DE LOS DATOS

const computeStats = (retornoDatosYear) => {

const numbers = retornoDatosYear;
let arr = [];
numbers.forEach((currentValue) => {
  return arr.push(currentValue.valor)
})



  const newNumbers = arr.reduce((elementoAnterior, elementoActual) => {
  return (elementoAnterior + elementoActual);
});


    return newNumbers/arr.length;
  }

  window.computeStats = computeStats;
