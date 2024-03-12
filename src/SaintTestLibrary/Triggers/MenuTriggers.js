function createTestMenuTrigger() {
    const ui = SpreadsheetApp.getUi();
    ui.createMenu('Testing')
    .addItem("Run all tests", "testAllTrigger")
    .addItem("Run all tests without interaction", "testAllWithoutInteraction")
    .addSeparator()
    .addItem("Test Menu off","deleteTestMenuTrigger")
    .addItem("Run all tests without interaction", "testAllWithoutInteraction")
    .addToUi();

    SpreadsheetApp.getActiveSpreadsheet().toast("🧐 Testing is on")
}

function deleteTestMenuTrigger() {
    SpreadsheetApp.getActiveSpreadsheet().removeMenu("🙊 Testing is off");
}