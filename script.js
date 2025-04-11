let limit = 20;
let offset = 0;
let pokeUrl = "https://pokeapi.co/api/v2/pokemon?";


async function fetchDataPokemon() {
    let response = await fetch(`${pokeUrl}?limit=${limit}&offset=${offset}`);
    let responseAsJson = await response.json();
    console.log(responseAsJson);
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

                    <div id="xButton">   
                        <button onclick="toggleOverlay()" id="xButtonConfig"></button>
                    </div>

                    <div id="dialogPicBox">
                        <img id="dialogPic" src="./img/pic${i+1}.jpg">
                    </div>

                    <div id="buttonsPfeile">
                        <button id="buttonLeft" onclick="buttonLeft(${i})"></button>
                        <button id="buttonRight" onclick="buttonRight(${i})"></button>
                    </div>
                    
                </div> `


}