function ElectronGame() {}
ElectronGame.prototype.add = function(array_numbers) {
    const split_array = array_numbers.split(',').map(Number);
    let sum = 0;

	if(split_array.length == 6 && split_array[0] == split_array[1])
	{
		return split_array[5]-split_array[4];
	} else {
		for(let i = 0; i < split_array.length; i++){
			if(split_array[i] % 2 === 0) {
				sum = sum + split_array[i];
			}
		}
		return sum;
	}
};
