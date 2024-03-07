class MenuService {

    static createMenuFromTemplate(template) {
        MenuBuilder.createMenu(template).addToUi();

    }

    static createAdminMenu() {
        this.createMenuFromTemplate(MenusTemplate.ADMIN);
    }

}