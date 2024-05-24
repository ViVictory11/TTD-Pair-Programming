// StringCalculator.js
function ElectronGame() {}
ElectronGame.prototype.add = function(array_numbers) {
	const split_array = array_numbers.split(',');
	let sum = 0;
	
	for(let i = 0; i < split_array.length; i++){
		if(+split_array[i]%2 === 0){
			sum = sum + +split_array[i];
		}
	}
	return sum;
};
