const coins = [
    {
        id: 0,
        name: "Head",
        img: "img/head.png"
    },
    {
        id: 1,
        name: "Tail",
        img: "img/tail.png"
    },
    {
        id: 2,
        name: "Hidden Coin",
        img: "img/silver_coin.jpg"
    }
]

const img = document.getElementById("coinImg");
const coinName = document.getElementById("coinName");
const description = document.getElementById("description");
const historyHeader = document.getElementById("historyHeader");
const history1 = document.getElementById("history1");
const history2 = document.getElementById("history2");
const history3 = document.getElementById("history3");
const history4 = document.getElementById("history4");
const wizardLog = document.getElementById("wizard");
const f12 = document.getElementById("f12");
const hidden_f12 = document.getElementById("hidden_f12");

let coinIndex = 0;
let coin;
let count = 0;
let historyArr = [];

document.addEventListener("DOMContentLoaded", start);

function start() {
    let coinIndex = 0;
    let count = 0;

    const firstCoin = coins[0];
    img.src = firstCoin.img;

    description.innerHTML = "If you are first at playing this game, read the rules.";
    coinName.innerHTML = "Current Coin: " + firstCoin.name;
    document.getElementById("btn_start").disabled = false;
    document.getElementById("btn_flip").disabled = true;
    document.getElementById("btn_pass").disabled = true;
}

function btn_start() {
    console.log("Game Start!");
    pc_turn();
    document.getElementById("btn_start").disabled = true;
    document.getElementById("btn_flip").disabled = false;
    document.getElementById("btn_pass").disabled = false;
}

function pc_turn() {
    var randomNumber = Math.floor(Math.random() * 2);
    if (randomNumber == 1) {
        flipCoinByComputer();
        console.log("The computer has flipped the coin. Now: ", coins[coinIndex].name);
    } else {
        console.log("The computer hasn't flipped the coin. Now: ", coins[coinIndex].name);
    }

    if (count == 0) {
        description.innerHTML = "Computer has made its First decision."
    }
    if (count == 2) {
        description.innerHTML = "Computer has made its Second decision."
    }

    img.src = coins[2].img; //hide
    coinName.innerHTML = "Current Coin: Unknown";
    

    historyArr[count] = coins[coinIndex].name;
    count++;

    setTimeout(wizard, 500);
}


function flipCoinByComputer() {

    //Coin Flipping
    if (coinIndex == 0) { 
        coin = coins[1];
        coinIndex = 1;
    } else {
        coin = coins[0];
        coinIndex = 0;
    }
}

function flipCoinByUser() {

    //Coin Flipping
    if (coinIndex == 0) { 
        coin = coins[1];
        coinIndex = 1;
    } else {
        coin = coins[0];
        coinIndex = 0;
    }
    
    description.innerHTML = "You Flipped The Coin.";
    console.log("You flipped the coin. Now: ", coins[coinIndex].name);
    historyArr[count] = coins[coinIndex].name;
    count++;
    

    if (count >= 4) {
        setTimeout(revealCoin, 1000);
        return
    }
    
    description.innerHTML = "Thinking...";
    setTimeout(pc_turn, 2000);
}

function passCoin() {
    description.innerHTML = "You Haven't Flipped The Coin.";
    console.log("You haven't flipped the coin. Now: ", coins[coinIndex].name);
    historyArr[count] = coins[coinIndex].name;
    count++;
    if (count >= 4) {
        setTimeout(revealCoin, 1000);
        return
    }

    description.innerHTML = "Thinking...";
    setTimeout(pc_turn, 2000);
}

function flipIndex() {
    if (coinIndex == 0) {
        return 1;
    } else {
        return 0;
    }
}

let wizardWrongCount = 0;
function wizard() {
    let prob = Math.random();
    console.log("Probability: ", prob);
    if (count == 1) {
        if (prob <= 0.6) {
            window.alert("The 70% Wizard Says It's \""+coins[coinIndex].name+"\"");
        } else {
            window.alert("The 70% Wizard Says It's \""+coins[flipIndex()].name+"\"");
            wizardWrongCount++;
        }
    }
    if (count == 3) {
        if (prob <= 0.55) {
            window.alert("The 60% Wizard Says It's \""+coins[coinIndex].name+"\"");
        } else {
            window.alert("The 60% Wizard Says It's \""+coins[flipIndex()].name+"\"");
            wizardWrongCount++;
        }
    }
}

function revealCoin() {
    //console.log("revealCoin initiated.");
    let coin = coins[coinIndex];
    img.src = coin.img;
    coinName.innerHTML = coin.name;
    if (coinIndex == 0) { //Head
        description.innerHTML = "You Won!";
    } else { //Tail
        description.innerHTML = "You Lost!";
    }
    historyHeader.innerHTML = "HISTORY"
    history1.innerHTML = "Computer's first try: "+historyArr[0];
    history2.innerHTML = "Your first try: "+historyArr[1];
    history3.innerHTML = "Computer's final try: "+historyArr[2];
    history4.innerHTML = "Your final try: "+historyArr[3];
    if (wizardWrongCount == 0) {
        wizardLog.innerHTML = "Maybe the Wizard was a Mad-Eye Moody..";
    } else if (wizardWrongCount == 1) {
        wizardLog.innerHTML = "The Wizard made just one single mistake. But he did his best!";
    } else {
        wizardLog.innerHTML = "-The wizard has left for Ollivander-"
    }
    f12.innerHTML = "If you're curious if this game is transparent, <br> Press F12 and go to 'Console' tab. <br> And there will be a history log of this game. <br> The Developer Tool doesn't Lie! <br> Sorry if you're using your smartphone...";
    hidden_f12.innerHTML = "And if you are really curious if this game is transparent, <br> press F12 and go to 'Sources' tab and find a Javascript file. <br> Then you can see the code for this game!";

}

/* setInterval(showCoin, 1000); */
/* async function main() {
    await pc_turn();
    await user_turn();
    await pc_turn();
    await user_turn();
    await showCoin();

} */






