const randomNum = () => {
	return Math.ceil(Math.random() * 5);
};

const makePark = (park) => {
	const newPark = {
		name: park.name311,
		address: park.location,
		emotions: {
			uplifted: {value: randomNum(), count: 1}, // depressed
			entertained: {value: randomNum(), count: 1}, // bored
			content: {value: randomNum(), count: 1}, // frustrated
			relaxed: {value: randomNum(), count: 1}, // tense
			happy: {value: randomNum(), count: 1}, // sad
			at_ease: {value: randomNum(), count: 1}, // annoyed
			calm: {value: randomNum(), count: 1} //hyper
		}
	};
	return newPark;
};

module.exports = makePark;
