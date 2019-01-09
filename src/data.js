
//Función donde recorreré el arreglo de objetos para acceder a su propiedad name
//Función para filtrar

const paises = () => {
  let arrayPaises = [];
  let arrayPaisesb=[]
  let listadoPaises=[];

let direccion=window.WORLDBANK;
    for (let prop in direccion) {

let direccionInicial= direccion[prop].indicators[0]; //así se debe indicar la llamada para que no de error
let direccionSecundaria =direccionInicial.countryCode;
let direccionTerciaria =direccionInicial.countryName;

arrayPaises.push(direccionTerciaria);
arrayPaisesb.push(direccion[prop]);


    }

  listadoPaises.push(arrayPaisesb,arrayPaises);

  return listadoPaises;
}
window.paises = paises;








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
