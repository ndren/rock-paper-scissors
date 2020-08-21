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
function reset() {
	draws = 0;
	wins = 0;
	losses = 0;
}
let buttons = document.querySelectorAll('button')
let draws = 0; let wins = 0; let losses = 0;
buttons.forEach((button) => button.addEventListener('click', function () {
	let result = playRound(button.innerText, computerPlay());
	let div = document.querySelector('#result');

	switch (result) {
		case 'Draw!':
			draws += 1;
			break;
		case 'Player wins!':
			wins += 1;
			break;
		case 'Computer wins!':
			losses += 1;
			break;
	}

	div.innerText = result + '\n' + `Draws: ${draws}; Wins: ${wins}; Losses: ${losses}.`;
	if (wins === 5) {
		reset();
		div.innerText += '\n' + 'Player wins this set!';
	}
	if (losses === 5) {
		reset();
		div.innerText += '\n' + 'Computer wins this set!';
	}
	if (draws === 5) {
		reset();
		div.innerText += '\n' + 'This set is drawn!';
	}

}))