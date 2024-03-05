class MenuService {

    static createMenuFromTemplate(template) {
        MenuBuilder.createMenu(template);
    }

    static createAdminMenu() {
        this.createMenuFromTemplate(MenusTemplate.ADMIN);
    }

}