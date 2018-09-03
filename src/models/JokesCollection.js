module.exports = class JokesCollection {
    constructor(name) {
      this.name = name;
      this.jokes = [];
    }

    addToCollection(joke){
        return this.jokes.push(joke)
    }
  
    getAllJokes() {
      return this.jokes
    }
  }