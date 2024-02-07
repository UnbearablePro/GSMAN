class TestUtils {

  static initialize() {
    this.testsNumber = 0;
    this.testsFailed = 0;
    this.testsPassed = 0;
  }

  static logModuleStarting(target) {
    Logger.log(`================================================ ${target} ================================================ `)
  }

  static passed(target, testCase) {
    Logger.log(`✅ Passed test | ${target} : ${testCase}`);
    this.testsPassed += 1;
  }
  static failed(target, testCase, reason) {
    Logger.log(`🟥 Failed test | ${target} : ${testCase} | Reason: ${reason}`);
    this.testsFailed = 0;
  }
  /**
   * 
   * @params {any} result :
   * @params {any} expected :
   * @params {string} message : optional
   */
  static assert(result, expected, message) {
    if (result != expected) {
      if (message === undefined || message == "") {
        throw new Error(`Expected ${expected} but was ${result}`);
      }
      throw new Error(`Expected ${expected} but was ${result}.Test case: ${message}`);
    }
  }


  static test(testedFunction, target, testCase) {
    this.testsNumber += 1;
    try {
      testedFunction();
      this.passed(target, testCase);
    } catch (error) {
      this.failed(target, testCase, error);
    }
  }

  /** 
   * @params {string} target : The target function name
   * @params listOfTests: List of function to be call and tested;
  */
  static testListOfTests(target, listOfTests) {
    listOfTests.forEach(funcToTest => {
      this.test(funcToTest, target, funcToTest.name);
    })
  }

  static logTestsReport() {
    Logger.log(`================================================ FINISHING TESTING ================================================ `)
    Logger.log(`RESULTS - 🔢 Number of tests: ${this.testsNumber} | ✅ Passed: ${this.testsPassed} | 🟥 Failed: ${this.testsFailed}`);
  }
}