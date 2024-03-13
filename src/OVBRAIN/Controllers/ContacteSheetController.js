class ContacteSheetController {

    static openMeeting() {
        MeetingService.openMeeting();
    }

    static programMeeting(index, type, date, hour, details, reminder) {
        try {
            MeetingService.programMeeting(type, date, hour, details, reminder);
        } catch (e) {
            ErrorHandler.handleError(e);
        }
    }

    static programMeetingFromStatusEvent(event, date, hour, details, reminder) {
        try {
            var c = Contact.getContactFrom(event.row);
            c.isLastInteractionThisWeek();
            MeetingService.programMeetingFromStatusEvent(event, date, hour, details, reminder);
        } catch (e) {
            ContacteStatusService.restoreStatus(event);
            ErrorHandler.handleError(e);
        }
    }

    static restoreStatus(oldEvent) {
        try {
            ContacteStatusService.restoreStatus(oldEvent);
        } catch (e) {
            ErrorHandler.handleError(e);
        }

    }

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