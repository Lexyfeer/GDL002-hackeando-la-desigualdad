'use strict'

window.addEventListener("load", ()=>{
//     console.log("mi js funciona despues de que termino de cargar mi html completo")
window.datosmujeres = {
    datawoman: datawoman
  
  };
  
  
  function datawoman(MUJERES){
    let name=[];
    for(let i=0;i<MUJERES.length; i++){
      let pruebadata={
        "nombre": MUJERES[i].Nombre,
        
      };
      
      name.push(pruebadata); 
      console.log(name);
    }
    return name;
  }
  
  //esta funcion aun no sirve, estoy tratando de acceder a la info de la base de datos.

  
});


