/** @class */
class TestLogger {

    static logStartTesting() {

    }

    static logModuleStarting(moduleName) {
        Logger.log(`================================================ ${moduleName} ================================================ `)
    }

    static logPassedTest(testName) {
        Logger.log(`✅ Passed test | ${testName}`);
    }

    static logFailedTest(testName, testReason) {
        Logger.log(`🟥 Failed test | ${testName} | Reason: ${testReason}`);
    }

    static logErrorTest(testName, testReason) {
        Logger.log(`❌ Error test  | ${testName} | Reason: ${testReason}`);
    }

    static logNotTestedTest(testName) {
        Logger.log(`⬜ Not tested  | ${testName}`);
    }


    static logFinalTestingReport(testReport) {
        Logger.log(`================================================ FINISHING TESTING ================================================ `)
        Logger.log(`
        🔢 Number of tests: ${testReport.getNrOfTests()}
        ✅ Passed: ${testReport.nrOfTests}
        🟥 Failed: ${testReport.nr}
        ⬜ Not tested: ${testReport.nrNotTestedTests}
        ❌ Error: ${testReport.nrErrorTests}
        `);
    }
}

