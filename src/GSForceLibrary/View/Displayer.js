/**
 * Displayer provides functionality to manage message displayers.
 */
class Displayer extends AbstractHtmlDisplayer {

  constructor() {
    super();
    throw new Error("Displayer object cannot be created because it has only static fields.");
  }

  static initialize() {
    if (ui == null) {
      ui = SpreadsheetApp.getUi();
    }
  }

  /**
   * The `debug` function logs a debug message and displays an alert with the message.
   * @param {string} [message="no message"] - The `message` parameter is an optional parameter that represents the
   * debug message to be logged and displayed in the alert. If no message is provided, the default
   * value is set to "no message".
   */
  static debug(message = "no message") {
    this.initialize();
    Logger.log(`🐞 DEBUG ${message}`);
    ui.alert("🐞 DEBUG", message, ui.ButtonSet.OK);
  }
  
  /**
   * The function "recommend" logs a message and displays a toast notification with the message.
   * @param {string} [message="no message"] - The `message` parameter is a string that represents the
   * recommendation message that you want to display.
   * @param [timeShown=8] - The parameter "timeShown" represents the duration in seconds for which the
   * recommendation message will be displayed as a toast notification.
   */
  static recommend(message = "no message", timeShown = 8) {
    Logger.log(`💡 Recomandare ${message}.`);
    SpreadSheetService.getActiveSpreadSheet().toast(message, "💡 Recomandare", timeShown);
  }

  /**
   * The `system` function logs a message and displays a toast notification with the message and a
   * system icon for a specified duration.
   * @param {string} [message="no message"] - The message parameter is a string that represents the message you
   * want to display in the system log and as a toast notification. By default, if no message is
   * provided, it will be set to "no message".
   * @param {number} [timeShown=8] - The parameter "timeShown" represents the duration in seconds for which the
   * system message will be displayed as a toast notification.
   */
  static system(message = "no message", timeShown = 8 , icon = "⚙️") {
    Logger.log(`${icon} System ${message}.`);
    SpreadSheetService.getActiveSpreadSheet().toast(message, `${icon} System`, timeShown);
  }

  /**
   * The function "warning" logs a warning message and displays an alert with the same message.
   * @param {string} [message="no message"] - The `message` parameter is an optional parameter that allows you to
   * specify a custom warning message. If no message is provided, the default message "no message" will
   * be used.
   */
  static warning(message = "no message") {
    this.initialize();
    Logger.log(`⚠️: Warning ${message}.`);
    ui.alert("⚠️: Warning", message, ui.ButtonSet.OK)
  }

  /**
   * The function `inputField` prompts the user for input and returns the user's response if they click
   * "Yes", otherwise it returns undefined.
   * @param {string} [title] - The title parameter is a string that represents the title of the input field
   * prompt. It is optional and can be left empty if no title is needed.
   * @param {string} [message="no message"] - The "message" parameter is a string that represents the message or
   * prompt that will be displayed to the user in the input field. It is an optional parameter, and if
   * no value is provided, the default message will be "no message".
   * @returns {string|undefined} the response text from the input field if the user selects "Yes" in the prompt. If the
   * user selects "No" or cancels the prompt, the function returns undefined.
   */
  static inputField(title = "", message = "no message") {
    this.initialize();
    const response = ui.prompt(title, message, ui.ButtonSet.YES_NO);
    if (response.getSelectedButton() == ui.Button.YES) {
      Logger.log(`Input field initialize with title""${title}" message""${message}" response:"${response.getResponseText()}".`);

      return response.getResponseText();
    }

    return undefined;
  }

  /**
   * The function "ask" displays a message to the user and returns true if the user clicks "Yes"
   * and false if the user clicks "No".
   * @param {string} [question="no message"] - The "message" parameter is a string that represents the ask or
   * prompt that will be displayed to the user. It is an optional parameter, and if no value is
   * provided, the default message will be "no message".
   * @returns {boolean} a boolean value. If the user responds with "Yes" to the ask, it will return true.
   * Otherwise, it will return false.
   */
  static ask(question = "no message") {
    this.initialize();

    let response = ui.alert(question, ui.ButtonSet.YES_NO);
    Logger.log(`❓ Ask the User: ${question}. Response: ${response == ui.Button.YES}`);

    return response == ui.Button.YES;
  }

  static problem(message = "no message", timeShown = 8) {
    SpreadSheetService.getActiveSpreadSheet().toast(message, "🟠", timeShown);
    Logger.log(`🟠 Problem: ${message}`);
  }

  
  /**
   * The `quote` function displays a toast message with a given message and time duration, and logs the
   * message as a quote.
   * @param {string} [message="no message"] - The message parameter is a string that represents the quote you want
   * to display. It is optional and has a default value of "no message" if no value is provided.
   * @param [timeShown=8] - The parameter "timeShown" represents the duration in seconds for which the
   * toast message will be displayed on the screen.
   */
  static quote(message = "no message", timeShown = 8) {
    SpreadSheetService.getActiveSpreadSheet().toast(message, "💡", timeShown);
    Logger.log(`💡 Quote: ${message}. Shown successfully`);
  }

  /**
   * The `complete` function displays a toast message with a thumbs-up emoji and logs a success
   * message.
   * @param {string} [message="no message"] - The message parameter is a string that represents the message you
   * want to display in the toast notification. It is optional and has a default value of "no message"
   * if no value is provided.
   * @param {number} [timeShown=5] - The timeShown parameter is the duration in seconds for which the toast
   * message will be displayed on the screen.
   */
  static complete(message = "no message", timeShown = 5) {
    SpreadSheetService.getActiveSpreadSheet().toast(message, "👍", timeShown);
    Logger.log(`👍 Complete: ${message}. Shown successfully`);
  }
}

// ❌: ERROR
// ⚠️: Warning
// ⏰: Something that is time sensitive
// 💡: An idea or a recommendation
// 🎉: An accomplishment
// 👍: Thumbs up
// ⚙️: Settings related
// 🐞: Debug