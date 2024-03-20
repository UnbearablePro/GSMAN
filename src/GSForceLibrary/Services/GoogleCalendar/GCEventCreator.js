class GCEventCreator {

    /**
     * 
     * @param {*} calendar 
     * @param {GCEvent} gcEvent 
     */
    static createCalendarEventFromGCEvent(calendar, gcEvent) {
        var event = calendar.createEvent(gcEvent.title, gcEvent.start, gcEvent.end, {
            description: gcEvent.description,
            color: gcEvent.color,
            reminders: gcEvent.reminders,
        });

        Lug.progress(`Successfully created a google calendar event: ${gcEvent.title} at ${gcEvent.start}`);
        return event.getId();
    }

    static createAllDayCalendarEvent() {};

    static createAllDayEventSeries() {};

    static createEventSeries() {};

}