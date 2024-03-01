class MenuBuilder {

    static createMenu(adminTemplate) {
        if (adminTemplate[0] == null || adminTemplate[0] == " ") {
            throw Error("Failed to create menu because no title provided");
        }    
        const ui = SpreadsheetApp.getUi();
        let menu = ui.createMenu(adminTemplate[0][1]);

        for (let i = 1; i < adminTemplate.length; i++) {
            switch(adminTemplate[i][0]) {
                case 'addSeparator': menu.addSeparator(); break;
                case 'addSubMenu' : menu.addSubMenu(adminTemplate[i][1]); break;
                case 'addItem': menu.addItem(adminTemplate[i][1], adminTemplate[i][2]); break;
                case 'addToUi': menu.addToUi(); break;
                default: throw Error(`Cannot building menu with template ${adminTemplate}. Reason: ${adminTemplate[i][0]} is not an option for building the menu `);
            }
        }
    }

}