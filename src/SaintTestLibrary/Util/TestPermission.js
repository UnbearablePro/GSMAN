class TestPermission {

    static buildTestTypePermission() {
        this.typePermissedTests = [];

        for (const flag in TestFlags) {
            if (TestFlags.hasOwnProperty(flag) && TestFlags[flag]) {
                this.typePermissedTests.push(TestType[flag]);
            }
        }

        TestLogger.logProgress(`Test permissions builded with permissions: ${this.typePermissedTests}`);
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

    static setAllPermissionOn() {
        for (const flag in TestFlags) {
            TestFlags[flag] = true;
        }
    }

    static setAllPermissionWithout(permisionDenied) {
        this.setAllPermissionOn()
        for (const flag in permisionDenied) {
            TestFlags[flag] = false;
        }
    }
}