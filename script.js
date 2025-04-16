let limit = 20;
let offset = 0;
let pokeUrl = `https://pokeapi.co/api/v2/pokemon`;
let pokemonDb = "";
let pokemonAbilities = "";
let pokemonStats = "";
let pokemonInfosDb = "";

function init() {
    fetchDataPokemon();
}


async function fetchDataPokemon() {
    for (let i = 1; i <= 3; i++){
        let response = await fetch(`${pokeUrl}/${i}`);
        pokemonDb = await response.json();
    }
    renderPokecards();
}


function renderPokecards() {
    for (let i = 0; i < pokemonDb.length; i++) {

        let mainContent = document.getElementById('content');
        mainContent.innerHTML += 
       `<div class="pokecard">
        <div class="pokeball" id="pokemon_id${i+1}">
            <img src="img/pokeball.png" id="pokeball_img">
            <p>#</p>
             ${pokemonDb.species.name}
        </div>
        <div class="container_img_type">
            <div id="container_types">
            </div>
             <div id="container_img">
            </div>
        </div>
        <div>
            
        </div>
    </div>`
    }
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