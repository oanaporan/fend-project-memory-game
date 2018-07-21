//List that holds all of cards:
const cards = document.querySelectorAll('.card');
//Array of all cards icons
const icons = ["fa fa-diamond", "fa fa-diamond", "fa fa-paper-plane-o", "fa fa-paper-plane-o", "fa fa-anchor", "fa fa-anchor", "fa fa-leaf", "fa fa-leaf", "fa fa-bicycle", "fa fa-bicycle","fa fa-bomb", "fa fa-bomb", "fa fa-bolt", "fa fa-bolt", "fa fa-cube", "fa fa-cube"];
//Deck of cards
const deck = document.querySelector('.deck');
//List of open cards for checking if cards match
const openCards = [];
//List of matching cards
const matchingCards = [];
//Moves counter
const moves = document.querySelector('.moves');
// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(icons) {
    var currentIndex = icons.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = icons[currentIndex];
        icons[currentIndex] = icons[randomIndex];
        icons[randomIndex] = temporaryValue;
    }

    return icons;
}
//Start Game
function startGame () {
//Display cards on deck:
    for (let i=0; i<icons.length; i++) {
        const card = document.createElement('li');
        card.classList.add('card');
        card.innerHTML = `<i class='${icons[i]}'</i>`;
        deck.appendChild(card);
        card.addEventListener('click', flipCard);
    }  
}  
        //Flip card on click and add it to the list of open cards
        function flipCard() {
            this.classList.add('open','show');
            openCards.push(this);
            checkMatch();
        }
        //Check if cards match 
        function checkMatch() {
            let firstCard = openCards[0];
            let secondCard = openCards[1];
            //If there are two cards open and they match then add class match
            if (openCards.length > 0) {
                if (firstCard.innerHTML === secondCard.innerHTML){
                    firstCard.classList.add('match');
                    secondCard.classList.add('match');
                    //remove the cards matched from the open cards array
                    openCards.splice(0, 2);
                    //add the matching cards to the matching cards array
                    matchingCards.push(firstCard, secondCard);
            //If the two cards do not match, wait 600ms andflip them back
                } else {
                    setTimeout(function(){
                        firstCard.classList.remove('show', 'open');
                        secondCard.classList.remove('show', 'open');
                        //remove the cards that do not match from the open cards array
                        openCards.splice(0, 2);
                    }, 600);
                }
            //If there is only one card open, then add it to the open cards array
            } else {
                openCards.push(this);    
            }
        }
        function gameOver() {
            if (openCards.length === matchingCards.length) {
                window.alert('Congradulations!');
            }
        }

//Start Game when on load
startGame();   


/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
