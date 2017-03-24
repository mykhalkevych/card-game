export class Game {

	private _playersCount = 10;
	players = [];
	deckOfCard: ICard[];
	gameTable: Element;
	dillerPLayer = 2;
	finishRound: boolean = false;
	bid: number;
	bank: number;
	round: number = 1;

	constructor() {
		this.gameTable = document.querySelector('.game-table');
	}

	set playersCount(playersCount: number) {
		this._playersCount = playersCount;
	}

	get playersCount(): number {
		return this._playersCount;
	}

	start() {
		for (let i = 0; i < this.players.length; ++i) {

		}
	}

	shuflleCard( deckOfCard: ICard[] ) {
		this.deckOfCard = deckOfCard;
	}

	giveCards(newCard) {
		for (let j = 0; j < 3; ++j) {
			for (let i = 0; i < this.dillerPLayer; ++i) {
				newCard(i + this.players.length - this.dillerPLayer, j, i )
			}
			for (let i = this.dillerPLayer; i < this.players.length; ++i) {
				newCard(i - this.dillerPLayer, j, i );
			}
		}
	}

	sortByDiller(players) {
		let beforeDiller = players.slice(0, this.dillerPLayer);
		let afterDiller = players.slice(this.dillerPLayer);
		console.log(beforeDiller);
		return [].concat(afterDiller, beforeDiller);
	}

	drawPlayer(element: Node) {
		this.gameTable.appendChild(element);
	}

	giveCard(cardIndex: number) {
		let card = this.deckOfCard[cardIndex];
		this.deckOfCard.splice(cardIndex, 1);
		return card;
	}

	playRound(activePlayers) {
		let game = this;
		let turnTime = 0;
		let players = activePlayers.filter(function(player , index) {

					let playerHTML = document.querySelectorAll('.player')[player.index];
					let classes = playerHTML.getAttribute('class');

					let currentTime = Math.floor( Math.random() * 10 * 500 );
					turnTime += currentTime;

					let playerPoints = player.calcPoints();

					setTimeout(() => player.playing(playerHTML, classes), turnTime  - currentTime);

					if('you' in player) {
						let youTurn;
						setTimeout(() => {
							youTurn = player.yourTurn();
							turnTime = youTurn.turnTime;
							return youTurn.player;
						}, turnTime  - currentTime);
					} else {
						setTimeout(() => player.showTurn(playerHTML, classes , playerPoints), turnTime);
						return  player.makeBid(playerPoints);
					}



			});
		console.log(turnTime)
			setTimeout(() => {
				 console.log('sdfasadfsadf', players);
				 if(players.length) {
				 		game.playRound(players);
				 }
			}, turnTime );
	}
}