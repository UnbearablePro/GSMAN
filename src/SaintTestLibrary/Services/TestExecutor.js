/** @class */
class TestExecutor {

    static executeTestFiles(testFiles) {
        let listOfTestModules = this.createTestModulesFromFiles(testFiles);
        this.executeTestModules(listOfTestModules);
    }

    static createTestModulesFromFiles(testFiles) {
        let listOfTestModules = [];
        testFiles.forEach(testFile => {
            listOfTestModules.push(testFile());
        });
        return listOfTestModules;
    }

    static executeTestModules(listOfTestModules) {
        listOfTestModules.forEach(testModule => this.executeTestModules(testModule));
    }

    static executeTestModule(testModule) {
        TestLogger.logModuleStarting(testModule.name);   
        testModule.listOfTests.forEach(testCase => this.executeTest(testCase));
    }

    static executeTest(testCase) {
        let permission = TestPermission.checkPermissionOn(testCase);
        if (permission == true) {
            let currentTest = testCase; // TODO: See why like this?
            testCase.functionToTest();// FIXME: Most probably cannot launch this.
        } else {
            testReport.notTested(testCase);
        }
    }  
}
