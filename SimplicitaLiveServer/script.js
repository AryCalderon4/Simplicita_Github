'use strict';

const cardsContainer = document.querySelector('.cards');

///////////////////
// const simplicitaUrl = "https://simplicita.tk:8000/buscar/medicina";

const peticion = new XMLHttpRequest();
peticion.open('GET', 'https://simplicita.tk:8000/buscar/medicina"');
peticion.send();

//Este eventListener se ejecuta cuando ya obtuvo los datos del Api 
peticion.addEventListener("load", function () {
    const [data] = JSON.parse(this.responseText)
    console.log(data);

    const html = `
    
        <article class="card">
            
            <h2 class="card___siglas">${data.siglas}</h2>
            <div class="card___data">
                
                <p class="card___institucion">${data.institucion}</p>
                <strong class="card___id">ID: ${data.id_simplicita}</strong>
                <p class="card__descripcion">${data.desc_exp}</p>

            </div>
            <div class="buttons">
                <button class="card___btnVer">Ver</button>
                <button class="card___btnAnalisis">Análisis</button>
            </div>
        </article>
    `
    cardsContainer.insertAdjacentHTML('beforeend', html);
    cardsContainer.style.opacity = 1;
});