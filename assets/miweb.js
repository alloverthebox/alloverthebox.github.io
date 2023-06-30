//esperamos a que se cargue todo el documento antes de ejecutar el código js
window.onload=inicio;

function inicio(){

    //mapa creado con leaflet 
   let map= L.map('map').setView([43.375602, -8.403448],12.3 );
   L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
     }).addTo(map);

    //añadimos un marcador al mapa 
   let marker = L.marker([43.375376, -8.403266]).addTo(map);
    //le asociamos un popup
   marker.bindPopup("<p>Vivir na Coruña<br>que bonito é</p>");

    //EJEMPLOS DE MANEJO DEL DOM Y EVENTOS
    
    //redireccionamos al index al hacer click en el nombre de la página
   let nombre=document.querySelector(".container-fluid h1");
       nombre.addEventListener("click", function(){
         window.location="index.html";
      })
    //simulamos un elemento de navegación cambiando el cursor
   nombre.addEventListener("mouseover", function(){
        nombre.style.cursor= "pointer";
      })

    //cambiamos color de fondo del texto de las tarjetas al entrar y salir con el ratón en un bucle for of
   let tarjeta=document.querySelectorAll(".card-body");
     for( let fondo of tarjeta){
       fondo.addEventListener("mouseover",function(){
         fondo.style.background="#DAFFFB";
     });
       fondo.addEventListener("mouseout",function(){
         fondo.style.background="#FFFFFF";
     })
    }
 
}
  /* se podría haber hecho uso de funciones externas en los parámetros , pero por la sencillez de la página se han 
   utilizado funciones anónimas*/