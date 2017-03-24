export  class Player {

	name: string;
	index: number;
	_cash: number;
	cards: ICard[] = [];

	constructor(name: string , index: number, cash: number = 1000) {
		this.name = name;
		this.index = index;
		this._cash = cash;
	}

	show() {
		console.log(this.cards);
	}

	takeCard(card: ICard) {
		this.cards.push(card);
	}

	showCard(cards: Node, card: ICard, i: number, j:number) {
		let cardHTML = document.createElement('div');
		cardHTML.setAttribute('class', `card ${card.lear} card${card.name} show-delay${j*10+i}`);
		cards.appendChild(cardHTML);
	}

	calcPoints(): number {
		let pointsSum = 0;
		let firstCard = this.cards[0];
		let secondCard = this.cards[1];
		let thirdCard = this.cards[2];

		if(firstCard.name == "6" && firstCard.name == secondCard.name && firstCard.name == thirdCard.name) {
			return 36;
		}

		if(firstCard.name == "T" && firstCard.name == secondCard.name && firstCard.name == thirdCard.name) {
			return 33;
		}

		if(firstCard.lear != secondCard.lear && firstCard.lear != thirdCard.lear && secondCard.lear != thirdCard.lear) {
			if(firstCard.name == "T" && (firstCard.name == secondCard.name || firstCard.name == thirdCard.name)) {
				return pointsSum = 22;
			} else if(secondCard.name == "T" &&  secondCard.name == thirdCard.name) {
				return pointsSum = 22;
			}
		}

		let currentCard = firstCard;
		this.cards.forEach(function(card) {
			if(currentCard.lear == card.lear) {
				if(firstCard.points > currentCard.points) {
					pointsSum = currentCard.points;
				}
				pointsSum += card.points;
				currentCard = card;
			}	else if( firstCard.lear == card.lear ) {
				pointsSum = firstCard.points + card.points;
				currentCard = card;
			} else if(pointsSum < card.points) {
				pointsSum = card.points;
				currentCard = card;
			} else {
				currentCard = card;
			}
		});

		return pointsSum;
	}

	makeBid(points){
		console.info('Зробити ставку', Math.floor(Math.random() + 0.5));
				if(points < 20) {
					this.cards = [];
				} else {
					return this;
				}
	}

	showTurn(element, attrClass , points){
		if(points < 20) {
					element.setAttribute('class', 'fall ' + attrClass);
				} else {
					element.setAttribute('class', attrClass);
				}
	}

	playing(element, attrClass) {
		element.setAttribute('class', 'playing ' + attrClass);
	}

	yourTurn() {
		console.log('твій хід');
		let youTurn = {
			player: this,
			turnTime: 0
		};
		let time = Date.now();
		console.log(time);
		let btns = document.querySelector('.player-panel');
			btns.addEventListener('click', function(e) {
				console.log(e.target);
				console.log(Date.now());
				youTurn.turnTime = Date.now() - time;
			}, false);

			return youTurn;
	}

	render(n: number, last): Node {
		let playerHTML = document.createElement('div');
		playerHTML.setAttribute('class', `player hidden-cards player${n}`);
		if( n == last ) {
			playerHTML.setAttribute('class', `player  you player${n}`);
		}
		playerHTML.innerHTML = `
			<h3>${this.name}</h3>
			<div class="player-photo"></div>
			<div class="progress">
				<span class="progress-time"></span>
			</div>
			<span class="player-money">${this._cash}</span>

			<div class="player-cards">
			</div>
		`;
		return playerHTML;
	}
}
