class TestLogger {

    static logBigStatus(status) {
        Logger.log(`================================================ ${status} ================================================ `);
    }

    static logProgress(message, icon = "🧪") {
        Logger.log(`${icon} TESTING PROGRESS: ${message}`);
    }

    static logCheck(message) {
        Logger.log(`👆🏻  TESTING INTERACTION: ${message}`);
    }
    
    static logError(message) {
        Logger.log(`🚨 TESTING ERROR: ${message}`);
        throw Error(message);
    }

    static logWarn(message) {
        Logger.log(`🟠 TESTING WARNING: ${message}`);
    }

    static logDebug(message) {
        Logger.log(`🐛 TESTING DEBUG: ${message}`);
    }

    static logStartBuildingPermissions() {
        this.logBigStatus(`Building test permissions`);
    }

    static logStartChecking() {
        this.logBigStatus(`Check files for testing`);
    }

    static logStartBuildingFiles(fileNames) {
        this.logBigStatus(`Building ${fileNames.length} files to test modules`);
    }

    

    /**
     * @param {TestModule} module 
     */
    static logModuleStarting(module) {
        this.logBigStatus(`${module.name} | ${module.testList.length}`);
    }

    static logPassedTest(testName) {
        testName = this.getSpacedTestName(testName);
        Logger.log(`✅ Passed test | ${testName}.`);
    }

    static logFailedTest(testName, testReason) {
        testName = this.getSpacedTestName(testName);
        Logger.log(`🟦 Failed test | ${testName} | Reason: ${testReason}`);
    }

    static logErrorTest(testName, testReason) {
        testName = this.getSpacedTestName(testName);
        Logger.log(`🟥 Error test  | ${testName} | Reason: ${testReason}`);
    }

    static logNotTestedTest(testName, testReason) {
        testName = this.getSpacedTestName(testName);
        Logger.log(`⬜ Not tested  | ${testName} | Reason: ${testReason}`);
    }

    static getSpacedTestName(testName) {
        if (testName.length < 60) {
            const spaceToAdd = 60 - testName.length;
            return testName + ' '.repeat(spaceToAdd);
        }
    } 


    static logFinalTestingReport() {
        testRecord.updateTestRecord();
        Logger.log(`================================================ FINISHING TESTING ================================================ `)
        Logger.log(`🔢 Number of tests: ${testRecord.totalNumberOfTests}
        ✅ Passed: ${testRecord.nrOfTestsPassed}
        🟦 Failed: ${testRecord.nrOfTestsFailed}
        ⬜ Not tested: ${testRecord.nrOfTestsNotTested}
        🟥 Error: ${testRecord.nrOfTestsError}
        `);
    }
}

