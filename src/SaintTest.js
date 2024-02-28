TestFlags.NORMAL = true;
TestFlags.GS = true;
TestFlags.INTERACTION = false;
TestFlags.SHEET = true;

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