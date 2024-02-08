function assert(result, expected, reason) {
    if (result == expected) {
        testReport.passed(currentTest);
    } else {
        if (reason == null || reason == "") {
            reason = `Result is : ${result} but expected was ${expected}.`;
        }
        testReport.failed(currentTest, reason);
    }
}

function assertInteraction(sut, explainedExpectedResultMessage, customAskingForTheResult = undefined,  ...params) {
    TestInteraction.showExpectedResultMessage(explainedExpectedResultMessage);
    try {
        sut(); // TODO: how to implement the params in sut
    } catch (e) {
        testReport.error(currentTest, e);
    }
    let result = TestInteraction.askIfResultWasCorrect(customAskingForTheResult);

    assert(result, true, explainedExpectedResultMessage);
}