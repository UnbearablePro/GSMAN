class MotivationalController {

  static displayRandomMotivationalQuote() {

    let quotes = [
      "Quote Nr1",
      "Quote Nr2",
      "Quote Nr3"
    ];

    let randomId = MathUtils.generateRandom(quotes.length);
    UIUtils.quote(quotes[randomId]);
    
  }
}