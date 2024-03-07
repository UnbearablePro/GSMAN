class ContacteSheetController {

    static openAddContacts() {
        try {
            AddContacts.openAdaugaContacte();
        } catch (e) {
            ErrorHandler.handleError(e);
        }
    }

    static openFilteringContacteByStatus() {
        try {
            FilteringService.openFilteringContacteByStatus();
        } catch (e) {
            ErrorHandler.handleError(e);
        }
    };

    static addContacts(recommandar, contacts) {
        try {
            DataUtils.reuquireNotNull(recommandar, "Recommandar is not provided for adding contacts");
            DataUtils.reuquireNotNull(contacts, "New contacts are not provided for adding");

            AddContacts.addContacts(recommandar, contacts);
        } catch (e) {
            ErrorHandler.handleError(e);
        }
    }

    static filterContacteByStatusTrigger(status) {

    }

}