function onOpen() {
  try {
    OnOpenHandler.handleOpen();
  } catch (e) {
    ErrorHandler.handleError(e);
  }
  Displayer.system("Bine ai revenit", null, "😄");
}
