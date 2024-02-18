// /** @class */
// class TestReport {

//     constructor(testsPassed = 0, testsFailed = 0, testsError = 0, notTested = 0){
//         this.nrOfTestsPassed = testsPassed;
//         this.nrOfTestsFailed = testsFailed;
//         this.nrOfTestsError = testsError;
//         this.nrOfTestsNotTested = notTested;
//         this.totalNumberOfTests =  this.nrOfTestsPassed + this.nrOfTestsFailed + this.nrOfTestsError + this.nrOfTestsNotTested;
//     }

//     incrementPassedTests(number = 1) {
//         this.nrOfTestsPassed = this.nrOfTestsPassed + number;
//     }

//     incrementFailedTests(number = 1) {
//         this.nrOfTestsFailed = this.nrOfTestsFailed + number;
//     }

//     incrementErrorTests(number = 1) {
//         this.nrOfTestsError = this.nrOfTestsError + number;
//     }

//     incrementNotTestedTests(number = 1) {
//         this.nrOfTestsNotTested = this.nrOfTestsNotTested + number;
//     }

//     passed(testCase) {       
//         this.incrementPassedTests();
//         TestLogger.logPassedTest(testCase.name);
//     }

//     failed(testCase, reason) {
//         this.incrementFailedTests();
//         TestLogger.logPassedTest(testCase.name, reason);
//     }

//     error(testCase, error) {
//         this.incrementErrorTests();
//         TestLogger.logPassedTest(testCase.name, error);
//     }

//     notTested(testCase, error) {
//         this.incrementNotTestedTests();
//         TestLogger.logNotTestedTest();
//     }

//     getTotalNumberOfTests() {
//         this.totalNumberOfTests =  this.nrOfTestsPassed + this.nrOfTestsFailed + this.nrOfTestsError + this.nrOfTestsNotTested;
//         return this.totalNumberOfTests;
//     }

// }
