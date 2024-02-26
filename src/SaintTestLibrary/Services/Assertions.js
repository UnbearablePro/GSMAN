function assert(result, expected, reason) {
    result == expected ? TestReporter.passed(result, expected) : TestReporter.failed(result, expected, reason); 
}

function explainExpectedResult(explainedExpectedResultMessage = "No interactio explaining") {
    TestInteraction.showExpectedResultMessage(explainedExpectedResultMessage);
    currentExplainedExpectedResult = explainedExpectedResultMessage;
}

function assertInteraction(customAskingForTheResult = "No interaciton asking", reason = currentExplainedExpectedResult) {
    let result = TestInteraction.askIfResultWasCorrect(customAskingForTheResult);
    assert(result, true, reason);
}