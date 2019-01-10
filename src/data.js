
//Función donde recorreré el arreglo de objetos para acceder a su propiedad name
//Función para filtrar

const country = () => {
  let arrayCountryB = [];
  let arrayCountryA = []
  let listadoCountry = [];

  let route = window.WORLDBANK;
  for (let property in route) {

    let routeInitial = route[property].indicators[0]; //así se debe indicar la llamada para que no de error
    // let routeSecond =routeInitial.countryCode;
    let routeThird = routeInitial.countryName;

    arrayCountryB.push(routeThird);
    arrayCountryA.push(route[property]);
  }
  listadoCountry.push(arrayCountryA, arrayCountryB);
  return listadoCountry;
}
window.country = country;








const indicatorsNames = (searchCountry) => {   //searchCountry (condición)//
  let names = []; // arreglo vacío donde pushearé los nombres de indicadores.
  for (let i = 0; i < searchCountry.indicators.length; i++) { //searchCountry
    let nameIndicator = searchCountry.indicators[i];
    names.push(nameIndicator.indicatorName);
  }
  return names; //retorno el arreglo de nombres para luego tomarlo desde el archivo main.js y hacer la visualización de datos con el DOM
}
window.indicatorsNames = indicatorsNames;


//Filtrar por país y nombre del indicador
const dataForYear = (searchCountry, nameIndicator, almacenarObjetoData) => {
  let otherObject = [];
  for (let k = 1960; k <= 2017; k++) { //aquí está buscando el atributo dentro de data (que está dentro de otra data)
    let lookYear = (almacenarObjetoData[k]);
    if (lookYear === "") {
      continue; //si pasa eso que no haga nada
    } else {
      let newObject = { year: 0, valor: 0 };  //inicializando un objeto
      newObject.year = k;
      newObject.valor = lookYear;
      otherObject.push(newObject);
    }
  }

  return otherObject; //retorno el arreglo de objetos para luego tomarlo desde el archivo main.js y hacer la visualización de datos con el DOM
}
window.dataForYear = dataForYear;



// FUNCION QUE ORDENA
const orderDataForYear = (retornoDatosYear) => {

  let orderedArray = retornoDatosYear;


  orderedArray.sort(function (a, b) {
    if (a.year > b.year) {
      return -1;
    }
    if (a.year < b.year) {
      return 1;
    }
    // a must be equal to b
    return 0;

  });

  return orderedArray; //retorno el arreglo de objetos para luego tomarlo desde el archivo main.js y hacer la visualización de datos con el DOM
}
window.orderDataForYear = orderDataForYear;




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
  return newNumbers / arr.length;
}
window.computeStats = computeStats;
