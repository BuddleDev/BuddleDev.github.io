/* 
var coinImg = document.getElementById("coinImg");

function flip() {
    var factor;
    factor = Math.floor(Math.random() * 2);

    console.log(factor);
    

    if (factor == 0 && coinImg == 'quarter.png') {
        coinImg.src="penny.png";
    }
    if (factor == 0 && coinImg == 'penny.png') {
        coinImg.src="quarter.png";
    }
}



setInterval(flip, 1000); */

/* console.log("coinIndex is 0 when the coin is a Head.");
console.log("coinIndex is 1 when the coin is a Tail.");
 */

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
const f12 = document.getElementById("f12");
const hidden_f12 = document.getElementById("hidden_f12");

let coinIndex = 0;
let coin;
let count = 0;

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
    //console.log("pc_turn initiated.")
    var randomNumber = Math.floor(Math.random() * 2);
    if (randomNumber == 1) {
        flipCoinByComputer();
        console.log("The computer has flipped the coin. Now: ", coins[coinIndex].name);
        //console.log("coinIndex: ", coinIndex);
    } else {
        console.log("the computer hasn't flipped the coin. Now: ", coins[coinIndex].name);
        //console.log("coinIndex: ", coinIndex);
    }

    if (count == 0) {
        description.innerHTML = "Computer has made its First decision."
    }
    if (count == 2) {
        description.innerHTML = "Computer has made its Second decision."
    }
    //console.log("Count: ", count);
    img.src = coins[2].img; //hide
    coinName.innerHTML = "Current Coin: Unknown";
    // console.log("Hidden");

    count++;
}

/* function flipCoin(identifier) {
    console.log("flipCoin initiated.")

    //Coin Flipping
    if (coinIndex == 0) { 
        coin = coins[1];
        coinIndex = 1;
    } else {
        coin = coins[0];
        coinIndex = 0;
    }
    
    if (identifier == 1) {  //The subject who flipped the coin is a User
        description.innerHTML = "You flipped the Coin.";
        count++;
    }

    if (count >= 4) {
        setTimeout(revealCoin, 1000);
        return
    }
    
    console.log("coinIndex: ", coinIndex);
    description.innerHTML = "Thinking...";
    setTimeout(pc_turn, 2000);
} */

function flipCoinByComputer() {
    //console.log("flipCoinByComputer initiated.")

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
    //console.log("flipCoinbyUser initiated.")

    //Coin Flipping
    if (coinIndex == 0) { 
        coin = coins[1];
        coinIndex = 1;
    } else {
        coin = coins[0];
        coinIndex = 0;
    }
    
    description.innerHTML = "You flipped the Coin.";
    console.log("You flipped the coin. Now: ", coins[coinIndex].name);
    count++;
    

    if (count >= 4) {
        setTimeout(revealCoin, 1000);
        return
    }
    
    //console.log("coinIndex: ", coinIndex);
    description.innerHTML = "Thinking...";
    setTimeout(pc_turn, 2000);
}

function passCoin() {
    //console.log("passCoin initiated.");
    description.innerHTML = "You have Passed.";
    console.log("You has NOT flipped the coin. Now: ", coins[coinIndex].name);
    count++;
    if (count >= 4) {
        setTimeout(revealCoin, 1000);
        return
    }

    description.innerHTML = "Thinking...";
    setTimeout(pc_turn, 2000);
}

/* function showCoin() {
    var factor = Math.floor(Math.random() * 2);
    console.log(factor);
    console.log("Coin Flipped.");
    let coin = coins[coinIndex];
    img.src = coin.img;
    coinName.innerHTML = coin.name;
} */



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
    f12.innerHTML = "If you're curious if this game is transparent, <br> Press F12 and go to 'Console' tab. <br> And there will be a history log of this game. <br> The Developer Tool doesn't Lie! <br> Sorry if you're using your smartphone...";
    hidden_f12.innerHTML = "And if you are really curious if this game is transparent, <br> press F12 and go to 'Sources' tab and find a Javascript file. <br> And you can see the code for this game!";

}

/* setInterval(showCoin, 1000); */
/* async function main() {
    await pc_turn();
    await user_turn();
    await pc_turn();
    await user_turn();
    await showCoin();

} */






