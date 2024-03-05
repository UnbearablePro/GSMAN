class MenuBuilder {

    static createMenu(menuTemplate) {
        if (menuTemplate[0] == null || menuTemplate[0] == " ") {
            throw Error("Failed to create menu because no title provided");
        }    
        const ui = SpreadsheetApp.getUi();
        let menu = ui.createMenu(menuTemplate[0][1]);

        for (let i = 1; i < menuTemplate.length; i++) {
            switch(menuTemplate[i][0]) {
                case 'addSeparator': menu.addSeparator(); break;
                case 'addSubMenu' : menu.addSubMenu(menuTemplate[i][1]); break;
                case 'addItem': menu.addItem(menuTemplate[i][1], menuTemplate[i][2]); break;
                case 'addToUi': menu.addToUi(); break;
                default: throw Error(`Cannot building menu with template ${menuTemplate}. Reason: ${menuTemplate[i][0]} is not an option for building the menu `);
            }
        }
    }

}