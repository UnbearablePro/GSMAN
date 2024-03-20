class GCEventService {

    static createCalendarEvent(calendar, gcEvent) {
        return GCEventCreator.createCalendarEventFromGCEvent(calendar, gcEvent);
    }

}