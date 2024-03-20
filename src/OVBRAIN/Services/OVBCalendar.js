class OVBCalendar {

    static initialize() {
        if (DataUtils.isEmpty(this.calendar)) {
            this.calendar = GCService.getCalendar('OVB');
        }
    }

    static getCalendar() {
        this.initialize();
        return this.calendar;
    }

    static createReminder() {

    }

    static createMeeting(type, date, hour, details, reminder) {
        this.initialize();
        var gcEvent = GCEventBuilder.createCalendarEventFrom(type, date);
        
    }

}
