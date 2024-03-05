function onOpen() {
    const ui = SpreadsheetApp.getUi();
    ui.createMenu('Test')
    .addItem("Run all tests", "testAllTrigger")
    .addItem("Run all tests without interaction", "testAllWithoutInteraction")
    .addToUi();
}