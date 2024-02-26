class TestPermission {

    static buildTestTypePermission() {
        this.typePermissedTests = [];
        if (TestFlags.NORMAL){
            this.typePermissedTests.push(TestType.NORMAL);
        }
        if (TestFlags.GS){
            this.typePermissedTests.push(TestType.GS);
        }
        if (TestFlags.INTERACTION){
            this.typePermissedTests.push(TestType.INTERACTION);
        }
    }

    static checkPermissionOn(testCase) {
        if (this.typePermissedTests == null) {
            this.buildTestTypePermission();
        }
        if (testCase == null) {
            throw Error("No test case provided for checking permission");
        }

        return this.typePermissedTests.toString().includes(testCase.type);
    }
}