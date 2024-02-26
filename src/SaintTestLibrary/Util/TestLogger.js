/** @class */
class TestLogger {

    static logStartTesting(fileNames) {
        Logger.log(`================================================ Starting the testing ================================================ `);
        Logger.log(` Test files provided to test: ${fileNames}`);
        Logger.log(`========================================== Number of tests ${fileNames.length} ================================================ `);
    }

    static logModuleStarting(moduleName) {
        Logger.log(`================================================ ${moduleName} ================================================ `);
    }

    static logPassedTest(testName) {
        Logger.log(`✅ Passed test | ${testName}.`);
    }

    static logFailedTest(testName, testReason) {
        Logger.log(`🟥 Failed test | ${testName} | Reason: ${testReason}`);
    }

    static logErrorTest(testName, testReason) {
        Logger.log(`❌ Error test  | ${testName} | Reason: ${testReason}`);
    }

    static logNotTestedTest(testName, testReason) {
        Logger.log(`⬜ Not tested  | ${testName} | Reason: ${testReason}`);
    }


    static logFinalTestingReport() {
        testReport.updateTestReport();
        Logger.log(`================================================ FINISHING TESTING ================================================ `)
        Logger.log(`🔢 Number of tests: ${testReport.totalNumberOfTests}
        ✅ Passed: ${testReport.nrOfTestsPassed}
        🟥 Failed: ${testReport.nrOfTestsFailed}
        ⬜ Not tested: ${testReport.nrOfTestsNotTested}
        ❌ Error: ${testReport.nrOfTestsError}
        `);
    }
}

