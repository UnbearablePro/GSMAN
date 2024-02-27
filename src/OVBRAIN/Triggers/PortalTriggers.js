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
      PortalController.openOVBEasy();
    } catch (e) {
      ErrorHandler.handleError(e);
    }
  }
  
  function callButtonOVBCloud() {
    try{
      PortalController.openOVBCloud();
    } catch(e) {
      ErrorHandler.handleError(e);
    }
  }
  
  function callButtonOVBPasswordChange() {
    try{
      PortalController.openOVBPasswordChange();
    } catch(e) {
      ErrorHandler.handleError(e);
    }
  }
  
  function callGLCalendar() {
    try{
      PortalController.openGoogleCalendar();
    } catch(e) {
      ErrorHandler.handleError(e);
    }
  }