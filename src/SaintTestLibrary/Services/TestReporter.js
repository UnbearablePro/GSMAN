/** @class */
class TestReporter {

    static passed(result, expected) {
        TestLogger.logPassedTest(currentTest.name);
        const testResult = new TestResult(currentModuleName, currentTest.name, result, expected, currentTest.type, TestStatus.PASSED);
        testRecord.addTestResult(testResult);
    }

    static failed(result, expected, reason) {
        if (reason == null || reason == "") {
            reason = `Result is : ${result} but expected was ${expected}.`;
        }
        const testResult = new TestResult(currentModuleName, currentTest.name, result, expected, currentTest.type, TestStatus.FAILED, reason);
        TestLogger.logFailedTest(currentTest.name, reason);
        testRecord.addTestResult(testResult);
    }

    static error(error, reason) {
        const testResult = new TestResult(currentModuleName, currentTest.name, "error-result", "error-expected", currentTest.type, TestStatus.ERROR, reason);
        reason = reason + "\n" + error.message;
        TestLogger.logErrorTest(currentTest.name, reason);
        testRecord.addTestResult(testResult);
    }

    static notTested(reason) {
        const testResult = new TestResult(currentModuleName, currentTest.name, "error-result", "error-expected", currentTest.type, TestStatus.NOTTESTED, reason);
        // TestLogger.logNotTestedTest(currentTest.name, reason);
        testRecord.addTestResult(testResult);
    }

}
