class GCEventCreator {

    /**
     * 
     * @param {*} calendar 
     * @param {GCEvent} gcEvent 
     */
    static createCalendarEventFromGCEvent(calendar, gcEvent) {

        const event = calendar.createEvent(gcEvent.title, gcEvent.start, gcEvent.end);
        event.addEmailReminder(gcEvent.emailReminder);
        event.addEmailReminder(gcEvent.popupReminder);
        event.setColor(gcEvent.color);
        event.setDescription(gcEvent.description);

        Lug.progress(`GOOGLE CALENDAR: Created event: ${gcEvent.title} at ${gcEvent.start}`);
        return event.getId();
    }

    static createAllDayCalendarEvent() {};

    static createAllDayEventSeries() {};

    static createEventSeries() {};

}