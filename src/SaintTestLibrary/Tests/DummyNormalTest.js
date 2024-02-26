function DummyNormalTest() {

    let listOfTests = [
        Test.createInteractionTest("executeMo")
    ];

    return new TestModule(listOfTests, "DummyTest");
}

function executeMo() {
    assert(1,2);
}

function executeDebugWithoutError_() {
    Displayer.debug("test-message");
}

function executeRecommendWithoutError_() {
    Displayer.recommend("test-message");
}


