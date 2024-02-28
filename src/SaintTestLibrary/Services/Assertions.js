function assert(result, expected, reason) {
    result == expected ? TestReporter.passed(result, expected) : TestReporter.failed(result, expected, reason); 
}

function assertNull(result, reason) {
    result == null || result == undefined ? TestReporter.passed(result, "null") : TestReporter.failed(result, "null", reason);
}

function assertNotNull(result, reason) {
    result != null || result != undefined ? TestReporter.passed(result, "Not null") : TestReporter.failed(result, "Not null", reason);
}

function explainExpectedResult(explainedExpectedResultMessage = "No interactio explaining") {
    UserInteractor.showExpectedResultMessage(explainedExpectedResultMessage);
    currentExplainedExpectedResult = explainedExpectedResultMessage;
}

function assertInteraction(customAskingForTheResult = "No interaciton asking", reason = currentExplainedExpectedResult) {
    let result = UserInteractor.askIfResultWasCorrect(customAskingForTheResult);
    assert(result, true, reason);
}