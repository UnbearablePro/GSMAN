class PortalHandler extends PortalService {

    static openGoogleCalendar() {
        let url = Link.GOOGLECALENDAR;
        Lug.progress(`Request to open google calendar with url: ${url}`);
        this.openNewTab(url, "Google calendar se deschide...");
      }
    
      static openOVBEasy() {
        var url = Link.OVB_EASY;
        Lug.progress(`Request to open ovb easy with url: ${url}`);
        this.openNewTab(url, "OVB Easy se deschide...");
      }
    
      static openOVBCloud() {
        var url = Link.OVB_CLOUD;
        Lug.progress(`Request to open ovb cloud with url: ${url}`);
    
        this.openNewTab(url, "OVB Cloud se deschide...");
      }
    
      static openOVBPasswordChange() {
        var url = Link.OVB_CHANGE_PASSWORD;
        Lug.progress(`Request to open ovb password changer with url: ${url}`);
    
        this.openNewTab(url, "OVB Service pentru schimbarea parolei se deschide...");
      }
}