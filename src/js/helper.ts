export let deckOfCard: ICard[] = [
	{ lear: 'spades', name: '6', points: 6 }, { lear: 'clubs', name: '6', points: 6 },
	{ lear: 'hearts', name: '6', points: 6 }, { lear: 'diams', name: '6', points: 6 },
	{ lear: 'spades', name: '7', points: 7 }, { lear: 'clubs', name: '7', points: 7 },
	{ lear: 'hearts', name: '7', points: 7 }, { lear: 'diams', name: '7', points: 7 },
	{ lear: 'spades', name: '8', points: 8 }, { lear: 'clubs', name: '8', points: 8 },
	{ lear: 'hearts', name: '8', points: 8 }, { lear: 'diams', name: '8', points: 8 },
	{ lear: 'spades', name: '9', points: 9 }, { lear: 'clubs', name: '9', points: 9 },
	{ lear: 'hearts', name: '9', points: 9 }, { lear: 'diams', name: '9', points: 9 },
	{ lear: 'spades', name: '10', points: 10 }, { lear: 'clubs', name: '10', points: 10 },
	{ lear: 'hearts', name: '10', points: 10 }, { lear: 'diams', name: '10', points: 10 },
	{ lear: 'spades', name: 'J', points: 10 }, { lear: 'clubs', name: 'J', points: 10 },
	{ lear: 'hearts', name: 'J', points: 10 }, { lear: 'diams', name: 'J', points: 10 },
	{ lear: 'spades', name: 'Q', points: 10 }, { lear: 'clubs', name: 'Q', points: 10 },
	{ lear: 'hearts', name: 'Q', points: 10 }, { lear: 'diams', name: 'Q', points: 10 },
	{ lear: 'spades', name: 'K', points: 10 }, { lear: 'clubs', name: 'K', points: 10 },
	{ lear: 'hearts', name: 'K', points: 10 }, { lear: 'diams', name: 'K', points: 10 },
	{ lear: 'spades', name: 'T', points: 11 }, { lear: 'clubs', name: 'T', points: 11 },
	{ lear: 'hearts', name: 'T', points: 11 }, { lear: 'diams', name: 'T', points: 11 },
	{ lear: 'spades', name: 'T', points: 11 }, { lear: 'clubs', name: 'T', points: 11 },
	{ lear: 'hearts', name: 'T', points: 11 }, { lear: 'diams', name: 'T', points: 11 },
	{ lear: 'spades', name: 'T', points: 11 }, { lear: 'clubs', name: 'T', points: 11 },
	{ lear: 'hearts', name: 'T', points: 11 }, { lear: 'diams', name: 'T', points: 11 },
];

export function randomCard (n: number): number {
	return Math.floor( Math.random() * n );
}