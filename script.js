let limit = 20;
let pokeUrl = `https://pokeapi.co/api/v2/pokemon`;
let pokemonDb = "";
let pokemonDbTypes = [];
let pokemonIdDb = [];
let pokemonNameDb = [];
let pokemonHeightDb = [];
let pokemonWeightDb = [];
let pokemonPicDb = [];

async function init() {
    await fetchDataPokemon(limit);
    renderPokecards();
    await renderPokemonTypes();
}

async function onclickLoadMore(){
    await fetchDataSecondPokemon();
    renderPokecardsLoadMore();
    renderSecondPokemonTypes();
}

async function fetchDataPokemon() {
    for (let i = 0; i <= limit; i++){
        let response = await fetch(`${pokeUrl}/${i+1}`);
        pokemonDb = await response.json();
        pokemonNameDb.push(pokemonDb.species.name);
        pokemonHeightDb.push(pokemonDb.height);
        pokemonIdDb.push(pokemonDb.id);
        pokemonWeightDb.push(pokemonDb.weight);
        pokemonDbTypes.push(pokemonDb.types)
        pokemonPicDb.push(pokemonDb.sprites.front_default)
    }
}

function renderPokecards(i) {
    for (let i = 0; i <= limit; i++) {

        let mainContent = document.getElementById('content');
        mainContent.innerHTML += 
       `<div class="pokecard ${pokemonDb.types.name}" onclick="toggleOverlay(${i})" >
        <div class="pokeball" id="pokemon_id${i+1}">
            <p>#${pokemonIdDb[i]}</p>
             ${pokemonNameDb[i].charAt(0).toUpperCase()}${pokemonNameDb[i].slice(1)}
        </div>
        <div class="container_img_type">
            <div id="container_types${i}">
            </div>
             <div id="container_img">
             <img src="${pokemonPicDb[i]}">
            </div>
        </div>
    </div>`
    }
}

async function renderPokemonTypes() {
    for (let i = 0; i <  pokemonNameDb.length; i++){

       for (let j = 0; j < pokemonDbTypes[i].length; j++) {
        let containerTypes = document.getElementById(`container_types${i}`);
        containerTypes.innerHTML += 
        `<div id="type" class="${pokemonDbTypes[i][j].type.name}">
            ${pokemonDbTypes[i][j].type.name}<br>
        </div>
        `
    }
}
}

async function fetchDataSecondPokemon() {

    for (let i = 20+1; i <= 40+1; i++){
        let response = await fetch(`${pokeUrl}/${i+1}`);
        pokemonDb = await response.json();
        pokemonNameDb.push(pokemonDb.species.name);
        pokemonHeightDb.push(pokemonDb.height);
        pokemonIdDb.push(pokemonDb.id);
        pokemonWeightDb.push(pokemonDb.weight);
        pokemonDbTypes.push(pokemonDb.types)
        pokemonPicDb.push(pokemonDb.sprites.front_default)
    }
}

function renderPokecardsLoadMore(i) {
    for (let i = 20+1; i <= 40+1; i++) {

        let mainContent = document.getElementById('content');
        mainContent.innerHTML += 
       `<div class="pokecard ${pokemonDb.types.name}" onclick="toggleOverlay(${i})" >
        <div class="pokeball" id="pokemon_id${i+1}">
            <p>#${pokemonIdDb[i]}</p>
             ${pokemonNameDb[i].charAt(0).toUpperCase()}${pokemonNameDb[i].slice(1)}
        </div>
        <div class="container_img_type">
            <div id="container_types${i}">
            </div>
             <div id="container_img">
             <img src="${pokemonPicDb[i]}">
            </div>
        </div>
    </div>`
    }
}

async function renderSecondPokemonTypes() {
    for (let i = 20+1; i < 40+2; i++){

       for (let j = 0; j < pokemonDbTypes[i].length; j++) {
        let containerTypes = document.getElementById(`container_types${i}`);
        containerTypes.innerHTML += 
        `<div id="type" >
            ${pokemonDbTypes[i][j].type.name}<br>
        </div>
        `
    }
}
}

function toggleOverlay(i){

    let overlayRef = document.getElementById(`overlay`);
    overlayRef.classList.toggle(`d_none`);
    onclickPokemonDialog(i);
}

function closeOverlay(){

    let overlayRef = document.getElementById(`overlay`);
    overlayRef.classList.toggle(`d_none`);
  
}

function dialogStopClosing(event) {
    event.stopPropagation()
}

function onclickPokemonDialog(i) {
        document.getElementById(`overlay`). innerHTML =        
        `<div class="pokecardOnClick" onclick="toggleOverlay(${i})" >
        <div class="pokeball" id="pokemon_id${i+1}">
             ${pokemonNameDb[i].charAt(0).toUpperCase()}${pokemonNameDb[i].slice(1)}
        </div>
        <div class="container_img_type">
             <div id="container_img">
             <img src="${pokemonPicDb[i]}">
            </div>
        </div>
        <div class="pokemon_stats">
            Weight = ${pokemonWeightDb[i]} kg <br>
            Height = ${pokemonHeightDb[i]} m

        </div>
        <div id="buttonsPfeile">
            <button id="buttonLeft" onclick="buttonLeft(${i})"></button>
            <button id="buttonRight" onclick="buttonRight(${i})"></button>
        </div>
    </div>`
}

function buttonLeft(i) {
    if (i>=1) {
        onclickPokemonDialog(i-1) ; 
    }
    else {
        onclickPicDialog(i)
    }
}

function buttonRight(i) {
    if (i <= pokemonNameDb.length) {
        onclickPokemonDialog(i+1) ; 
        }
        else {
            onclickPicDialog(i)
        }
}