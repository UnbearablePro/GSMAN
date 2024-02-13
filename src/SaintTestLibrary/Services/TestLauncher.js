/** @class */
class TestLauncher {

    static startTestFromFile(testFiles) {
        TestLogger.logStartTesting();
        TestExecutor.executeTestFiles(testFiles);
        TestLogger.logFinalTestingReport(testReport);
    }

    static startFromCustomTestModule(testModule) {
        TestLogger.logStartTesting();
        TestExecutor.executeTestModule(testModule)
        TestLogger.logFinalTestingReport(testReport);
    }


}


