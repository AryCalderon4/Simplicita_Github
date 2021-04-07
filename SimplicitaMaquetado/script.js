
const simplicitaUrl = "https://simplicita.tk:8000/buscar/medicina";

const peticion = new XMLHttpRequest();
peticion.open("GET", simplicitaUrl);
peticion.send();

peticion.addEventListener("load", function () {
    // Se supone que este event listener se ejecuta cuando ya obtuvo los datos
    console.log(JSON.parse(this.responseText));
});


// Instalar live-server usando la consola y npm:
// npm install -g live-server
// Probar que funcione abriendo la consola de vscode en la ruta de tus archivos y ejecutar:
// live-server --port=3000 --host=localhost
// Además, live-server actualizará/recargará automáticamente tu página cada que hagas 
// un cambio

