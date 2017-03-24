export class Manager {
	game;
	players;
	constructor() {
		// code...
	}
	init(callback) {
		if(!callback) {
			return;
		}

		let properties = callback();

		for (let property in properties) {
      this[property] = properties[property];
    }
	}

}