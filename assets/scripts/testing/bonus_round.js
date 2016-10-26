
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

    });
  });

describe('Arrays', function(){
  describe('zeroToTen', function() {
    it('should be an array', function () {
      expect(Array.isArray(zeroToTen)).to.be(true);
    });
    it('should hold the numbers 0 - 10 as values', function () {
      expect(zeroToTen).to.contain(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
    });
  })
  describe('numsAsWords', function() {
    it('should be an array', function () {
      expect(Array.isArray(numsAsWords)).to.be(true);
    });
    it('should have the english words for the numbers 0 - 10 as values', function () {
      expect(numsAsWords).to.contain('zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten');
    });
  })
});

describe('beast mode', function() {
  describe('addsToObject', function() {
    it('there should be a function that takes an object, a key, and a value as parameters', function () {
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

  describe('isEven', function() {
    it('should be a function', function () {
      expect(typeof isEven).to.be('function');
    });
    it('should take a number and return true if the number is even, false if it is odd', function () {
      expect(isEven(8)).to.be(true);
      expect(isEven(9)).to.be(false);
    });
  });

  describe('objectFromArrays', function() {
    it('should be a function that takes an array of numbers and an array of strings as parameters', function () {
      expect(typeof objectFromArrays).to.be('function');
    });
    it('should create a new object using the arrays passed in where each string from the array of strings should be the key, and the number from the array of numbers at the same index as the string should hold the value', function () {
      var obj = objectFromArrays(numsAsWords, zeroToTen);
      expect(obj).to.have.keys(numsAsWords);
    });
  });

  describe('higher order functions', function (){

    describe('myMap', function() {

      it('should be a function that takes an array and a function as parameters', function() {
        expect(typeof myMap).to.be('function');
      });

      it('should return a new array without modifying the input array', function () {
        var arr = [1, 2, 3];
        var mapped = myMap(arr, function(num) {
          return num + 10;
        });
        expect(arr).to.contain(1, 2, 3);
      });

      it('should return a new array made from the function argument applied to each value in the array argument', function () {
        var arr = [1, 2, 3];
        var mapped = myMap(arr, function(num) {
          return num + 10;
        });
        expect(mapped).to.contain(11, 12, 13);
      });
    });

    describe('myFilter', function() {
      it('should be a function that takes an array and a function as parameters', function () {
        expect(typeof myFilter).to.be('function');
      });

      it('should return a new array without modifing the input array', function() {
        var arr = [1, 2, 3, 4];
        var filtered = myFilter(arr, isEven);
        expect(arr).to.contain(1, 2, 3, 4);
      });

      it('should return a new array with values that pass the truth test (function that was passed in). So, myFilter([1, 2, 3], isEven) should return [2]', function () {
        var arr = [1, 2, 3, 4, 5, 6];
        var filtered = myFilter(arr, isEven);
        expect(filtered).to.contain(2, 4, 6);
      });
    });

  });
});