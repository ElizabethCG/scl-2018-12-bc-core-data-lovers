// window.onload = screens
//
// function screens() {

document.getElementById('countryMain').style.display = 'none';
document.getElementById('indicatorMain').style.display = 'none';
document.getElementById('statisticsMain').style.display = 'none';
// };

const goCountry = document.getElementById('clickCountry');
goCountry.addEventListener('click', () => {
  document.getElementById('indexMain').style.display = 'none';
  document.getElementById('countryMain').style.display = 'block';
});

// AQUÍ EMPIEZA CODIGO ELIZABETH


let verPaises = window.paises();





document.getElementById("clickCountry").addEventListener("click",
  (evento) => {
    evento.preventDefault();
    let datas = window.WORLDBANK;
    let paises = [[datas.PER, datas.MEX, datas.BRA, datas.CHL],
    ["Perú", "México", "Brasil", "Chile"]];
    document.getElementById('selectCountries').innerHTML = ''; // limpio el div cada vez que se hace click


    // Para mostrar la lista de países en el menú de selección
    for (let i = 0; i < 4; i++) { //se pone 4. Aún no colocamos el largo del objeto, no se puede con length
      let showCountries = (paises[1][i]);
      document.getElementById("selectCountries").innerHTML += "<option value=" + i + "  id=selectCountries" + i + ">" + showCountries + "</option>";
    }

    //Función para elegir países
    document.getElementById("selectCountries").addEventListener("click",
      (evento) => {
        evento.preventDefault();

        let selectedCountry = document.getElementById("selectCountries").value;


        //Función para seleccionar
        document.getElementById("btnCallIndicators").addEventListener("click",
          (evento) => {
            evento.preventDefault();


            document.getElementById('indexMain').style.display = 'none';
            document.getElementById('countryMain').style.display = 'none';
            document.getElementById('indicatorMain').style.display = 'block';
            document.getElementById('statisticsMain').style.display = 'none';
            document.getElementById('indicators').style.display = "block";
            document.getElementById('indicators').innerHTML = '';

            // AQUÍ VA LA LLAMADA A LA FUNCIÓN
            let searchCountry = paises[0][selectedCountry];
            let returnArray = window.indicatorsNames(searchCountry); //llamada a la función indicatorsNames y retorno de array con el total de indicadores pra un país seleccionado
            for (let i = 0; i < returnArray.length; i++) {
              document.getElementById("indicators").innerHTML += "<option value=" + i + "  id=indicators" + i + ">" + returnArray[i] + "<br>" + "</option>";
            }

            document.getElementById("indicators").addEventListener("click",
              (evento) => {
                evento.preventDefault();

                let indicadorElegido = document.getElementById("indicators").value;
                let selectedCountry = document.getElementById("selectCountries").value;
                let searchCountry = (paises[0][selectedCountry]);
                let nameIndicator = searchCountry.indicators[indicadorElegido];
                let almacenarObjetoData = nameIndicator.data;
                let retornoDatosYear = window.dataForYear(searchCountry, nameIndicator, almacenarObjetoData); //llamada a la función indicatorsNames y retorno de array con el total de indicadores pra un país seleccionado

                console.log(retornoDatosYear);
                document.getElementById('root').innerHTML = '';
                for (let i = 0; i < retornoDatosYear.length; i++) {
                  retornoDatosYear[i]
                  document.getElementById("root").innerHTML += "<p>" + retornoDatosYear[i].year + " " + retornoDatosYear[i].valor + "<br>" + "</p>";
                }



                document.getElementById("btnOrdenar").addEventListener("click",
                  (evento) => {
                    evento.preventDefault();
                    let retornoDatosYearOrdenado = window.orderDataForYear(retornoDatosYear);
                    document.getElementById('root').innerHTML = '';
                    for (let i = 0; i < retornoDatosYearOrdenado.length; i++) {
                      retornoDatosYearOrdenado[i]
                      document.getElementById("root").innerHTML += "<p>" + retornoDatosYear[i].year + " " + retornoDatosYear[i].valor + "<br>" + "</p>";
                    }



                  })



                document.getElementById("btnCalcularPromedio").addEventListener("click",
                  (evento) => {
                    evento.preventDefault();

                    console.log(retornoDatosYear.length);

                    let realizarCalculo = window.computeStats(retornoDatosYear);



                    document.getElementById('root2').innerHTML = '';

                    document.getElementById("root2").innerHTML += "<p>" + "El promedio es: " + realizarCalculo + "<br>" + "</p>";


                  })






              })
          })
      })
  })
