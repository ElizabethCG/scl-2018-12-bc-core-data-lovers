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




let countryList = window.country();
document.getElementById("clickCountry").addEventListener("click",  //transformar a una función para poder reutilizarlo desde distintos botones
  (event) => {
    event.preventDefault();
    document.getElementById('selectCountries').innerHTML = ''; // limpio el div cada vez que se hace click

    let m=0;
    countryList[1].forEach((element) => {
      // let showCountries = (countryList[1][m]);
      document.getElementById("selectCountries").innerHTML += "<option value=" + m + "  id=selectCountries" + m + ">" + element + "</option>";
      m++;
    })



    // Para mostrar la lista de países en el menú de selección
    // for (let i = 0; i < countryList[1].length; i++) { //se pone 4. Aún no colocamos el largo del objeto, no se puede con length
    //   let showCountries = (countryList[1][i]);
    //   document.getElementById("selectCountries").innerHTML += "<option value=" + i + "  id=selectCountries" + i + ">" + showCountries + "</option>";
    // }


    //Función para elegir países
    document.getElementById("selectCountries").addEventListener("click",
      (event) => {
        event.preventDefault();

        let selectedCountry = document.getElementById("selectCountries").value;


        //Función para seleccionar
        document.getElementById("btnCallIndicators").addEventListener("click",
          (event) => {
            event.preventDefault();


            document.getElementById('indexMain').style.display = 'none';
            document.getElementById('countryMain').style.display = 'none';
            document.getElementById('indicatorMain').style.display = 'block';
            document.getElementById('statisticsMain').style.display = 'none';
            document.getElementById('indicators').style.display = "block";
            document.getElementById('indicators').innerHTML = '';

            // AQUÍ VA LA LLAMADA A LA FUNCIÓN
            let searchCountry = countryList[0][selectedCountry];
            let returnArray = window.indicatorsNames(searchCountry); //llamada a la función indicatorsNames y retorno de array con el total de indicadores pra un país seleccionado
            for (let i = 0; i < returnArray.length; i++) {
              document.getElementById("indicators").innerHTML += "<option value=" + i + "  id=indicators" + i + ">" + returnArray[i] + "<br>" + "</option>";
            }

            document.getElementById("indicators").addEventListener("click",
              (event) => {
                event.preventDefault();

                document.getElementById('root2').innerHTML = '';//limpia de comentarios el lugar donde se imprimirá el promedio

                let indicadorElegido = document.getElementById("indicators").value;
                let selectedCountry = document.getElementById("selectCountries").value;
                // console.log(countryList[0][selectedCountry]);
                let searchCountry = (countryList[0][selectedCountry]);
                let nameIndicator = searchCountry.indicators[indicadorElegido];
                let almacenarObjetoData = nameIndicator.data;
                let retornoDatosYear = window.dataForYear(searchCountry, nameIndicator, almacenarObjetoData); //llamada a la función indicatorsNames y retorno de array con el total de indicadores pra un país seleccionado

                document.getElementById('root').innerHTML = '';
                let table = '';
                for (let i = 0; i < retornoDatosYear.length; i++) {
                  table += `<tr><td class="pl-3">${retornoDatosYear[i].year}</td><td class="pl-3">${retornoDatosYear[i].valor}</td></tr>`;

                  document.getElementById('root').innerHTML = table;


                }

                document.getElementById("btnOrdenar").addEventListener("click",
                  (event) => {
                    event.preventDefault();
                    let retornoDatosYearOrdenado = window.orderDataForYear(retornoDatosYear);
                    document.getElementById('root').innerHTML = '';
                    let table = '';
                    for (let i = 0; i < retornoDatosYearOrdenado.length; i++) {
                      table += `<tr><td class="pl-3">${retornoDatosYearOrdenado[i].year}</td><td class="pl-3">${retornoDatosYearOrdenado[i].valor}</td></tr>`;
                    document.getElementById('root').innerHTML = table;
                    }
                  })

                  document.getElementById("btnOrdenar2").addEventListener("click",
                    (event) => {
                      event.preventDefault();
                      let retornoDatosYear = window.dataForYear(searchCountry, nameIndicator, almacenarObjetoData);
                      document.getElementById('root').innerHTML = '';
                      let table = '';

                      for (let i = 0; i < retornoDatosYear.length; i++) {
                        table += `<tr><td class="pl-3">${retornoDatosYear[i].year}</td><td class="pl-3">${retornoDatosYear[i].valor}</td></tr>`;
                        document.getElementById('root').innerHTML = table;

                      }
                    })

                document.getElementById("btnCalcularPromedio").addEventListener("click",
                  (event) => {
                    event.preventDefault();
                    // console.log(retornoDatosYear.length);
                    if(retornoDatosYear.length>0){
                    let realizarCalculo = window.computeStats(retornoDatosYear);
                    document.getElementById('root2').innerHTML = '';
                    document.getElementById("root2").innerHTML += "<p>" + "El promedio es: " + realizarCalculo + "<br>" + "</p>";
                  }else{
                    document.getElementById("root2").innerHTML = "<p>" + "No hay información disponible"+ "</p>";}
                  })
              })
          })
      })
  })
