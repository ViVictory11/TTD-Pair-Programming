describe('Electron Game', function() {
	beforeEach(function() {
		game = new ElectronGame();
	});

	it('should return 0 for an empty string', function() {
		expect(game.add('')).toEqual(0);
	});
});
