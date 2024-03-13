class ContacteSheetHandler {

    static openAddContacts() {
        try {
            AddContacts.openAdaugaContacte();
        } catch (e) {
            ErrorHandler.handleError(e);
        }
    }

    static openFilteringContacteByStatus() {
        try {
            FilteringOVBService.openFilteringContacteByStatus();
        } catch (e) {
            ErrorHandler.handleError(e);
        }
    };

    static addContacts(recommandar, contacts) {
        try {
            DataUtils.requireNotNull(recommandar, "Recommandar is not provided for adding contacts");
            DataUtils.requireNotNull(contacts, "New contacts are not provided for adding");

            AddContacts.addContacts(recommandar, contacts);
        } catch (e) {
            ErrorHandler.handleError(e);
        }
    }

    static setFilterContacteByStatus(filterStatus) {
        ContacteSheet.setFilterContacteByStatus(filterStatus);
    }

    static filterClear() {
        ContacteSheet.removeFilter();
    }

}