function SheetControllerTest() {

    let listOfTests = [
        Test.createNormalTest("setValueCorrectly"),
        Test.createNormalTest("setValuesCorrectly"),
    ];

    return new TestModule(listOfTests, "SheetController");
}

class SheetControllerTestClass extends AbstractSheetService {}

function setValueCorrectly() {
    const sut = SheetControllerTestClass;
    const testSheet = TestUtils.getTestSheet();

    const expected = "test-value";
    sut.setValue(expected, 1, 1);
    const result = testSheet.getRange(1,1).getValue();

    assert(result, expected);
}

function setValuesCorrectly() {
    const sut = SheetControllerTestClass;
    const testSheet = TestUtils.getTestSheet();

    const expected = ["test-value1, test-value2, test-value3"];
    sut.setValues(expected, 1, 1);
    const result = testSheet.getRange(1,1).getValues();
    const r1 = testSheet.getRange(1,1).getValue();
    const r2 = testSheet.getRange(1,2).getValue();
    const r3 = testSheet.getRange(1,3).getValue();

    assert(result, expected);
    assert(result, [r1,r2,r3]);
}

