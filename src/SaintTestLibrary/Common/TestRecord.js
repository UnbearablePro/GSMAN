class TestRecord {

    constructor(testResultList = []){
        this.testResultList = [];
        this.testResultList = testResultList;

        this.nrOfTestsPassed = 0;
        this.nrOfTestsFailed = 0;
        this.nrOfTestsError = 0;
        this.nrOfTestsNotTested = 0;
        this.totalNumberOfTests = testResultList.length;

        this.updateRecordOnTestResultList(testResultList);
    }

    updateTestRecord() {
        this.updateRecordOnTestResultList(this.testResultList);
    };

    updateRecordOnTestResultList(testResultList) {
        testResultList.forEach(testResult => this.updateRecordOnTestResult(testResult))

    }

    addTestModule() {
        
    }

    addTestResult(testResult) {
        this.testResultList.push(testResult);
    }

    updateRecordOnTestResult(testResult) {
        this.updateTotalNumberOfTests();
        
        if (testResult.status == TestStatus.PASSED) {this.incrementPassedTests(); return;}
        if (testResult.status == TestStatus.FAILED) {this.incrementFailedTests(); return;}
        if (testResult.status == TestStatus.ERROR) {this.incrementErrorTests(); return;}
        if (testResult.status == TestStatus.NOTTESTED) {this.incrementNotTestedTests(); return;}
    }

    updateTotalNumberOfTests() {
        this.totalNumberOfTests = this.testResultList.length;
    }

    incrementPassedTests(number = 1) {
        this.nrOfTestsPassed = this.nrOfTestsPassed + number;
    }

    incrementFailedTests(number = 1) {
        this.nrOfTestsFailed = this.nrOfTestsFailed + number;
    }

    incrementErrorTests(number = 1) {
        this.nrOfTestsError = this.nrOfTestsError + number;
    }

    incrementNotTestedTests(number = 1) {
        this.nrOfTestsNotTested = this.nrOfTestsNotTested + number;
    }
    
}