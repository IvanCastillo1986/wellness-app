const randomNum = () => {
	return Math.ceil(Math.random() * 5);
};

const makePark = (park) => {
	const newPark = {
		name: park.name311,
		address: park.location,
		emotion: {
			uplifted: randomNum(), // depressed
			satisified: randomNum(), // bored
			content: randomNum(), // frustrated
			relaxed: randomNum(), // tense
			happy: randomNum(), // sad
			at_ease: randomNum(), // annoyed
			calm: randomNum(), //hyper
		},
	};
	return newPark;
};

module.exports = makePark;
