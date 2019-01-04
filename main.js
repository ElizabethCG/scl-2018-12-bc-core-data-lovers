 window.onload = () => {

    document.getElementById('paises').style.display='none';
  /* esto debería estar dentro de la función que mostrará los paises */
  const goPaises = document.getElementById('clickPaises');

  goPaises.addEventListener('click', () => {
  document.getElementById('index').style.display ='none';
  document.getElementById('paises').style.display ='block';
  });



// AQUÍ EMPIEZA CODIGO ELIZABETH

document.getElementById("clickPaises").addEventListener("click",
  (evento)=> {
    evento.preventDefault();


let datas = window.WORLDBANK;

let paises=[[datas.PER,datas.MEX,datas.BRA,datas.CHL],
            ["Perú","México","Brasil","Chile"]];


document.getElementById('paisesEc').innerHTML = ''; // limpio el div cada vez que se hace click



// Para mostrar la lista de países en el menú de selección
for (let i=0; i<4;i++){
let mostrarPaises=(paises[1][i]);
document.getElementById ("paisesEc").innerHTML += "<option value="+ i+"  id=paisesEc"+i+">" + mostrarPaises + "</option>";
}


document.getElementById("paisesEc").addEventListener("click",
  (evento)=> {
    evento.preventDefault();

let paisElegido = document.getElementById ("paisesEc").value;



document.getElementById("btnLlamarIndicadores").addEventListener("click",
  (evento)=> {
    evento.preventDefault();

    document.getElementById('indicadores').innerHTML = '';


// AQUÍ VA LA LLAMADA A LA FUNCIÓN

    let paisBuscar=(paises[0][paisElegido]);
    let retornoArray=window.nombreIndicadores(paisBuscar); //llamada a la función nombreIndicadores y retorno de array con el total de indicadores pra un país seleccionado

    for (let i=0; i<139;i++){
      document.getElementById ("indicadores").innerHTML += "<option value="+ i+"  id=indicadores"+i+">" + retornoArray[i] +"<br>" + "</option>";
    }



document.getElementById("indicadores").addEventListener("click",
      (evento)=> {
        evento.preventDefault();

    let indicadorElegido = document.getElementById ("indicadores").value;
    let paisElegido = document.getElementById ("paisesEc").value;
    let paisBuscar=(paises[0][paisElegido]);
    let nombreIndicador = paisBuscar.indicators[indicadorElegido];
    let almacenarObjetoData = nombreIndicador.data;
    let retornoDatosYear=window.datosPorYear(paisBuscar,nombreIndicador,almacenarObjetoData); //llamada a la función nombreIndicadores y retorno de array con el total de indicadores pra un país seleccionado


    document.getElementById('root').innerHTML = '';
    for (let i=0; i<retornoDatosYear.length;i++){
      retornoDatosYear[i]
      document.getElementById ("root").innerHTML += "<p>" + retornoDatosYear[i].year +" "+ retornoDatosYear[i].valor +"<br>" + "</p>";
}


document.getElementById("btnOrdenar").addEventListener("click",
      (evento)=> {
        evento.preventDefault();

        
        let retornoDatosYearOrdenado=window.ordenarDatosPorYear(retornoDatosYear);


document.getElementById('root').innerHTML = '';
for (let i=0; i<retornoDatosYearOrdenado.length;i++){
  retornoDatosYearOrdenado[i]
  document.getElementById ("root").innerHTML += "<p>" + retornoDatosYear[i].year +" "+ retornoDatosYear[i].valor +"<br>" + "</p>";
}


})


})
})
})

})
}
