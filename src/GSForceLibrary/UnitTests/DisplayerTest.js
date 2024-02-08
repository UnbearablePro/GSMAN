function DisplayerTest() {
    
    let listOfTests = [
        Test.createInteractionTest(executeErrorWithoutError_),
    ];

    return TestModule(listOfTests, "UIUtils");
}

function executeErrorWithoutError_() {
    assertThat();
}

function executeDebugWithoutError_() {
    Displayer.debug("test-message");
}

function executeRecommendWithoutError_() {
    Displayer.recommend("test-message");
}


