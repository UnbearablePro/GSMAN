function DisplayerTest() {
    let listOfTests = [
        Test.createInteractionTest("showDebugAlertWithoutError"),
        Test.createInteractionTest("executeWarningWithoutError"),
    ];
    return new TestModule(listOfTests, "Displayer");
}

function showDebugAlertWithoutError() {
    Displayer.debug("Test debug");
    assertInteraction("Do debug alert showned?", "No debug alert showned");
}

function executeWarningWithoutError() {
    Displayer.warning("Test warning");
    assertInteraction("Do warning alert showned?", "No warning alert showned");
}

function executeRecommendWithoutError_() {
    Displayer.debug("Test debug");
    assertInteraction("Do debug alert showned?", "No debug alert showned");
}


