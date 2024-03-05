function onOpen(){
  if (!Owner.exist()) {
    Installer.askForInstall();
  }
    Menu.createOVBMenu();
  }
  