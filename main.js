window.onload = () => {
  
    document.getElementById('paises').style.display='none';

  
  /* esto debería estar dentro de la función que mostrará los paises */
  const goPaises = document.getElementById('clickPaises');
  goPaises.addEventListener('click', () => {
  document.getElementById('index').style.display ='none';
  document.getElementById('paises').style.display ='block';  
  });

/* document.getElementById("btnLlamarDatos").addEventListener("click",
  (evento)=> {
    evento.preventDefault();


    document.getElementById ("root").innerHTML ="<p2> El retorno es: "    + (window.example()) +     "</p2>";


      }) */



}