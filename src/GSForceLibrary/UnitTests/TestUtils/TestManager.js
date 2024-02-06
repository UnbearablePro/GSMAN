class TestManager {

    static startAllTest(listOfModulesToTest) {
        TestUtils.initialize();

        // Start all tests
        listOfModulesToTest.forEach(moduleToTest => {
            let moduleName = moduleToTest.name.replace(/^test/, '');
            TestUtils.logModuleStarting(moduleName);
            let listOfTests = moduleToTest();
            TestUtils.testListOfTests(moduleName, listOfTests);
        })

        TestUtils.logTestsReport()
    }

    static startAllTestWithoutInteraction(listOfModulesToTest) {
        TestUtils.initialize();
        TestManager.flag.interactionTesting = false;

        listOfModulesToTest.forEach(moduleToTest => {
            let moduleName = moduleToTest.name.replace(/^test/, '');
            TestUtils.logModuleStarting(moduleName);
            moduleToTest();
        })

        TestUtils.logTestsReport()
    }
}


