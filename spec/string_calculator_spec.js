describe('Electron Game', function() {
	beforeEach(function() {
		game = new ElectronGame();
	});

	it('should return 6 for 1, 2, 3, 4, 5', function() {
		expect(game.add('1, 2, 3, 4, 5')).toEqual(6);
	});
});
