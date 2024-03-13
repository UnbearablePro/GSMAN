function createDebugMenu_() {
    const ui = SpreadsheetApp.getUi();
    let debugMenu = ui.createMenu('Debug');
    let debugPropertiesMenu = ui.createMenu('Properties');

    debugPropertiesMenu
    .addItem('User Display', 'debugDisplayUserPropertiesTrigger')
    .addItem('User Update', 'debugUpdateUserPropertiesTrigger')
    .addItem('User Delete', 'debugDeleteUserPropertiesTrigger')
    .addItem('User Delete All', 'debugDeleteAllUserPropertiesTrigger')
    .addSeparator()
    .addItem('Document Display', 'debugDisplayDocumentPropertiesTrigger')
    .addItem('Document Update', 'debugUpdateDocumentPropertiesTrigger')
    .addItem('Document Delete', 'debugDeleteDocumentPropertiesTrigger')
    .addItem('Document Delete All', 'debugDeleteAllDocumentPropertiesTrigger')
    .addSeparator()
    .addItem('Script Display', 'debugDisplayScriptPropertiesTrigger')
    .addItem('Script Update', 'debugUpdateScriptPropertiesTrigger')
    .addItem('Script Delete', 'debugDeleteScriptPropertiesTrigger')
    .addItem('Script Delete All', 'debugDeleteAllScriptPropertiesTrigger');

    debugMenu
    .addItem('Check for no Compilation Error', 'debugCheckSystemWorks')
    .addSubMenu(debugPropertiesMenu);
    
    debugMenu.addToUi();
}

function removeDebugMenu_() {
    SpreadsheetApp.getActiveSpreadsheet().removeMenu('Debug');
}