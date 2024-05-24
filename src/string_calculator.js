function ElectronGame() {}
ElectronGame.prototype.add = function(array_numbers) {
    const split_array = array_numbers.split(',').map(Number);
    let sum = 0;
	let counter = 0;

	for(let i = 0; i < split_array.length; i++){
		if(split_array[i] % 2){
			sum += split_array[i];
			counter++;
		}
	}
	return sum - counter;
};
