TestFlags.NORMAL = true;
TestFlags.GS = true;
TestFlags.INTERACTION = false;
TestFlags.SHEET = true;

/** @type {Test} */
var currentTest = null;
var currentModuleName = null;
var currentExplainedExpectedResult = null;
/** @type {TestRecord} */
var testRecord = new TestRecord();

const TESTGROUND_SHEETNAME = "TestGround";

function startTests() {
    TestLauncher.startTestingFrom(filesToTest);
}

let filesToTest = 
[   
    // "NoFunctionTest",
    // "DataUtilsTest",
    "SheetServiceTest",
    // "DisplayerTest",
    // "ErrorHandlerTest",
    // "HtmlControllerTest",
    // "PropertiesServiceTest"
];