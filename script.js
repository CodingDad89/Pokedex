let limit = 20;
let limit2 = 40;
let offset = 0;
let pokeUrl = `https://pokeapi.co/api/v2/pokemon`;
let pokemonDb = "";
let pokemonDbTypes = [];
let pokemonIdDb = [];
let pokemonNameDb = [];
let pokemonHeightDb = [];
let pokemonWeightDb = [];

async function init() {
    await fetchDataPokemon();
    renderPokecards();
    await fetchDataPokemonTypes();
    renderPokecardsTypes(i);
}

async function onclickButtonLoadNew() {
    await fetchDataSecondPokemon();
    renderPokecards();
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
    }
}

async function fetchDataPokemonTypes() {
    for (let i = 0; i <  pokemonNameDb.length; i++){

       for (let j = 0; j < pokemonDbTypes[i].length; j++) {
        let containerTypes = document.getElementById(`container_types${i}`);
        containerTypes.innerHTML += 
        `<div id="first_type">
            ${pokemonDbTypes[i][j].type.name}<br>
        </div>
       
        `
    }
}
}

async function fetchDataSecondPokemon() {
    for (let i = 20; i <= 40; i++){
        let response = await fetch(`${pokeUrl}/${i+1}`);
        pokemonDb = await response.json();
        pokemonNameDb.push(pokemonDb.species.name);
        pokemonHeightDb.push(pokemonDb.height);
        pokemonIdDb.push(pokemonDb.id);
        pokemonWeightDb.push(pokemonDb.weight)
    }
}

function renderPokecards(i) {
    for (let i = 0; i < limit; i++) {

        let mainContent = document.getElementById('content');
        mainContent.innerHTML += 
       `<div class="pokecard" onclick="toggleOverlay(${i})" >
        <div class="pokeball" id="pokemon_id${i+1}">
            <p>#${pokemonIdDb[i]}</p>
             ${pokemonNameDb[i].charAt(0).toUpperCase()}${pokemonNameDb[i].slice(1)}
        </div>
        <div class="container_img_type">
            <div id="container_types${i}">
            </div>
             <div id="container_img">
            </div>
        </div>
    </div>`
    }
}

function renderPokecardsTypes(i) {
    for (let i = 0; i < pokemonDbTypes.length; i++) {

        let mainContent = document.getElementById('container_types');
        mainContent.innerHTML += 
       `<div id="types${i}">
            ${pokemonDbTypes.types.name}
            </div>
        </div>
    </div>`
    }
}

function toggleOverlay(i){

    let overlayRef = document.getElementById(`overlay`);
    overlayRef.classList.toggle(`d_none`);
    onclickPokemonDialog(i);
}

function dialogStopClosing(event) {
    event.stopPropagation()
}

function onclickPokemonDialog(i) {
        document.getElementById(`overlay`). innerHTML = `

                <div id="dialogBox" onclick="dialogStopClosing(event)">
                    <div class="pokecard" onclick="toggleOverlay(${i})" >
                    <div class="pokeball" id="pokemon_id${i+1}">
                        <p>#${pokemonIdDb[i]}</p>
                        ${pokemonNameDb[i].charAt(0).toUpperCase()}${pokemonNameDb[i].slice(1)}
                    </div>
                    <div class="container_img_type">
                    <div id="container_types">
                    </div>
             <div id="container_img">
            </div>
        </div>
    </div>
                </div> `
}

function buttonLeft(i) {
    if (i>=1) {
    onclickPicDialog(i-1); 
    }
    else {
        onclickPicDialog(i)
    }
}

function buttonRight(i) {
    if (i <= picArray.length-2) {
        onclickPicDialog(i+1); 
        }
        else {
            onclickPicDialog(i)
        }
}