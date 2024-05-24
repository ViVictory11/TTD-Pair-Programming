// StringCalculator.js
function ElectronGame() {}
ElectronGame.prototype.add = function(array_numbers) {
	const split_array = array_numbers.split(',');
	
	return split_array.length +1;
};
