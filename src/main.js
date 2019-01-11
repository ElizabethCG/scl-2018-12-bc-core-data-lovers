
window.onload = () => {


  document.getElementById('countryMain').style.display = 'none';
  document.getElementById('indicatorMain').style.display = 'none';
  document.getElementById('statisticsMain').style.display = 'none';

  const goCountry = document.getElementById('clickCountry');
  goCountry.addEventListener('click', () => {
    document.getElementById('indexMain').style.display = 'none';
    document.getElementById('countryMain').style.display = 'block';
  });

  /* Función que carga por pantalla la lista de paises */
  let countryList = window.country();
  document.getElementById("clickCountry").addEventListener("click", //transformar a una función para poder reutilizarlo desde distintos botones
    (event) => {
      event.preventDefault();
      document.getElementById('selectCountries').innerHTML = ''; // limpio el div cada vez que se hace click

      let m = 0;
      countryList[1].forEach((element) => {
        document.getElementById("selectCountries").innerHTML += "<option value=" + m + "  id=selectCountries" + m + ">" + element + "</option>";
        m++;
      })



      //Función para seleccionar un país
      document.getElementById("selectCountries").addEventListener("click",
        (event) => {
          event.preventDefault();

          let selectedCountry = document.getElementById('selectCountries').value;


          //Función para seleccionar un indicador
          document.getElementById("btnCallIndicators").addEventListener("click",
            (event) => {
              event.preventDefault();



              document.getElementById('indexMain').style.display = 'none';
              document.getElementById('countryMain').style.display = 'none';
              document.getElementById('indicatorMain').style.display = 'block';
              document.getElementById('statisticsMain').style.display = 'none';
              document.getElementById('indicators').style.display = 'block';
              document.getElementById('indicators').innerHTML = '';

              //Aquí va la llamada a la función indicatorsNames y retorno de array con el total de indicadores del un país seleccionado
              let searchCountry = countryList[0][selectedCountry];
              let returnArray = window.indicatorsNames(searchCountry);
              for (let i = 0; i < returnArray.length; i++) {
                document.getElementById('indicators').innerHTML += '<option value=' + i + '   id=indicators' + i + '>' + returnArray[i] + '<br>' + '</option>';
                document.getElementById('mostrarTabla').style.display = 'none';
              }

              document.getElementById("indicators").addEventListener("click",
                (event) => {
                  event.preventDefault();


                  document.getElementById('root2').innerHTML = '';


                  let indicadorElegido = document.getElementById("indicators").value;
                  let selectedCountry = document.getElementById("selectCountries").value;
                  let searchCountry = (countryList[0][selectedCountry]);
                  let nameIndicator = searchCountry.indicators[indicadorElegido];
                  let almacenarObjetoData = nameIndicator.data;

                  //llamada a la función indicatorsNames y retorno de array con el total de indicadores pra un país seleccionado
                  let retornoDatosYear = window.dataForYear(almacenarObjetoData);
                  document.getElementById('root').innerHTML = '';
                  document.getElementById('mostrarTabla').style.display = 'block';
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
                        table += `<tr><td class='pl-3'>${retornoDatosYearOrdenado[i].year}</td><td class='pl-3'>${retornoDatosYearOrdenado[i].valor}</td></tr>`;
                        document.getElementById('root').innerHTML = table;
                      }
                    })

                          document.getElementById("btnOrdenar2").addEventListener("click",
                          (event) => {
                          event.preventDefault();
                          let retornoDatosYear = window.dataForYear(almacenarObjetoData);
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
                      if (retornoDatosYear.length > 0) {
                        let realizarCalculo = window.computeStats(retornoDatosYear);
                        document.getElementById('root2').innerHTML = '';
                        document.getElementById("root2").innerHTML += "<p>" + "El promedio es: " + realizarCalculo + "<br>" + "</p>";
                      } else {
                        document.getElementById("root2").innerHTML = "<p>" + "No hay información disponible" + "</p>";
                      }
                    })
                })
            })
        })
    })
}
