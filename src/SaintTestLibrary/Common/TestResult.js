class TestResult {

    constructor(testModuleName, testCaseName, result, expected, type, status, reason) {
        this.testModuleName = testModuleName;
        this.testCaseName = testCaseName;
        this.result = result;
        this.expected = expected;
        this.type = type;
        this.status = status;
        this.reason = reason;
    };

}