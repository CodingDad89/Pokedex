let limit = 20;
let offset = 0;
let pokeUrl = "https://pokeapi.co/api/v2/pokemon";
let pokemonDb = "";
let pokemonStats = "";




async function fetchDataPokemon() {
    let response = await fetch(`${pokeUrl}??limit=${limit}&offset=${offset}`);
    pokemonDb = await response.json();
    console.log(pokemonDb);
    loopPokemon(pokemonDb);
}

async function fetchDataPokemonInfos() {
    let response = await fetch(`${pokeUrl}`);
    pokemonInfosDb = await response.json();
    console.log(pokemonInfosDb);
}

function loopPokemon(pokemonDb, i) {
    for (let i = 0; i < pokemonDb.results.length; i++) {
        const element = pokemonDb.results[i];
        let mainContent = document.getElementById('content');
        mainContent.innerHTML += renderPokecards(i);
    }
}

function loopPokemonInfos(pokemonInfosDb, i) {
    for (let j = 1; j < pokemonInfosDb.length; j++) {
        const element = pokemonInfosDb[j];
    }
}

function renderPokecards(i) {
    return  `<div class="pokecard">
    <div class="pokeball" id="pokemon_id${i}">
        <img src="img/pokeball.png" id="pokeball_img">
        <p>#</p>
         ${pokemonDb.results[i].name}
    </div>
    <div>
        gif 
    </div>
    <div>
        
    </div>
</div>`
}

function toggleOverlay(i){

    let overlayRef = document.getElementById(`overlay`);
    overlayRef.classList.toggle(`d_none`);
    onclickPicDialog(i);
    
}

function dialogStopClosing(event) {
    event.stopPropagation()
}

function onclickPicDialog(i) {
    
        document.getElementById(`overlay`). innerHTML = /*html*/ `

                <div id="dialogBox" onclick="dialogStopClosing(event)">

                    
                </div> `


}