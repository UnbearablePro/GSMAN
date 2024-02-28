function SheetServiceTest() {

    let listOfTests = [
        Test.createNormalTest("initializeNotNull"),
        Test.createSheetTest("setValueCorrectly"),
        Test.createSheetTest("setValuesCorrectly"),
    ];

    return new TestModule(listOfTests, "SheetService");
}

class SheetServiceTestClass extends AbstractSheetService {

    static initialize() {
        this.sheet = TestUtils.getTestSheet();
    }
    
}

function initializeNotNull() {
    const sut = SheetServiceTestClass;
    const testSheet = TestUtils.getTestSheet();
}

function setValueCorrectly() {
    const sut = SheetServiceTestClass;
    const testSheet = TestUtils.getTestSheet();

    const expected = "test-value";
    sut.setValue(expected, 1, 1);
    const result = testSheet.getRange(1,1).getValue();

    assert(result, expected);
}

function setValuesCorrectly() {
    const sut = SheetServiceTestClass;
    const testSheet = TestUtils.getTestSheet();

    const expected = [["test-value1 test-value2 test-value3"]];
    sut.setValues(expected, 1, 1);
    const result = testSheet.getRange(1,1).getValues();
    const r1 = testSheet.getRange(1,1).getValue();
    const r2 = testSheet.getRange(1,2).getValue();
    const r3 = testSheet.getRange(1,3).getValue();

    assert(result, expected);
    // assert(result, [r1,r2,r3]);
}

