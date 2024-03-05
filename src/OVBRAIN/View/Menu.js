class Menu extends MenuService{

  static createOVBMenu() {
    this.createMenuFromTemplate(MenusOVBTemplates.OVB);
    Lug.progress("OVB Menu created successfully");
  }
  
}

