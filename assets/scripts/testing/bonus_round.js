describe('Using Objects', function() {

  describe('a variable called starWars', function() {

    it('should exist', function () {
      expect(starWars).to.exist;
    });
    it('should be an object', function () {
      expect(typeof starWars).to.equal('object');
    });
  });

});