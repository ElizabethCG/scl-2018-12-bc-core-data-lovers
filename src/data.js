//Función donde recorreré el arreglo de objetos para acceder a su propiedad name
//Función para filtrar
const country = () => {
  let arrayCountryA = [];
  let arrayCountryB = [];
  let listadoCountry = [];
  let route = window.WORLDBANK;
  for (let property in route) {
    let routeInitial = route[property].indicators[0]; //así se debe indicar la llamada para que no de error
    let routeThird = routeInitial.countryName;
    arrayCountryB.push(routeThird);
    arrayCountryA.push(route[property]);
  }
  listadoCountry.push(arrayCountryA, arrayCountryB);
  return listadoCountry;
}
window.country = country;


//Función que trae todos los indicadores y genera un array con ellos
const indicatorsNames = (searchCountry) => { //searchCountry (condición)
  let names = []; //arreglo vacío donde pushearé los nombres de indicadores
  for (let i = 0; i < searchCountry.indicators.length; i++) {
    let nameIndicator = searchCountry.indicators[i];
    names.push(nameIndicator.indicatorName);
  }
  return names; //retorno el arreglo de nombres para luego tomarlo desde el archivo main.js y hacer la visualización de datos con el DOM
}
window.indicatorsNames = indicatorsNames;



//Función que filtra por país y nombre del indicador
const dataForYear = (almacenarObjetoData) => {

  let otherObject = [];
  for (let k = 1960; k <= 2017; k++) { //aquí está buscando el atributo dentro de data (que está dentro de otra data)
    let lookYear = (almacenarObjetoData[k]);
    if (lookYear === "") {
      continue; //si pasa eso que no haga nada
    } else {
      let newObject = {
        year: 0,
        valor: 0
      }; //inicializando un objeto
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
    // if (a.year < b.year) {
    //   return 1;
    // }
    // a must be equal to b
    // return 0;
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




//Función para tomar los datos en formato array para graficar
const dataGraphics = (almacenarObjetoData) => {
  const originData = almacenarObjetoData;
  console.log(originData);
  let otherObject = [];

         for (let property in originData) {
           console.log(originData[property]);
         if (originData[property] === "") {
           continue; //si pasa eso que no haga nada
         } else {
             let arr = [];
             arr.push(property);
             arr.push(originData[property]);
              // originData.forEach((currentValue) => {
              // return arr.push(currentValue)
              // return arr.push(currentValue.valor)
               console.log(arr);
               otherObject.push(arr);
      }

  }
  return otherObject; //retorno el arreglo de objetos para luego tomarlo desde el archivo main.js y hacer la visualización de datos con el DOM
}

window.dataGraphics = dataGraphics;


window.google;
window.google.charts.load('current',{packages:['corechart']});
window.google.charts.setOnLoadCallback(dibujar());



function dibujar(){

var data = new google.visualization.DataTable();
// var data=google.visualization.arrayToDataTable([

data.addColumn('string','Ciudad');
 data.addColumn('number','%');


data.addRows(
window.retornoDatosEnArray

 // [['Cd Mexico',700],['Bogota',651],['Lima',581],['Caracas',552],['Montevideo',357]]
// ]
);


var opciones={chart:{'title':'Nombre del indicador','subtitle':'Valores en %'},'width':500,'height':500};


var grafica=new window.google.visualization.LineChart(document.getElementById('charts'));
grafica.draw(data,opciones);

}
