class TestExecutor {

    static executeTestFiles(testFiles) {
        let listOfTestModules = this.createTestModulesFromFiles(testFiles);
        this.executeTestModules(listOfTestModules);
    }

    static createTestModulesFromFiles(testFiles) {
        let listOfTestModules = [];
        testFiles.forEach(testFile => {
            listOfTestModules.append(testFile());
        });
        return listOfTestModules;
    }

    static executeTestModules(listOfTestModules) {
        listOfTestModules.forEach(testModule => this.executeTestModules());
    }

    static executeTestModule(testModule) {
        TestLogger.logStartTesting(testModule.name);   
        testModule.listOfTests.forEach(test => executeTest(testCase));
    }

    static executeTest(testCase) {
        let permission = TestPermission.checkPermissionOn(testCase);
        if (permission == true) {
            currentTest = testCase;

            testCase.functionToTest();// FIXME: Most probably cannot launch this.
        } else {
            testReport.notTested(testCase);
        }
    }  
}
