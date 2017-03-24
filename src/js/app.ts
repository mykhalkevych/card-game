import {Game} from './game';
import {Player} from './player';
import {Manager} from './gameManager';
import * as helper from './helper';

import '../sass/main.scss';

let startBtn = document.querySelector('.start-game');
startBtn.addEventListener('click', startGame, false);

let gameManager = new Manager();

function startGame() {
	gameManager.init(function(){

		let game = new Game();
		let yourName = prompt('Enter your name', 'Player');
		game.shuflleCard(helper.deckOfCard);
		for (var i = 0; i < game.playersCount; ++i) {
			let playerName = `Player${i+1}`;
			if(i == game.playersCount -1 && yourName){
				game.players[i] = new Player(yourName, i);
				game.players[i]['you'] = 'you';
			} else {
				game.players[i] = new Player(playerName, i);
			}
			let playerElement = game.players[i].render(i+1, game.playersCount);
				game.drawPlayer(playerElement);

		}
		console.log(game.players)

		return {
			game: game,
			players: game.players
		};
	});
}
startGame();
let promise = new Promise( function( resolve, reject) {

});
console.log(promise);
startRound(gameManager.game);
setTimeout(() => {
		let sortPlayers = gameManager.game.sortByDiller(gameManager.players);
		console.log(sortPlayers);
		gameManager.game.playRound(sortPlayers);
} , 5000);

function startRound(game: Game){
	game.giveCards(function(i: number, j: number, playerIndex: number){
			let card = game.giveCard(helper.randomCard(game.deckOfCard.length));
			game.players[playerIndex].takeCard(card);
			let cardsHTML = document.querySelectorAll('.player-cards')[playerIndex];

			game.players[playerIndex].showCard(cardsHTML, card, i+1, j);


		});
}

// function startGame() {
// 	let game = new Game();
// 	game.shuflleCard(helper.deckOfCard);
// 	game.init();
// 	for (var i = 0; i < game.playersCount; ++i) {
// 		let playerName = prompt('Enter player name')
// 		game.players.push(new Player(playerName));
// 	}
// 	for (let i = 0; i < 3; ++i) {
// 		for (let i = 0; i < game.players.length; ++i) {
// 			let card = game.giveCard(helper.randomCard(game.deckOfCard.length));
// 			game.players[i].takeCard(card);
// 		}
// 	}
// 	console.log(game.players);
// }
 let  defaultAvatar = require('../images/default_avatar.png');
