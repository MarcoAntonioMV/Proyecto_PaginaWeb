const lanzamientosr = document.getElementById("lanzamientos-recientes");
const url="https://raw.githubusercontent.com/MarcoAntonioMV/BD_PROYECTO_WEB/master/BD_XIAOMI_SPECS.json";
const uri="https://raw.githubusercontent.com/MarcoAntonioMV/BD_PROYECTO_WEB/master/";


fetch(url).then(function(respuesta){
    return respuesta.json();


}).then(function(datos){
    console.log(datos);
    console.log(datos.length);
    for(let i=0; i < datos.length; i++){
        lanzamientosr.innerHTML+= "<a href='"+datos[i]["pagina"]+"'> <div> <img src='" + uri + datos[i]["imagen"]+"'> <h3>"+datos [i]["nombre"]+" </h3> </div> </a>";
        lanzamientosr.classList.add("lanzamientos")
    }
    console.log(lanzamientosr);
    

}).catch(function(error){
    console.log(error);
})