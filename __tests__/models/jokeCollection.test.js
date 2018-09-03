var expect = require("chai").expect;
var JokesCollection = require("../../src/models/JokesCollection")
var Joke = require("../../src/models/Joke")

describe("Jokes Collection", () => {
    let jokesCollection = new JokesCollection("One liners");

    it("should have a jokes collection name", () => {
      expect(jokesCollection.name).to.equal("One liners");
    });

    it("can add a joke to its collection", () => {
        let joke = new Joke("funny one liner")
        expect(jokesCollection.addToCollection(joke)).to.equal(1);
    })
  
    it("will return an array of jokes", () => {
        jokesCollection.addToCollection(new Joke("very funny"));
        jokesCollection.addToCollection(new Joke("hillarious"));
        expect(jokesCollection.getAllJokes()).to.be.an('array');
        expect(jokesCollection.getAllJokes().length).to.equal(3);
    });
  
  });