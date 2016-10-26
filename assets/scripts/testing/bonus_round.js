describe('Using Objects', function() {

  describe('a variable called yoda', function() {

    it('should exist', function () {
      expect(yoda).to.exist;
    });
    it('should be an object', function () {
      expect(typeof yoda).to.equal('object');
    });
    it('should have each of the following keys: species, affiliation, occupation, forceUser, lightSide, darkSide. The values either come from the yoda wikipedia article\'s sidebar, or from having watched Star Wars.', function() {
      expect(yoda).to.have.all.keys(['species', 'affiliation', 'occupation', 'forceUser', 'lightSide', 'darkSide']);
    });
  });

});