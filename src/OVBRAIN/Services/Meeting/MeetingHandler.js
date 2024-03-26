class MeetingHandler {

    static openMeeting() {
        MeetingService.openMeeting();
    }

    static setMeetingFromStatusEvent(row, currentValue, oldValue, numePrenume, day, month, year, hour, minute, description) {
        try {
            MeetingService.setMeetingFromStatusEvent(row, currentValue, oldValue, numePrenume, day, month, year, hour, minute, description);
        } catch (e) {
            // ContacteStatusService.cancelStatusForm();
            ErrorHandler.handleError(e);
        }
    }
}