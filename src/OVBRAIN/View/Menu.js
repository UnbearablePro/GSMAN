class Menu extends MenuService{

  static createOVBMenu() {
    this.createMenuFromTemplate(MenusOVBTemplate.OVB);
    Lug.progress("OVB Menu created successfully");
  }

  static createAdminMenu() {
    this.createMenuFromTemplate(MenusOVBTemplate.ADMIN);
    Lug.progress("ADMIN Menu created successfully");
  }
  
}

