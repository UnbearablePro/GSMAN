class SettingsSheet extends AbstractSheetService {

    static initialize() {
        if (DataUtils.isEmpty(SettingsSheet.sheet)) {
          this.sheet = OVBRAINSpreadsheet.getSheetByName(SheetNames.SETTINGS);
        }
      }

}