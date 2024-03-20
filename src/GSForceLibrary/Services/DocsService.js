class DocsService {

    static createDocumentFromTemplate(templateId) {

        // Create a new copy of the template
        var documentCopy = DriveApp.getFileById(templateId).makeCopy();
        var newDocumentId = documentCopy.getId();

        // Access the new document
        var newDocument = DocumentApp.openById(newDocumentId);
        var body = newDocument.getBody();

        // Replace placeholders with dynamic content
        body.replaceText('{{Placeholder1}}', 'Dynamic Content 1');
        body.replaceText('{{Placeholder2}}', 'Dynamic Content 2');

        // Save and close the new document
        newDocument.saveAndClose();

        // Log the URL of the new document
        Logger.log('New Document URL: ' + DriveApp.getFileById(newDocumentId).getUrl());

    }
}