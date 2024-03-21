class OVBDriveService {

    static getActivitateFolder() {
        const folderId = PropertiesUserService.get(FileNames.FOLDER_ACTIVITATE);
        if (DataUtils.isEmpty(folderId)) {
            return this.askForCreationOfActivitateFolder();
        }

        const folder = DriveService.getFolderById(folderId);
        if (DataUtils.isEmpty(folder)) {
            return this.askForCreationOfActivitateFolder();
        }

        return folder;
    }

    static askForCreationOfActivitateFolder() {
        const response = Displayer.ask(`Nu a fost gasit folderul de activitate
      Pentru o gestionare automata a documentelor doriti crearea acestuia?`);
        if (response) {
            this.createFolderActivitate();
        } else {
            throw Error(`Folder ACTIVITATE was not found`);
        }
    }

    static createFolderActivitate() {
        try {
            let folder = DriveService.createFolderInParent(SpreadSheetIds.OVBRAIN, `Activitati ${Owner.getOwner().firstName} ${Owner.getOwner().lastName}`);
            PropertiesScriptService.set(FileNames.FOLDER_ACTIVITATE, folder.getId());
            return folder;
        } catch (e) {
            ErrorHandler.handleError(e);
        }
    }
}