function computerPlay() {
	index = Math.floor(Math.random() * 3);
	return ['Rock', 'Paper', 'Scissors'][index];
}
function capitalise(str) {
	str1 = str[0];
	str2 = str.substring(1);
	str1 = str1.toUpperCase();
	str2 = str2.toLowerCase();
	str = str1 + str2;
	return str;
}
function playRound(playerSelection, computerSelection) {
	playerSelection = capitalise(playerSelection)
	computerSelection = capitalise(computerSelection) // Optional.

	if (playerSelection === computerSelection) { return 'Draw!' }

	switch (playerSelection) {
		case 'Rock':
			return (computerSelection === 'Paper' ? 'Computer wins!' : 'Player wins!')
		case 'Paper':
			return (computerSelection === 'Scissors' ? 'Computer wins!' : 'Player wins!')
		case 'Scissors':
			return (computerSelection === 'Rock' ? 'Computer wins!' : 'Player wins!')
	}
}
function game() {
	let drawCount = 0, winCount = 0, lossCount = 0;
	for (i = 0; i < 5; i++) {
		message = playRound(prompt('Pick Rock, Paper or Scissors', 'Rock'), computerPlay())
		switch (message) {
			case 'Player wins!':
				winCount++;
				break;
			case 'Computer wins!':
				lossCount++;
				break;
			case 'Draw!':
				drawCount++;
				break;


		}
	}
	return { 'Wins: ': winCount, 'Losses: ': lossCount, 'Draws: ': drawCount };
}
console.log(game());
