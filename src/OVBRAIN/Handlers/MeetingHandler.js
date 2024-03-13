class MeetingHandler {

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
}