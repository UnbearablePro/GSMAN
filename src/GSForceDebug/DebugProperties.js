class DebugProperties {

    static getUserProperties() {
        return PropertiesService.getUserProperties();
    }

    static getDocumentProperties() {
        return PropertiesService.getDocumentProperties();
    }

    static getScriptProperties() {
        return PropertiesService.getScriptProperties();
    }

    static display(propertiesService) {
        const ui = SpreadsheetApp.getUi();

        let message = "";

        var properties = propertiesService.getProperties();
        var keys = propertiesService.getKeys();

        keys.forEach(key => {
            message = message + key + " : " + properties[key] + "\n";
        });
        Logger.log(`🐞 Properties : 
        ${message}`);

        ui.alert(message);
    };

    static displayUserProperties() {
        this.display(this.getUserProperties());
    }

    static displayDocumentProperties() {
        this.display(this.getDocumentProperties());
    }

    static displayScriptProperties() {
        this.display(this.getScriptProperties());
    }

    static updateUserProperties() {
        const ui = SpreadsheetApp.getUi();
        const key = ui.prompt('📝 Update user property', 'Insert key name: ', ui.ButtonSet.YES_NO).getResponseText();
        const newValue = ui.prompt('📝 Update user property', 'Insert key name: ', ui.ButtonSet.YES_NO).getResponseText();

        let userProperties = this.getUserProperties();
        userProperties.setProperty(key, newValue);

        Logger.log(`🐞 User property ${key} : ${newValue} updated successfully`);
        SpreadsheetApp.getActiveSpreadsheet().toast(`🐞 User property ${key} : ${newValue} updated successfully`);
    }

    static updateDocumentProperties() {
        const ui = SpreadsheetApp.getUi();
        const key = ui.prompt('📝 Update document property', 'Insert key name: ', ui.ButtonSet.YES_NO).getResponseText();
        const newValue = ui.prompt('📝 Update document property', 'Insert key name: ', ui.ButtonSet.YES_NO).getResponseText();

        let documentProperties = this.getDocumentProperties();
        documentProperties.setProperty(key, newValue);

        Logger.log(`🐞 Document property ${key} : ${newValue} updated successfully`);
        SpreadsheetApp.getActiveSpreadsheet().toast(`🐞 Document property ${key} : ${newValue} updated successfully`);
    }

    static updateScriptProperties() {
        const ui = SpreadsheetApp.getUi();
        const key = ui.prompt('📝 Update script property', 'Insert key name: ', ui.ButtonSet.YES_NO).getResponseText();
        const newValue = ui.prompt('📝 Update script property', 'Insert key name: ', ui.ButtonSet.YES_NO).getResponseText();

        let scriptProperties = this.getScriptProperties();
        scriptProperties.setProperty(key, newValue);

        Logger.log(`🐞 Script property ${key} : ${newValue} updated successfully`);
        SpreadsheetApp.getActiveSpreadsheet().toast(`🐞 Script property ${key} : ${newValue} updated successfully`);
    }


    static deleteUserProperties() {
        const ui = SpreadsheetApp.getUi();
        const key = ui.prompt('📝 Delete user property: ').getResponseText();

        this.getUserProperties().deleteProperty(key);

        Logger.log(`🐞 User property ${key} deleted successfully`);
        SpreadsheetApp.getActiveSpreadsheet().toast(`🐞 Script property ${key} deleted successfully`);
    }

    static deleteAllUserProperties() {
        const ui = SpreadsheetApp.getUi();
        const response = ui.alert('Are you sure you want to delete all properties?')

        if (response == ui.Button.YES) {
            this.getUserProperties().deleteAllProperties();
            Logger.log(`🐞 All user properties deleted`);
            SpreadsheetApp.getActiveSpreadsheet().toast(`🐞 All user properties deleted`);
        }
    }

    static deleteDocumentProperties() {
        const ui = SpreadsheetApp.getUi();
        const key = ui.prompt('📝 Delete document property: ').getResponseText();

        this.getDocumentProperties().deleteProperty(key);

        Logger.log(`🐞 Document property ${key} deleted successfully`);
        SpreadsheetApp.getActiveSpreadsheet().toast(`🐞 Document property ${key} deleted successfully`);
    }

    static deleteAllDocumentProperties() {
        const ui = SpreadsheetApp.getUi();
        const response = ui.alert('Are you sure you want to delete all properties?')

        if (response == ui.Button.YES) {
            this.getDocumentProperties().deleteAllProperties();
            Logger.log(`🐞 All document properties deleted`);
            SpreadsheetApp.getActiveSpreadsheet().toast(`🐞 All document properties deleted`);
        }
    }

    static deleteScriptProperties() {
        const ui = SpreadsheetApp.getUi();
        const key = ui.prompt('📝 Delete script property: ').getResponseText();

        this.getScriptProperties().deleteProperty(key);

        Logger.log(`🐞 Script property ${key} deleted successfully`);
        SpreadsheetApp.getActiveSpreadsheet().toast(`🐞 Script property ${key} deleted successfully`);
    }

    static deleteAllScriptProperties() {
        const ui = SpreadsheetApp.getUi();
        const response = ui.alert('Are you sure you want to delete all properties?')

        if (response == ui.Button.YES) {
            this.getScriptProperties().deleteAllProperties();
            Logger.log(`🐞 All script properties deleted`);
            SpreadsheetApp.getActiveSpreadsheet().toast(`🐞 All script properties deleted`);
        }
    }

}