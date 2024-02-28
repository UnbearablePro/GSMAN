/** @class */
class UserInteractor {

    static showExpectedResultMessage(explainExpectedResultMessage) {
        SpreadsheetApp.getUi().alert(explainExpectedResultMessage);
    }

    static askIfToContinueTesting(message) {
        TestLogger.logCheck('Responde to continue!');
        const ui = SpreadsheetApp.getUi();

        let response = ui.alert("⁉" + message, ui.ButtonSet.YES_NO);
        if (response != ui.Button.YES) {
            throw Error(message);
        }
    }

    static askIfResultWasCorrect(resultQuestion = "The expected interaction is correct?") {
        let response = SpreadsheetApp.getUi().alert(resultQuestion, SpreadsheetApp.getUi().ButtonSet.YES_NO); //TODO:  put a test icon when this shown
        return response == SpreadsheetApp.getUi().Button.YES;
    }

}