/** @class */
class TestReporter {

    static passed(result, expected) {
        TestLogger.logPassedTest(currentTest.functionToTest);
        const testResult = new TestResult(currentModuleName, currentTest.functionToTest, result, expected, currentTest.type, TestStatus.PASSED);
        testReport.addTestResult(testResult);
    }

    static failed(result, expected, reason) {
        if (reason == null || reason == "") {
            reason = `Result is : ${result} but expected was ${expected}.`;
        }
        const testResult = new TestResult(currentModuleName, currentTest.functionToTest, result, expected, currentTest.type, TestStatus.FAILED, reason);
        TestLogger.logFailedTest(currentTest.functionToTest, reason);
        testReport.addTestResult(testResult);
    }

    static error(error, reason) {
        const testResult = new TestResult(currentModuleName, currentTest.functionToTest, "error-result", "error-expected", currentTest.type, TestStatus.ERROR, reason);
        reason = reason + "\n" + error.message;
        TestLogger.logErrorTest(currentTest.functionToTest, reason);
        testReport.addTestResult(testResult);
    }

    static notTested(reason) {
        const testResult = new TestResult(currentModuleName, currentTest.functionToTest, "error-result", "error-expected", currentTest.type, TestStatus.NOTTESTED, reason);
        TestLogger.logNotTestedTest(currentTest.functionToTest, reason);
        testReport.addTestResult(testResult);
    }

}
