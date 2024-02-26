/** @class */
class TestLauncher {

    static startTestingFrom(testFiles) {
        testFiles = TestChecker.checkTestFiles(testFiles);
        TestLogger.logStartTesting(testFiles);
        TestExecutor.executeTestFiles(testFiles);
        TestLogger.logFinalTestingReport();
    }

}


