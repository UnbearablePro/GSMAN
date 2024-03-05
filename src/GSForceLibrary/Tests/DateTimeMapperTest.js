function DateTimeMapperTest() {
    let listOfTests = [
        Test.createNormalTest("handleErrorActively"),
    ];
    return new TestModule(listOfTests, "DateTimeMapper");
}

function testJSDateToLxuonDate() {
    let expected = DateTime.toDay();
}