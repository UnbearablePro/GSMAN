class DriveService {

    static getFolderFromId(folderId) {
        return DriveApp.getFolderById(folderId);
    }

    static getFileById(fileId) {
        return DriveApp.getFileById(fileId);
    }

    static getFileContentById(id) {
        this.getFileById(id).getBlob().getDataAsString();
    }

    static searchForFolderById(folderId) {
        return DataUtils.getIfNotEmpty(DriveApp.getFolderById(folderId), null);
    }

    /**
     * 
     * @param {*} folder 
     * @param {string} searchFolderName 
     */
    static searchForFolderInFolder(folder, searchFolderName) {
        DataUtils.requireNotNull(folder);
        DataUtils.requireNotNull(searchFolderName);

        const subFolder = folder.next().getFoldersByName(searchFolderName);

        if (subFolder.hasNext()) {
            return subFolder;
        } else {
            return null;
        }
    }

    static createFolder(folder, folderName) {
        return folder.next().createFolder(folderName);
    } 

    /**
     * @param {string} fileId 
     * @param {string} folderName 
     * @returns {string} folder id
     */
    static createFolderInParent(fileId, folderName = "New folder") {
        DataUtils.requireNotNull(fileId, `Creating folder {${folderName}} failed. File id is mandatory for creating folder in parent`);

        let file = DriveApp.getFileById(fileId);
        let parentFolder = file.getParents().next();

        var newFolder = parentFolder.createFolder(folderName);

        return newFolder.getId();
    }
    /**
     * 
     * @param {string} content 
     * @param {*} folder 
     * @param {string} fileName 
     */
    static createFileFromStringContent(content, folder, fileName) {
        DataUtils.requireNotNull(content, `Creating new file {${fileName}} failed. The content is empty`);
        DataUtils.requireNotNull(content, `Creating new file {${fileName}} failed. The folder parameters is empty`);

        if (DataUtils.isEmpty(fileName)) {
            folder.createFile("New file", content);
            Lug.warning(`Creating file in folder {${folder.getUrl()}} with default name {New file}`);
        } else {
            folder.createFile(fileName, content);
        };
    }
}