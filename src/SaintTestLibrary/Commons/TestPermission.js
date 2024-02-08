class TestPermission {

    static buildTestTypePermission() {
        this.typePermissedTests = [];
        if (TestFlags.NORMAL){
            this.typePermissedTests.append(TestType.NORMAL);
        }
        if (TestFlags.GS){
            this.typePermissedTests.append(TestType.GS);
        }
        if (TestFlags.INTERACTION){
            this.typePermissedTests.append(TestType.INTERACTION);
        }
    }

    static checkPermissionOn(testCase) {
        if (this.typePermissedTests == null) {
            this.buildTestTypePermission();
        }
        if (testCase == null) {
            throw Error("No test case provided for checking permission");
        }
        let checkReponse = false;

        this.typePermissedTests.forEach(permission => {
            if (permission.includes(testCase.type)) {
                checkReponse =  true;
            }
        })

        return checkReponse;
    }
}