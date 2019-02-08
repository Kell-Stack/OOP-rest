describe("OOP-rest-jasmine", function() {
    var Calculator = require('../app/OOP-rest');
    var calculator;
  
    beforeEach(function() {
      calculator = new Calculator();
    });
  
    describe("Does program have restaurants?", function() {
      it("returns name of a restaurant", function() {
        expect(calculator.add("")).toEqual(0);
      });
      xit("returns name of a user", function() {
        expect(calculator.add("2")).toEqual(2);
      });
    });
  });
  