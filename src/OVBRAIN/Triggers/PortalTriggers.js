// function callGLCalendarIFrame() {
//     try {
//       HtmlUtils.openHtmlPopupFree(HtmlUtils.fileName.GoogleCalendarIFrame, 500, 500, "Google calendar is opening");
//     } catch (e) {
//       ErrorHandler.handleError(e);
//     }
//   }
//TODO: See wtf is this

function callButtonOVBEasy() {
  Logger.log("Open OVB easy button pressed.");
  try {
    PortalHandler.openOVBEasy();
  } catch (e) {
    ErrorHandler.handleError(e);
  }
}

function callButtonOVBCloud() {
  try {
    PortalHandler.openOVBCloud();
  } catch (e) {
    ErrorHandler.handleError(e);
  }
}

function callButtonOVBPasswordChange() {
  try {
    PortalHandler.openOVBPasswordChange();
  } catch (e) {
    ErrorHandler.handleError(e);
  }
}

function callGLCalendar() {
  try {
    PortalHandler.openGoogleCalendar();
  } catch (e) {
    ErrorHandler.handleError(e);
  }
}