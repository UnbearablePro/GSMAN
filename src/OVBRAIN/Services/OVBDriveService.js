class OVBDriveService {

    static getActivitateFolder() {
        const folderId = PropertiesUserService.get(FileNames.FOLDER_ACTIVITATE);
        if (folderId) {
            throw Error(`User property: {${FileNames.FOLDER_ACTIVITATE}} could not be provided because is null`);
        }

        const folder = DriveService.searchForFolderById(folderId);
        if (DataUtils.isEmpty(folder)) {
            const response = Displayer.ask(`Nu a fost gasit folderul de activitate
      Pentru o gestionare automata a documentelor doriti crearea acestuia?`);
            if (response) {
                this.createFolderActivitate();
            } else {
                throw Error(`Folder ACTIVITATE was not found`);
            }
        }
    }

    static createFolderActivitate() {
        try {
            DriveService.createFolderInParent(SpreadSheetIds.OVBRAIN, `Activitati ${Owner.getOwner().firstName} ${Owner.getOwner().lastName}`);
        } catch (e) {
            ErrorHandler.handleError(e);
        }
    }
}