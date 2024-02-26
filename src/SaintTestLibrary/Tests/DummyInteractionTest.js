function DummyInteractionTest() {

    let listOfTests = [
        Test.createInteractionTest("executeInteractionTest")
    ];

    return new TestModule(listOfTests, "DummyTest");
}

function executeInteractionTest() {
    let customMessage = "Custom message to see";
    explainExpectedResult("See a custom message");
    SpreadsheetApp.getUi().alert(customMessage);
    assertInteraction("Did you saw a custom message?", "No message appeared");
}


