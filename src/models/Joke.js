module.exports = class Joke {
  constructor(name) {
    this.name = name;
    this.type = "dad joke";
    this.rating = 100;
    this.description = ""
  }

  isDadJoke() {
    return (this.rating <= 100 ?  false :  true);
  }
}