/** @class */
class TestExecutor {

    constructor(testModules) {
        this.testModules = testModules;
    }
    
    executeTestModules() {
        this.testModules.forEach(testModule => this.executeTestModule(testModule));
    }

    /**
     * @param {TestModule} testModule 
     */
    executeTestModule(testModule) {
        TestLogger.logModuleStarting(testModule);
        currentModuleName = testModule.name;
        testModule.testList.forEach(testCase => this.executeTest(testCase));
    }

    /**
     * @param {Test} testCase 
     */
    executeTest(testCase) {
        currentTest = testCase;

        if (TestPermission.checkPermissionOn(testCase)) {
            try {
                eval(`${testCase.name}()`);
            } catch (e) {
                TestReporter.error(e);
            }
        } else {
            TestReporter.notTested(`Test type not allowed: ${currentTest.type}`);
        }
    }
}
