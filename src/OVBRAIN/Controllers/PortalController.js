class PortalController {

    static openGoogleCalendar() {
        let url = Link.GOOGLECALENDAR;
        Logger.log(`Request to open google calendar with url: ${url}`);
        PortalService.openNewTab(url, "Google calendar se deschide...");
      }
    
      static openOVBEasy() {
        var url = Link.OVB_EASY;
        Logger.log(`Request to open ovb easy with url: ${url}`);
    
        PortalService.openNewTab(url, "OVB Easy se deschide...");
      }
    
      static openOVBCloud() {
        var url = Link.OVB_CLOUD;
        Logger.log(`Request to open ovb cloud with url: ${url}`);
    
        PortalService.openNewTab(url, "OVB Cloud se deschide...");
      }
    
      static openOVBPasswordChange() {
        var url = Link.OVB_CHANGE_PASSWORD;
        Logger.log(`Request to open ovb password changer with url: ${url}`);
    
        PortalService.openNewTab(url, "OVB Service pentru schimbarea parolei se deschide...");
      }
}