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
      PortalOVB.openOVBEasy();
    } catch (e) {
      ErrorHandler.handleError(e);
    }
  }
  
  function callButtonOVBCloud() {
    PortalOVB.openOVBCloud();
  }
  
  function callButtonOVBPasswordChange() {
    PortalOVB.openOVBPasswordChange();
  }
  
  function callGLCalendar() {
    Logger.log("Open Google Calendar Button pressed.");
    try {
      PortalOVB.openGoogleCalendar()
    } catch (e) {
      ErrorHandler.handleError(e);
    }
  }