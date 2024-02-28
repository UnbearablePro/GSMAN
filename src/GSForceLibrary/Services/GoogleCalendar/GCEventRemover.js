class GCEventRemover {

    static clearAllEvents(calendar) {
        var events = calendar.getEvents(new Date(0), new Date(8640000000000000));
        for (var i = 0; i < events.length; i++) {
            events[i].deleteEvent();
            Lug.info(`Event deleted: ${events[i].getTitle()}`);
        }
        Lug.progress(`All ${events.length} calendar events from ${calendar.getName()} deleted successfully`);
    }
}