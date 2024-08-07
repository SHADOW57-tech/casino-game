
let firstCard = 9;
let secondCard = 4;
let sum = firstCard + secondCard;
let cards = [firstCard,secondCard]
let isAlive = true;

console.log(sum);


let messageEl = document.getElementById("message-el");
console.log(messageEl);

let sumEl = document.getElementById("sum-el")
console.log(sumEl)

let cardsEl = document.getElementById("cards-el")

function startGame(){
    console.log(renderGame())
}
function renderGame() {
    let message = "";
    cardsEl.textContent = "card:" + cards[0] + " " + cards[1]
    sumEl.textContent = "sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?";
    } else if (sum === 21) {
        message = "You've got a Blackjack!";
    } else {
        message = "You've lost the game!";
        isAlive = false;
    }
    console.log(message);
    console.log(isAlive);
    messageEl.textContent = message;

    
    
}
function newCard(){
    console.log("draw a new card")
    let card = 4
    sum += card
    cards.push(card)
    console.log(cards)
    renderGame();
}





