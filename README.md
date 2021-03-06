# FEND Udacity - Memory Game Project 

##### What is the Memory Game?
A single page web app with the classic memory game. 

##### Challenge
Match all cards in less time with less moves.

## Preview
![snippet](img/snippet.png)

## Installation
1. Download the img, css, js folders and the index.html file.
2. Open the index.html file in the browser. 

### Development Strategy: 
* Memory Game Logic
The game randomly shuffles the cards. A user wins once all cards have successfully been matched.

* Congratulations Popup
When a user wins the game, a modal appears to congratulate the player and ask if they want to play again. 

* Restart Button
A restart button allows the player to reset the game board, the timer, and the star rating.

* Star Rating
The game displays a star rating (from 1 to at least 3) that reflects the player's performance. At the beginning of a game, it displays 3 stars. After 16  moves, it changes to a lower star rating. After 22 moves, changes to a 1 star rating.

* Timer
When the player starts a game, a displayed timer starts. Once the player wins the game, the timer stops.

* Move Counter
Game displays the current number of moves a user has made.

* Flip a card
Onclick function reveals a card, adds it to an array of open cards them checks if matck.


### Code
* Manipulating the DOM with Vanilla JS, altered the HTML and styled the game.
* Font-awesome and Google fonts used: 'Nunito', sans-serif.
