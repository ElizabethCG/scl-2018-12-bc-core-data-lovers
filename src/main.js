 window.onload = () => {

    document.getElementById('paises').style.display='none';
  /* esto debería estar dentro de la función que mostrará los paises */
  const goPaises = document.getElementById('clickPaises');

  goPaises.addEventListener('click', () => {
  document.getElementById('index').style.display ='none';
  document.getElementById('paises').style.display ='block';
  });



document.getElementById("clickPaises").addEventListener("click",
  (evento)=> {
    evento.preventDefault();

let datas = window.WORLDBANK;

let paises=[[datas.PER,datas.MEX,datas.BRA,datas.CHL],
            ["Perú","México","Brasil","Chile"]];


document.getElementById('paisesEc').innerHTML = ''; // limpio el div cada vez que se hace click??? PARA QUE SE LIMPIABA? QUÉ PASA SI NO SE LIMPIA?


// Para mostrar la lista de países en el menú de selección
for (let i=0; i<4;i++){
let mostrarPaises=(paises[1][i]);
document.getElementById ("paisesEc").innerHTML += "<option value="+ i+"  id=paisesEc"+i+">" + mostrarPaises + "</option>";
}


document.getElementById("paisesEc").addEventListener("click",
  (evento)=> {
    evento.preventDefault();

let paisElegido = document.getElementById ("paisesEc").value;
// console.log(paisElegido);


document.getElementById("btnLlamarIndicadores").addEventListener("click",
  (evento)=> {
    evento.preventDefault();

    document.getElementById('indicadores').innerHTML = '';

    for (let i=0; i<139;i++){
    // let mostrarPaises=(paises[1][i]);
    let paisBuscar=(paises[0][paisElegido]);
    // console.log(paisBuscar);

    let nombreIndicador = paisBuscar.indicators[i];
    //  console.log(nombreIndicador);
    // console.log(nombreIndicador.indicatorName);

document.getElementById ("indicadores").innerHTML += "<option value="+ i+"  id=indicadores"+i+">" + nombreIndicador.indicatorName +"<br>" + "</option>";
    // document.getElementById ("root").innerHTML +=  nombreIndicador.indicatorName +"<br>";
    }

document.getElementById("indicadores").addEventListener("click",
      (evento)=> {
        evento.preventDefault();

    let indicadorElegido = document.getElementById ("indicadores").value;
    // console.log(indicadorElegido);

let paisElegido = document.getElementById ("paisesEc").value;
  let paisBuscar=(paises[0][paisElegido]);

let nombreIndicador = paisBuscar.indicators[indicadorElegido];
let almacenarObjetoData = nombreIndicador.data;
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
    //
    // console.log(otroObjeto[l]);
    //
    //
    // console.log(k,mirarYear);}
    m=m+1;

    }

    otroObjeto.sort(function (a, b) {
      if (a.year > b.year) {
        return -1;
      }
      if (a.year < b.year) {
        return 1;
      }
      // a must be equal to b
      return 0;


    });


    }
    // console.log(otroObjeto);
    document.getElementById('root').innerHTML = '';
    for (let i=0; i<otroObjeto.length;i++){
      otroObjeto[i]
      document.getElementById ("root").innerHTML += "<p>" + otroObjeto[i].year +" "+ otroObjeto[i].valor +"<br>" + "</p>";
}
})
})
})

})
}
