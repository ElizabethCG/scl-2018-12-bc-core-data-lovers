document.getElementById("btnLlamarDatos").addEventListener("click",
  (evento)=> {
    evento.preventDefault();


    document.getElementById ("root").innerHTML ="<p2> El retorno es: "    + (window.example()) +     "</p2>";


      })
