function debugDisplayUserPropertiesTrigger() {
    try {
        PropertiesController.displayUserProperties();
    } catch (e) {
        Displayer.debug(e.message + e.stack);
    }
}

function debugDisplayDocumentPropertiesTrigger() {
    try {
        PropertiesController.displayDocumentProperties();
    } catch (e) {
        Displayer.debug(e.message + e.stack);
    }
}

function debugDisplayScriptPropertiesTrigger() {
    try {
        PropertiesController.displayScriptProperties();
    } catch (e) {
        Displayer.debug(e.message + e.stack);
    }
}

function debugUpdateUserPropertiesTrigger() {
    try {
        PropertiesController.updateUserProperties();
    } catch (e) {
        Displayer.debug(e.message + e.stack);
    }
}

function debugUpdateDocumentPropertiesTrigger() {
    try {
        PropertiesController.updateDocumentProperties();
    } catch (e) {
        Displayer.debug(e.message + e.stack);
    }
}

function debugUpdateScriptPropertiesTrigger() {
    try {
        PropertiesController.updateScriptProperties();
    } catch (e) {
        Displayer.debug(e.message + e.stack);
    }
}

function debugDeleteUserPropertiesTrigger() {
    try {
        PropertiesController.deleteUserProperties();
    } catch (e) {
        Displayer.debug(e.message + e.stack);
    }
}

function debugDeleteDocumentPropertiesTrigger() {
    try {
        PropertiesController.deleteDocumentProperties();
    } catch (e) {
        Displayer.debug(e.message + e.stack);
    }
}

function debugDeleteScriptPropertiesTrigger() {
    try {
        PropertiesController.deleteScriptProperties();
    } catch (e) {
        Displayer.debug(e.message + e.stack);
    }
}