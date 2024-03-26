class GCEventBuilder {

    static createCalendarEventFrom(
        defaultGCEvent,
        title,
        start,
        duration,
        description,
        emailReminder,
        popupReminder,
        color,
        location,
        guests,
        guestsCanSeeGuests,
        guestsCanModify,
        anyoneCanAddSelf,
        sendInvites) {

        defaultGCEvent = DataUtils.getIfNotEmpty(defaultGCEvent, DefaultGCEvent);
        DataUtils.requireNotNull(title);
        DataUtils.requireNotNull(start);
        duration = DataUtils.getIfNotEmpty(duration, defaultGCEvent.duration);
        description = DataUtils.getIfNotEmpty(description, defaultGCEvent.description);
        emailReminder = DataUtils.getIfNotEmpty(emailReminder, defaultGCEvent.emailReminder);
        popupReminder = DataUtils.getIfNotEmpty(popupReminder, defaultGCEvent.popupReminder);
        color = DataUtils.getIfNotEmpty(color, defaultGCEvent.color);
        location = DataUtils.getIfNotEmpty(location, defaultGCEvent.location);
        guests = DataUtils.getIfNotEmpty(guests, defaultGCEvent.guests);
        guestsCanSeeGuests = DataUtils.getIfNotEmpty(guestsCanSeeGuests, defaultGCEvent.guestsCanSeeGuests);
        sendInvites = DataUtils.getIfNotEmpty(sendInvites, defaultGCEvent.sendInvites);
        anyoneCanAddSelf = DataUtils.getIfNotEmpty(anyoneCanAddSelf, defaultGCEvent.anyoneCanAddSelf);
        guestsCanModify = DataUtils.getIfNotEmpty(guestsCanModify, defaultGCEvent.guestsCanModify);

        const end = JSDateUtils.getJSDateAfterMinutes(start, duration);

        return new GCEvent(title, start, end, description, emailReminder, popupReminder, color, location, guests, guestsCanSeeGuests, sendInvites, anyoneCanAddSelf, guestsCanModify);
    }

}