function PropertiesServiceTest() {
    let listOfTests = [
        Test.createNormalTest("getPropertySuccessfully"),
        Test.createNormalTest("getAllPropertiesSuccessfully"),
        Test.createNormalTest("setListPropertiesSuccessfully"),
        Test.createNormalTest("setPropertySuccessfully"),
        Test.createNormalTest("deletePropertySuccessfully"),
        Test.createNormalTest("deleteAllPropertiesSuccessfully"),
        Test.createNormalTest("incrementPropertySuccessfully"),
        Test.createNormalTest("decrementPropertySuccessfully"),
        Test.createNormalTest("initializeSuccessfully"),
        Test.createInteractionTest("logSuccessfully"),
        Test.createInteractionTest("displaySuccessfully")
    ];
    return new TestModule(listOfTests, "PropertiesService");
}

function PropertiesServiceTestSetup() {
    PropertiesService.getScriptProperties().setProperty("test-property", "10");
    PropertiesService.getScriptProperties().setProperty("test-property2", "Luca");
    PropertiesService.getDocumentProperties().setProperty("test-property3", "132f1332");
}

function PropertiesControllerTestClear() {
    PropertiesService.getScriptProperties().deleteProperty("test-property");
    PropertiesService.getScriptProperties().deleteProperty("test-property2");
    PropertiesService.getDocumentProperties().deleteProperty("test-property3");
}

function getPropertySuccessfully() {
    PropertiesServiceTestSetup();
    const sut = PropertiesScriptService;
    
    let expected = "10";
    let result = sut.get("test-property");
    
    assert(expected, result);
    PropertiesControllerTestClear()
}

function getAllPropertiesSuccessfully() {
    PropertiesServiceTestSetup();
    const sut = PropertiesScriptService;
    
    let expected = PropertiesService.getScriptProperties().getProperties();
    let result = sut.getAll();
    
    assert(expected.length, result.length);
    
    PropertiesControllerTestClear();
}

function setPropertySuccessfully() {
    const sut = PropertiesScriptService;

    let expected = "test-value";
    sut.set("test-property", expected);
    let result = PropertiesService.getScriptProperties().getProperty("test-property");

    assert(expected, result);
}

function setListPropertiesSuccessfully() {
    const sut = PropertiesScriptService;

    const expected = {
        "prop1" : "value1",
        "prop2" : "value2",
        "prop3" : "value3"
    }

    sut.setByList(expected);
    let resultList = PropertiesService.getScriptProperties().getProperties();

    assert(expected.prop1, resultList.prop1);
    assert(expected.prop2, resultList.prop2);
    assert(expected.prop2, resultList.prop2);
}

function deletePropertySuccessfully() {
    PropertiesServiceTestSetup();
    const sut = PropertiesScriptService;
    
    sut.delete("test-property");
    let resultList = PropertiesService.getScriptProperties().getProperties();

    assertNull(resultList["test-property"]);
    PropertiesControllerTestClear();
}

function deleteAllPropertiesSuccessfully() {
    let savedCurrenctProperties = PropertiesService.getScriptProperties().getProperties();
    PropertiesServiceTestSetup();
    const sut = PropertiesScriptService;
    
    sut.deleteAll();
    let resultList = PropertiesService.getScriptProperties().getProperties();

    assertNull(resultList.length);
    PropertiesControllerTestClear();
    PropertiesService.getScriptProperties().setProperties(savedCurrenctProperties);
}

function incrementPropertySuccessfully() {
    PropertiesServiceTestSetup();
    const sut = PropertiesScriptService;
    
    let expected = "11.0";
    sut.increment("test-property");
    let result = PropertiesService.getScriptProperties().getProperty("test-property");

    assert(expected, result);

    expected = "21.0";
    sut.incrementBy("test-property", "10");
    result = PropertiesService.getScriptProperties().getProperty("test-property");

    assert(expected, result);
    PropertiesControllerTestClear();
}

function decrementPropertySuccessfully() {
    PropertiesServiceTestSetup();
    const sut = PropertiesScriptService;
    
    let expected = "9.0";
    sut.decrement("test-property");
    let result = PropertiesService.getScriptProperties().getProperty("test-property");

    assert(expected, result);

    expected = "-1.0";
    sut.decrementBy("test-property", "10.0");
    result = PropertiesService.getScriptProperties().getProperty("test-property");

    assert(expected, result);
    PropertiesControllerTestClear();
}

function initializeSuccessfully() {
    PropertiesServiceTestSetup();
    const sut = PropertiesScriptService;
    
    sut.initialize();
    assertNotNull(sut.service);

    PropertiesControllerTestClear();
}

function logSuccessfully() {
    PropertiesServiceTestSetup();
    const sut = PropertiesScriptService;
    
    sut.log();

    assertInteraction("Do script properties are shown in the logs?", "Script properties logs didn't shown correcty in the logs");
    PropertiesControllerTestClear();
}

function displaySuccessfully() {
    PropertiesServiceTestSetup();
    const sut = PropertiesScriptService;
    
    sut.display();

    assertInteraction("Do script properties are displayed in a alert message?", "Script properties didn't display in an alert message");
    PropertiesControllerTestClear();
}

function addTwoStrings(str1, str2) {
    const num1 = parseInt(str1);
    const num2 = parseInt(str2);

    if (!isNaN(num1) && !isNaN(num2)) {
        return num1 + num2;
    } else {
        throw new Error(`The two string provided for substract are not convertible to number format. String: ${num1} / ${num2}`)
    }
}

function subtractTwoStrings(str1, str2) {
    const num1 = parseInt(str1);
    const num2 = parseInt(str2);

    if (!isNaN(num1) && !isNaN(num2)) {
        return num1 - num2;
    } else {
        throw new Error(`The two string provided for substract are not convertible to number format. String: ${num1} / ${num2}`)
    }
}
