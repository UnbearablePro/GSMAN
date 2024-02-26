TestFlags.NORMAL = true;
TestFlags.GS = true;
TestFlags.INTERACTION = false;

function startTests() {
    TestLauncher.startTestingFrom(filesToTest);
}

let filesToTest = 
[   "DisplayerTest",
    // "DummyInteractionTest",
    "DummyNormalTest"
];