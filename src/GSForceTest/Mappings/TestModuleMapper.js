class TestModuleMapper {

    static mapFilesToTestModules(testFiles) {
        let testModules = [];

        testFiles.forEach(testFile => {
            const testModule = this.mapFileToTestModule(testFile);
            if (testModule != null) {
                testModules.push(testModule);
            }
        });

        if (testModules.length > 0) {
            if (testModules.length == testFiles.length) {
                TestLogger.logProgress(`All test files mapped to test modules: ${testModules.length}`);
            } else {
                TestLogger.logWarn(`Only ${testModules.length}/${testFiles.length} mapped to test modules`);
                UserInteractor.askIfToContinueTesting(`Only ${testModules.length}/${testFiles.length} mapped to test modules`);
            }
        } else {
            TestLogger.logError(`Cannot continue testing because no module mapped ${testModules.length} test modules`);
        }

        return testModules;
    }

    static mapFileToTestModule(testFile) {
        let testModule = TestModule.empty;
        try {
            testModule = eval(`${testFile}()`);
        } catch (e) {
            TestLogger.logError(`On mapping file <${testFile}> to teste module. Reason: ${e.message}`);
            return;
        }

        if (TestChecker.isTestModule(testModule, testFile)) {
            return testModule;
        } else {
            return null;
        }
    }
}