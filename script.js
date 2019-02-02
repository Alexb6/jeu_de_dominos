/*-----------------------------
Variables
-----------------------------*/
var handPlayer01 = [];
var handPlayer02 = [];
var handPlayer03 = [];
var handPlayer04 = [];
var gameZone = [];
var nbPlayers = 2;

/*-----------------------------
Domino Set
-----------------------------*/

const dominoSet = [];
// Load the dominoes in the set
function loadSet() {
    for (let i = 0; i < 28; i++) {
        dominoSet.push(document.getElementById('d' + i));
    }
    return dominoSet;
}
loadSet();


// var dominoTile00 = document.getElementsByClassName('domino00');
// var dominoTile01 = document.getElementsByClassName('domino01');
// var dominoTile02 = document.getElementsByClassName('domino02');
// var dominoTile03 = document.getElementsByClassName('domino03');
// var dominoTile04 = document.getElementsByClassName('domino04');
// var dominoTile05 = document.getElementsByClassName('domino05');
// var dominoTile06 = document.getElementsByClassName('domino06');
// var dominoTile07 = document.getElementsByClassName('domino11');
// var dominoTile08 = document.getElementsByClassName('domino12');
// var dominoTile09 = document.getElementsByClassName('domino13');
// var dominoTile10 = document.getElementsByClassName('domino14');
// var dominoTile11 = document.getElementsByClassName('domino15');
// var dominoTile12 = document.getElementsByClassName('domino16');
// var dominoTile13 = document.getElementsByClassName('domino22');
// var dominoTile14 = document.getElementsByClassName('domino23');
// var dominoTile15 = document.getElementsByClassName('domino24');
// var dominoTile16 = document.getElementsByClassName('domino25');
// var dominoTile17 = document.getElementsByClassName('domino26');
// var dominoTile18 = document.getElementsByClassName('domino33');
// var dominoTile19 = document.getElementsByClassName('domino34');
// var dominoTile20 = document.getElementsByClassName('domino35');
// var dominoTile21 = document.getElementsByClassName('domino36');
// var dominoTile22 = document.getElementsByClassName('domino44');
// var dominoTile23 = document.getElementsByClassName('domino45');
// var dominoTile24 = document.getElementsByClassName('domino46');
// var dominoTile25 = document.getElementsByClassName('domino55');
// var dominoTile26 = document.getElementsByClassName('domino56');
// var dominoTile27 = document.getElementsByClassName('domino66');

// const dominoSet = [dominoTile00, dominoTile01, dominoTile02, dominoTile03, dominoTile04, dominoTile05, dominoTile06, dominoTile07, dominoTile08, dominoTile09, dominoTile10, dominoTile11, dominoTile12, dominoTile13, dominoTile14, dominoTile15, dominoTile16, dominoTile17, dominoTile18, dominoTile19, dominoTile20, dominoTile21, dominoTile22, dominoTile23, dominoTile24, dominoTile25, dominoTile26, dominoTile27];


// Shuffle the set randomly
function shuffleDomino(array) {
    var currentIndex = array.length,
        temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex !== 0) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}

// Creation of a randomized set
var randomSet = shuffleDomino(dominoSet);


/*-----------------------------
Distribution of the tiles 
-----------------------------*/

// Number of tiles per player
function tilesPerPlayer(nbPlayers) {
    if (nbPlayers == 3 || nbPlayers == 4) {
        return nbTiles = 6;
    } else if (nbPlayers == 2) {
        return nbTiles = 7;
    } else if (nbPlayers <= 1 || nbPlayers > 4) {
        console.log('Le jeu de domino se joue entre 2 à 4 jouers !')
    }
}

var nbTiles = tilesPerPlayer(nbPlayers);

// Distribution of the hand to the player
handPlayer01 = randomSet.splice(0, nbTiles);
console.log(handPlayer01);

var player1Disp = document.getElementById('player1');
player1Disp.appendChild(handPlayer01);

function displayTiles(array) {
    for (let i = 0; i < array.length; i++) {

    }
}




// var array01 = [2, 4, 6];
// var array02 = [3, 9];
// //var newArray = array01+array02

// var array03 = new Array(array01.length + 1);

// for (let i = 0; i < array01.length; i++) {
//     array03[i] = array01[i];
// }


// console.log(array03);


// Center coordinates - https://stackoverflow.com/questions/8027875/how-to-find-the-elements-x-center-coordinates-and-related-window-offset