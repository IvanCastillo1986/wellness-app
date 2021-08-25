const randomNum = () => {
	return Math.ceil(Math.random() * 5);
};

const makePark = (park) => {
	const arr = []
	for (let i = 0; i <= 6; i++) {
		arr.push(randomNum())
	}
	
	const newPark = {
		name: park.name311,
		address: park.location,
		emotions: {
			uplifted: {avgRating: arr[0], numOfUsersRated: 1, total: arr[0]}, // depressed
			entertained: {avgRating: arr[1], numOfUsersRated: 1, total: arr[1]}, // bored
			content: {avgRating: arr[2], numOfUsersRated: 1, total: arr[2]}, // frustrated
			relaxed: {avgRating: arr[3], numOfUsersRated: 1, total: arr[3]}, // tense
			happy: {avgRating: arr[4], numOfUsersRated: 1, total: arr[4]}, // sad
			at_ease: {avgRating: arr[5], numOfUsersRated: 1, total: arr[5]}, // annoyed
			calm: {avgRating: arr[6], numOfUsersRated: 1, total: arr[6]} //hyper
		}
	};
	return newPark;
};

module.exports = makePark;
