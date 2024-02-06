class PortalOVB {

  static openGoogleCalendar() {
    var url = "https://calendar.google.com";
    Logger.log(`Request to open google calendar with url: ${url}`);

    Portal.openNewTab(url, "Google calendar se deschide...");
  }

  static openOVBEasy() {
    var url = "https://easy.ovb.ro/app/start/do";
    Logger.log(`Request to open ovb easy with url: ${url}`);

    Portal.openNewTab(url, "OVB Easy se deschide...");
  }

  static openOVBCloud() {
    var url = "https://cloud.ovb.eu/cloud/index.php/apps/files/";
    Logger.log(`Request to open ovb cloud with url: ${url}`);

    Portal.openNewTab(url, "OVB Cloud se deschide...");
  }

  static openOVBPasswordChange() {
    var url = "https://selfservice.ovb.eu/";
    Logger.log(`Request to open ovb password changer with url: ${url}`);

    Portal.openNewTab(url, "OVB Service pentru schimbarea parolei se deschide...");
  }

  




  
}



