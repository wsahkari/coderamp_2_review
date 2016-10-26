describe('Using Objects', function() {

  describe('a object called yoda', function() {

    it('should exist', function () {
      expect(yoda).to.exist;
    });
    it('should be an object', function () {
      expect(typeof yoda).to.equal('object');
    });
    it('should have each of the following keys: species, affiliation, occupation, forceUser, lightSide, darkSide.', function() {
      expect(yoda).to.have.keys(['species', 'affiliation', 'occupation', 'forceUser', 'lightSide', 'darkSide']);
    });
    it('should get it\'s values from either from having seen Star Wars, or checking the yoda wikipedia article\'s sidebar', function() {
      expect(yoda.species).to.equal('Green swamp monster');
      expect(yoda.affiliation).to.equal('Jedi Order Galactic Republic');
      expect(yoda.occupation).to.equal('Jedi Grand Master of the Order Jedi Master of the High Council');
      expect(yoda.forceUser).to.equal(true);
      expect(yoda.lightSide).to.be(true);
      expect(yoda.darkSide).to.be(false);

    });
    describe('using dot notation', function() {
      it('There should be a variable called yodaTitle', function() {
        expect(yodaTitle).to.exist;
      });
      it('use dot notation and string concatination to give yodaTitle the value "Yoda " plus yoda\'s occupation', function() {
        expect(yodaTitle).to.equal('Yoda ' + yoda.occupation);
      });
    });

    describe('beast mode', function() {
      it('there should be a function called addsToObject that takes an object, a key, and a value as parameters', function () {
        expect(typeof addsToObject).to.be('function');
      });
      it('addsToObject should add the value to the object at the passed in key', function () {
        var obj = {one: 1}
        addsToObject(obj, 'two', 2);
        expect(obj).to.have.keys(['one', 'two']);
        expect(obj.one).to.equal(1);
        expect(obj.two).to.equal(2);
      });
    });
  });


});