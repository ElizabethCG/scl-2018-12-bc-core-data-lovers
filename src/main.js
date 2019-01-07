// window.onload = screens
//
// function screens() {

  document.getElementById('seccionPaises').style.display = 'none';
  document.getElementById('seccionIndicadores').style.display = 'none';
  document.getElementById('seccionEstadisticas').style.display = 'none';
// };

const goPaises = document.getElementById('clickPaises');
goPaises.addEventListener('click', () => {
  document.getElementById('seccionIndex').style.display = 'none';
  document.getElementById('seccionPaises').style.display = 'block';
});



// AQUÍ EMPIEZA CODIGO ELIZABETH

document.getElementById("clickPaises").addEventListener("click",
  (evento) => {
    evento.preventDefault();


    let datas = window.WORLDBANK;

    let paises = [[datas.PER, datas.MEX, datas.BRA, datas.CHL],
    ["Perú", "México", "Brasil", "Chile"]];


    document.getElementById('paisesEc').innerHTML = ''; // limpio el div cada vez que se hace click



    // Para mostrar la lista de países en el menú de selección
    for (let i = 0; i < 4; i++) { //se pone 4. Aún no colocamos el largo del objeto, no se puede con length
      let mostrarPaises = (paises[1][i]);
      document.getElementById("paisesEc").innerHTML += "<option value=" + i + "  id=paisesEc" + i + ">" + mostrarPaises + "</option>";
    }

      //Función para elegir países
      document.getElementById("paisesEc").addEventListener("click",
        (evento) => {
          evento.preventDefault();

        let paisElegido = document.getElementById("paisesEc").value;


          //Función para seleccionar
          document.getElementById("btnLlamarIndicadores").addEventListener("click",
            (evento) => {
              evento.preventDefault();


              document.getElementById('seccionIndex').style.display = 'none';
              document.getElementById('seccionPaises').style.display = 'none';
              document.getElementById('seccionIndicadores').style.display = 'block';
              document.getElementById('seccionEstadisticas').style.display = 'none';
              document.getElementById("indicadores").style.display ="block";

              document.getElementById('indicadores').innerHTML = '';
              // AQUÍ VA LA LLAMADA A LA FUNCIÓN
              let paisBuscar = paises[0][paisElegido];
              let retornoArray = window.nombreIndicadores(paisBuscar); //llamada a la función nombreIndicadores y retorno de array con el total de indicadores pra un país seleccionado
              for (let i = 0; i < retornoArray.length; i++) {
                document.getElementById("indicadores").innerHTML += "<option value=" + i + "  id=indicadores" + i + ">" + retornoArray[i] + "<br>" + "</option>";
              }

            document.getElementById("indicadores").addEventListener("click",
              (evento) => {
                evento.preventDefault();

                let indicadorElegido = document.getElementById("indicadores").value;
                let paisElegido = document.getElementById("paisesEc").value;
                let paisBuscar = (paises[0][paisElegido]);
                let nombreIndicador = paisBuscar.indicators[indicadorElegido];
                let almacenarObjetoData = nombreIndicador.data;
                let retornoDatosYear = window.dataForYear(paisBuscar, nombreIndicador, almacenarObjetoData); //llamada a la función nombreIndicadores y retorno de array con el total de indicadores pra un país seleccionado

                  console.log(retornoDatosYear);
                  document.getElementById('root').innerHTML = '';
                  for (let i = 0; i < retornoDatosYear.length; i++) {
                    retornoDatosYear[i]
                    document.getElementById("root").innerHTML += "<p>" + retornoDatosYear[i].year + " " + retornoDatosYear[i].valor + "<br>" + "</p>";
                  }



                document.getElementById("btnOrdenar").addEventListener("click",
                  (evento) => {
                    evento.preventDefault();


        let retornoDatosYearOrdenado=window.ordenarDatosPorYear(retornoDatosYear);

                    let retornoDatosYearOrdenado = window.ordenarDatosPorYear(retornoDatosYear);


                    document.getElementById('root').innerHTML = '';
                    for (let i = 0; i < retornoDatosYearOrdenado.length; i++) {
                      retornoDatosYearOrdenado[i]
                      document.getElementById("root").innerHTML += "<p>" + retornoDatosYear[i].year + " " + retornoDatosYear[i].valor + "<br>" + "</p>";
                    }



                  })



document.getElementById("btnCalcularPromedio").addEventListener("click",
      (evento)=> {
        evento.preventDefault();

console.log(retornoDatosYear.length);

  let realizarCalculo=window.computeStats(retornoDatosYear);



document.getElementById('root2').innerHTML = '';

document.getElementById ("root2").innerHTML += "<p>" + "El promedio es: "+ realizarCalculo +"<br>" + "</p>";


})






                })
            })
        })
  })
