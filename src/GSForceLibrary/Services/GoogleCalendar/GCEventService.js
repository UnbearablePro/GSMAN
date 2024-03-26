class GCEventService {

    /**
     * 
     * @param {*} calendar 
     * @param {GCEvent} gcEvent 
     * @returns 
     */
    static createCalendarEventFromGCEvent(calendar, gcEvent) {
        return GCEventCreator.createCalendarEventFromGCEvent(calendar, gcEvent);
    }

}