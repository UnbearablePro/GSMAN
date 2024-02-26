/** @class */
class TestExecutor {

    static executeTestFiles(testFiles) {
        let listOfTestModules = [];
        listOfTestModules = this.createTestModulesFromFiles(testFiles);
        this.executeTestModules(listOfTestModules);
    }

    static createTestModulesFromFiles(testFiles) {
        let listOfTestModules = [];
        testFiles.forEach(testFile => {
            let testModule = eval(`${testFile}()`);
            listOfTestModules.push(testModule);
        });
        return listOfTestModules;
    }

    static executeTestModules(listOfTestModules) {
        listOfTestModules.forEach(testModule => this.executeTestModule(testModule))
    }

    static executeTestModule(testModule) {
        TestLogger.logModuleStarting(testModule.name);
        currentModuleName = testModule.name;
        testModule.testList.forEach(testCase => this.executeTest(testCase));
    }

    static executeTest(testCase) {
        currentTest = testCase;
        let permission = TestPermission.checkPermissionOn(testCase);
        if (permission == true) {
            let testFunctionName = testCase.functionToTest;
            try{
                eval(`${testFunctionName}()`);
            } catch(e) {
                TestReporter.error(e);
            }
        } else {
            TestReporter.notTested(`Test type not allowed: ${currentTest.type}`);
        }
    }
}
