class GCEventCreator {

    static createCalendarEvent(calendar, { title, start, end, location, description, guests, sendInvites, color, reminders, guestsCanSeeGuests }) {
        var event = calendar.createEvent(title, start, end, {
            location: location,
            description: description,
            guests: guests,
            sendInvites: sendInvites,
            color: color,
            reminders: reminders,
            guestsCanSeeGuests: guestsCanSeeGuests
        });

        Logger.log(`Google calendar event created successfully. Event ${event}`);
    }

    static createAllDayCalendarEvent() {};

    static createAllDayEventSeries() {};

    static createEventSeries() {};

}