// Niharika Dutta | @canvas-nd
alert("GAME RULES :: \n\n 1) Click on ROLL DICE to start a Game.\n 2) CURRENT SCORE will be added & display GLOBALLY on clicking PASS BUTTON.\n 3)Which implies that the Opposite player will get the chance for rolling and it continues .... \n 4) You can also click on NEW GAME for another match. \n \n                                           || BEST OF LUCK || \n");
var highestsc = prompt("ENTER THE MAX SCORE: ");
var choice = prompt("SELECT GAMEPLAY :\n 1) PLAYER VS PLAYER \n 2) PLAYER VS COMPUTER ");
if (choice === '1') {
    var name1 = prompt("ENTER PLAYER 1 NAME :");
    var name2 = prompt("ENTER PLAYER 2 NAME :");
} else {
    var name1 = prompt("ENTER PLAYER NAME :");
    var name2 = "COMPUTER";
}

var scores, roundscore, activeplayer, dice, playgame, rolldice;
var diceselect = document.querySelector('.dice');

starting_requirement();

/* means #current-0 & #current-1 will be altered player basis----- so we r taking an activeplayer variable for 
that 0/1 alternative tn we r implementing a string in a '' */

// hide - dice at FIRST
diceselect.style.display = "none";
rolldice = 1;

// ############ || playgame STATE VARIABLE playgame WILL ASSURE THAT AFTER WINNER DECLARED, HOLD &  ROLL BTN WILL BE FREEZED || #########

document.querySelector('.btn-roll').addEventListener('click', function() {

    if (rolldice === 1) {
        if (playgame) {
            // random no. create
            var dice = Math.floor(Math.random() * 6) + 1;

            // display result
            diceselect.style.display = 'block';
            diceselect.src = 'images/roll-dice/dice-' + dice + '.png';
            console.log(dice);

            roundscore = roundscore + dice;
            document.querySelector('#current-' + activeplayer).textContent = roundscore;

            rolldice = 0;
        }
    }
});

// Niharika Dutta | @canvas-nd

document.querySelector(".btn-hold").addEventListener('click', function() {

    if (playgame) {
        // score --> mainscore(GLOBAL SCORE)
        score[activeplayer] = score[activeplayer] + roundscore;

        // update UI
        document.getElementById('score-' + activeplayer).textContent = score[activeplayer];

        // **************** for the input value box - user filled************************ 
        document.querySelector('.maxscore').value = highestsc;
        var winningscore;
        if (highestsc)
            winningscore = highestsc;
        else
            winningscore = 20;


        // WINNING LOGIC  ----------  winner class is not present in html it is a class that directly present in the css file
        if (score[activeplayer] >= winningscore) {

            if (activeplayer === 0) {
                document.getElementById('name-0').textContent = '|| WINNER ||' + " " + name1;
                document.getElementById('name-1').textContent = '|| LOSER ||' + " " + name2;
            }

            else {
                document.getElementById('name-1').textContent = '|| WINNER ||' + " " + name2;
                document.getElementById('name-0').textContent = '|| LOSER ||' + " " + name1;
            }

            diceselect.style.display = "none";
            document.querySelector('#current-' + activeplayer).textContent = '0';
            document.querySelector('.player-' + activeplayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activeplayer + '-panel').classList.remove('active');
            playgame = false;
        } else {
            // nextplayer ---- using DRY PRINCIPLE 
            nextplayer();
        }

        rolldice = 1;

        if (choice === '2') {
            comp();
        }
    }
});

// Niharika Dutta | @canvas-nd
function nextplayer() {
    if (choice === '1') {
        if ((activeplayer === 0))
            document.querySelector('#player-00').textContent = name2 + "'s" + "  " + "  turn";

        else
            document.querySelector('#player-00').textContent = name1 + "'s" + "  " + "  turn";
    }

    if (choice === '2') {
        if ((activeplayer === 0))
            document.querySelector('#player-00').textContent = name2 + "'s" + "  " + "  turn";

        else
            document.querySelector('#player-00').textContent = name1 + "'s" + "  " + "  turn";
    }

    activeplayer === 0 ? activeplayer = 1 : activeplayer = 0;
    roundscore = 0;

    // both the currentscore of both will be 0,we r not doing by active player-as it will affect ONLY one at a time.
    document.querySelector('#current-0').textContent = '0';
    document.querySelector('#current-1').textContent = '0';

    // to TOGGLE the active grey panel  | OR | below one

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
}

// Niharika Dutta | @canvas-nd
// ***************************Logic for the NEW GAME BUTTON*********************************

document.querySelector(".btn-new").addEventListener('click', starting_requirement);

function starting_requirement() {
    score = [0, 0]; //array
    roundscore = 0;
    activeplayer = 0; //1st player starts the game.
    playgame = true;

    document.getElementById('score-1').textContent = '0';
    document.getElementById('score-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    if (choice === '1') {
        document.querySelector('#name-0').textContent = name1;
        document.querySelector('#name-1').textContent = name2;
        document.querySelector('#player-00').textContent = name1 + "'s" + "  " + "  turn";
    } else {
        document.querySelector('#name-0').textContent = name1;
        document.querySelector('#name-1').textContent = name2;
        document.querySelector('#player-00').textContent = name1 + "'s" + "  " + "  turn";
    }

    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
}

// Niharika Dutta | @canvas-nd
// *************************** FUNTIONALITY FOR COMPUTER'S TURN **********************************

function comp() {
    if (rolldice === 1) {
        if (playgame) {
            // random no. create
            var dice = Math.floor(Math.random() * 6) + 1;

            // display result
            diceselect.style.display = 'block';
            diceselect.src = 'images/roll-dice/dice-' + dice + '.png';
            console.log(dice);

            roundscore = roundscore + dice;
            document.querySelector('#current-' + activeplayer).textContent = roundscore;

            rolldice = 0;
        }
    }

    // Niharika Dutta | @canvas-nd
    // ------------------------------------------------------------------------------------------

    if (playgame) {
        // score --> mainscore(GLOBAL SCORE)
        score[activeplayer] = score[activeplayer] + roundscore;

        // update UI
        document.getElementById('score-' + activeplayer).textContent = score[activeplayer];

        // **************** for the input value box - user filled ************************ 
        document.querySelector('.maxscore').value = highestsc;
        var winningscore;
        if (highestsc)
            winningscore = highestsc;
        else
            winningscore = 20;

        // WINNING LOGIC  ----------  winner class is not present in html it is a class that directly present in the css file
        if (score[activeplayer] >= winningscore) {

            if (activeplayer === 0) {
                document.getElementById('name-0').textContent = '|| WINNER ||' + " " + name1;
                document.getElementById('name-1').textContent = '|| LOSER ||' + " " + name2;
            }

            else {
                document.getElementById('name-1').textContent = '|| WINNER ||' + " " + name2;
                document.getElementById('name-0').textContent = '|| LOSER ||' + " " + name1;
            }

            diceselect.style.display = "none";
            document.querySelector('#current-' + activeplayer).textContent = '0';
            document.querySelector('.player-' + activeplayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activeplayer + '-panel').classList.remove('active');
            playgame = false;
        }
        else
            // nextplayer ---- using DRY PRINCIPLE 
            nextplayer();

        rolldice = 1;
    }
}

// Subhankar Pal | @subho57
// Load Service Worker
"serviceWorker" in navigator && window.addEventListener("load", () => {
    navigator.serviceWorker.register("./sw.js").then(e => console.log("Success: ", e.scope)).catch(e => console.log("Failure: ", e))
})