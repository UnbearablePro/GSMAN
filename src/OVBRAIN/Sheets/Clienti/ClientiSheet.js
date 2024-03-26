class ClientiSheet extends AbstractSheetService {

    static initialize() {
        if (DataUtils.isEmpty(ClientiSheet.sheet)) {
          this.sheet = OVBRAINSpreadsheet.getSheetByName(SheetNames.CONTACTE);
        }
      }

    static appendClient(client) {
        
    }

}