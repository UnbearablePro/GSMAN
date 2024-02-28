class TestLauncher {

    static startTestingFrom(testFiles) {
        TestLogger.logStartBuildingPermissions();
        TestPermission.buildTestTypePermission();

        TestLogger.logStartChecking();
        TestChecker.checkTestFiles(testFiles);

        TestLogger.logStartBuildingFiles(testFiles);
        const testModules = TestModuleMapper.mapFilesToTestModules(testFiles);

        if(TestFlags.SHEET) {
            TestUtils.createTestSheet();
        }

        const testExecutor = new TestExecutor(testModules);
        try{
            testExecutor.executeTestModules();
        }
        finally {
            TestUtils.deleteTestSheet();
        };
    }

}


