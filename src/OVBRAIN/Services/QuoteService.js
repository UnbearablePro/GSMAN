class QuoteService {

  static displayRandomMotivationalQuote() {
    let randomId = MathUtils.generateRandom(Quotes.length);
    Displayer.quote(Quotes[randomId]);
  }

  static start() {
    TriggerOVBService.startQuotaCycle();
  }

  static stop() {
    TriggerOVBService.stopQuotaCycle();
  }
}