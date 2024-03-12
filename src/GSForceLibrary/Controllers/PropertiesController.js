class PropertiesController {

    static displayUserProperties() {
        Permisioner.requireAdminPermsission("Admin permission required to display user properties");
        PropertiesUserService.display();
    }

    static displayDocumentProperties() {
        Permisioner.requireAdminPermsission("Admin permission required to display document properties");
        PropertiesDocumentService.display();
    }

    static displayScriptProperties() {
        Permisioner.requireAdminPermsission("Admin permission required to display script properties");
        PropertiesScriptService.display();
    }

    static updateUserProperties() {
        Permisioner.requireAdminPermsission("Admin permission required to update script properties");

        const key = Displayer.inputField('📝 Update user property', 'Insert key name: ');
        const newValue = Displayer.inputField('📝 Update user property', 'New property value: ');
        
        PropertiesUserService.set(key, newValue);

        Displayer.complete(`User property ${key} : ${newValue} updated successfully`);
    }

    static updateDocumentProperties() {
        Permisioner.requireAdminPermsission("Admin permission required to update script properties");

        const key = Displayer.inputField('📝 Update document property', 'Insert key name: ');
        const newValue = Displayer.inputField('📝 Update document property', 'New property value: ');

        Permisioner.requireAdminPermsission("Admin permission required to update document properties");
        PropertiesDocumentService.set(key, newValue);

        Displayer.complete(`Document property ${key} : ${newValue} updated successfully`);
    }

    static updateScriptProperties() {
        Permisioner.requireAdminPermsission("Admin permission required to update script properties");

        const key = Displayer.inputField('📝 Update script property', 'Insert key name: ');
        const newValue = Displayer.inputField('📝 Update script property', 'New property value: ');
        
        PropertiesScriptService.set(key, newValue);

        Displayer.complete(`Scrip property ${key} : ${newValue} updated successfully`);
    }


    static deleteUserProperties() {
        Permisioner.requireAdminPermsission("Admin permission required to delete user properties");
        const key = Displayer.inputField('📝 Delete user property', 'Insert key name: ');

        if (key == "all") {
            if (Displayer.ask("Are you sure you want to delete all properties?")) {
                PropertiesUserService.deleteAll();
                Displayer.complete(`All User properties ${key} deleted successfully`);
            }
        } else {
            PropertiesUserService.delete(key);
            Displayer.complete(`User property ${key} deleted successfully`);
        }
    }

    static deleteDocumentProperties() {
        Permisioner.requireAdminPermsission("Admin permission required to delete document properties");
        const key = Displayer.inputField('📝 Delete document property', 'Insert key name: ');

        if (key == "all") {
            if (Displayer.ask("Are you sure you want to delete all properties?")) {
                PropertiesDocumentService.deleteAll();
                Displayer.complete(`All Document properties ${key} deleted successfully`);
            }
        } else {
            PropertiesDocumentService.delete(key);
            Displayer.complete(`Document property ${key} deleted successfully`);
        }
    }

    static deleteScriptProperties() {
        Permisioner.requireAdminPermsission("Admin permission required to delete script properties");
        const key = Displayer.inputField('📝 Delete script property', 'Insert key name: ');

        if (key == "all") {
            if (Displayer.ask("Are you sure you want to delete all properties?")) {
                PropertiesScriptService.deleteAll();
                Displayer.complete(`All Scrip properties ${key} deleted successfully`);
            }
        } else {
            PropertiesScriptService.delete(key);
            Displayer.complete(`Scrip property ${key} deleted successfully`);
        }
    }


}