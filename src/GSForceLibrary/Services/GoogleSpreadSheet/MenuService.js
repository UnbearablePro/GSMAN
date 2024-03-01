class MenuService {

    static createMenu(template) {
        MenuBuilder.createMenu(template);
    }

    static createAdminMenu() {
        this.createMenu(MenusTemplate.ADMIN);
    }

}