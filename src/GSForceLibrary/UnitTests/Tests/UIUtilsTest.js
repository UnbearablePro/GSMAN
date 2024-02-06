function testUIUtils() {
    let finalListOfTests = [];

    let normalTests = [
        executeRecommendWithoutError_
    ];

    let interactionTests = [
        executeErrorWithoutError_,
        executeDebugWithoutError_
    ];

    if (TestManager.flag.interactionTesting == true) {
        finalListOfTests = normalTests.concat(interactionTests);
    } else {
        finalListOfTests = normalTests;
    }
    
    return finalListOfTests;
}

function executeErrorWithoutError_() {
}

function executeDebugWithoutError_() {
    UIUtils.debug("test-message");
}

function executeRecommendWithoutError_() {
    UIUtils.recommend("test-message");
}

function executeRecommendWithoutError_() {
    UIUtils.recommend("test-message");
}


