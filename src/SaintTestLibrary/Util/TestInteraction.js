/** @class */
class TestInteraction {

    static showExpectedResultMessage(explainExpectedResultMessage) {
        SpreadsheetApp.getUi().alert(explainExpectedResultMessage);
    }

    static askIfResultWasCorrect(resultQuestion = "The expected interaction is correct?") {
        let response = SpreadsheetApp.getUi().alert(resultQuestion, SpreadsheetApp.getUi().ButtonSet.YES_NO); //TODO:  put a test icon when this shown
        return response == SpreadsheetApp.getUi().Button.YES;
    }

}