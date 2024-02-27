function PropertiesControllerTest() {
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

function PropertiesControllerTestSetup() {
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
    PropertiesControllerTestSetup();
    const sut = PropertiesScriptService;
    
    let expected = "10";
    let result = sut.get("test-property");
    
    assert(expected, result);
    PropertiesControllerTestClear()
}

function getAllPropertiesSuccessfully() {
    PropertiesControllerTestSetup();
    const sut = PropertiesScriptService;
    
    let expected = PropertiesService.getScriptProperties().getProperties();
    let result = sut.getAll();
    
    assert(expected, result);
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

    const propertyList = {
        "prop1" : "value1",
        "prop2" : "value2",
        "prop3" : "value3"
    }

    let expected = 3 + PropertiesService.getScriptProperties().getKeys().length;
    sut.setByList(propertyList);
    let resultList = PropertiesService.getScriptProperties().getProperties();

    assert(expected, resultList.length);
}

function deletePropertySuccessfully() {
    PropertiesControllerTestSetup();
    const sut = PropertiesScriptService;
    
    let expected = PropertiesService.getScriptProperties().getKeys().length - 1;
    sut.delete("test-property");
    let resultList = PropertiesService.getScriptProperties().getProperties();

    assert(expected, resultList.length);
    PropertiesControllerTestClear();
}

function deleteAllPropertiesSuccessfully() {
    let savedCurrenctProperties = PropertiesService.getScriptProperties().getProperties();
    PropertiesControllerTestSetup();
    const sut = PropertiesScriptService;
    
    let expected = 0;
    sut.deleteAll();
    let resultList = PropertiesService.getScriptProperties().getProperties();

    assert(expected, resultList.length);
    PropertiesControllerTestClear();
    PropertiesService.getScriptProperties().setProperties(savedCurrenctProperties);
}

function incrementPropertySuccessfully() {
    PropertiesControllerTestSetup();
    const sut = PropertiesScriptService;
    
    let expected = "11";
    sut.increment("test-property");
    let result = PropertiesService.getScriptProperties().getProperty("test-property");

    assert(expected, result);

    expected = "21";
    sut.incrementBy("test-property", "10");
    result = PropertiesService.getScriptProperties().getProperty("test-property");

    assert(expected, result);
    PropertiesControllerTestClear();
}

function decrementPropertySuccessfully() {
    PropertiesControllerTestSetup();
    const sut = PropertiesScriptService;
    
    let expected = "9";
    sut.increment("test-property");
    let result = PropertiesService.getScriptProperties().getProperty("test-property");

    assert(expected, result);

    expected = "-1";
    sut.incrementBy("test-property", "10");
    result = PropertiesService.getScriptProperties().getProperty("test-property");

    assert(expected, result);
    PropertiesControllerTestClear();
}

function initializeSuccessfully() {
    PropertiesControllerTestSetup();
    const sut = PropertiesScriptService;
    
    sut.initialize();
    // assertNotNull(expected, result); //TODO: Implement assertNotNull + assertType

    PropertiesControllerTestClear();
}

function logSuccessfully() {
    PropertiesControllerTestSetup();
    const sut = PropertiesScriptService;
    
    sut.log();

    assertInteraction("Do script properties are shown in the logs?", "Script properties logs didn't shown correcty in the logs");
    PropertiesControllerTestClear();
}

function displaySuccessfully() {
    PropertiesControllerTestSetup();
    const sut = PropertiesScriptService;
    
    sut.display();

    assertInteraction("Do script properties are displayed in a alert message?", "Script properties didn't display in an alert message");
    PropertiesControllerTestClear();
}

