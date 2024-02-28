class GCEventProvider {

    static getAllEvents(calendar) {
        return calendar.getEvents(new Date(0), new Date(8640000000000000));
    }

    static getAllEventsFrom(calendar, startDate, endDate) {
        return calendar.getEvents(startDate, endDate);
    }

    static getEventByTitle(calendar, title) {
        const events = this.getAllEventsFrom(calendar);

        for (var i = 0; i < events.length; i++) {
            if (events[i].getTitle() === title) {
                return events[i];
            }
        }
        Lug.warning(`Event witht title: <${title}> not found`);
        return null;
    }

    static getEventByTitleFrom(calendar, title, startDate, endDate) {
        const events = this.getAllEventsFrom(calendar, startDate, endDate);

        for (var i = 0; i < events.length; i++) {
            if (events[i].getTitle() === title) {
                return events[i];
            }
        }
        Lug.warning(`Event witht title: <${title}> not found`);
        return null;
    }
}