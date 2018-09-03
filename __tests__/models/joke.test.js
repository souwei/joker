var expect = require("chai").expect;
var Joke = require("../../src/models/Joke")
// MODEL TESTS
describe("Joke", () => {
    let joke = new Joke("funny one liner");

    it("should have a joke name", () => {
      expect(joke.name).to.equal("funny one liner");
    });
  
    it("should have a default joke rating of 100", () => {
      expect(joke.rating).to.equal(100);
    });
  
    it("is not a dad joke", () => {
      expect(joke.isDadJoke()).to.be.false
    });

    it("should have a joke description", () => {
      expect(joke.description).to.be.a('string')
    });
  });