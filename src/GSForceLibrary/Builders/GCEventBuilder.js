class GCEventBuilder {

    static createCalendarEventFrom(
        defaultGCEvent = DefaultGCEvent,
        title, 
        start, 
        duration,
        description, 
        reminders,
        color, 
        location,
        guests,
        guestsCanSeeGuests, 
        guestsCanModify, 
        anyoneCanAddSelf, 
        sendInvites) {

        DataUtils.requireNotNull(title);
        DataUtils.requireNotNull(start);
        duration = DataUtils.getIfNotEmpty(duration, defaultGCEvent.duration);
        description = DataUtils.getIfNotEmpty(description, defaultGCEvent.description);
        reminders = DataUtils.getIfNotEmpty(reminders, defaultGCEvent.reminders);
        color = DataUtils.getIfNotEmpty(color, defaultGCEvent.color);
        location = DataUtils.getIfNotEmpty(location, defaultGCEvent.location);
        guests = DataUtils.getIfNotEmpty(guests, defaultGCEvent.guests);
        guestsCanSeeGuests = DataUtils.getIfNotEmpty(guestsCanSeeGuests, defaultGCEvent.guestsCanSeeGuests);
        sendInvites = DataUtils.getIfNotEmpty(sendInvites, defaultGCEvent.sendInvites);
        anyoneCanAddSelf = DataUtils.getIfNotEmpty(anyoneCanAddSelf, defaultGCEvent.anyoneCanAddSelf);
        guestsCanModify = DataUtils.getIfNotEmpty(guestsCanModify, defaultGCEvent.guestsCanModify);
        
        const end = DateTime.getDateAfterMinutes(start, duration);

        return {
            title: title,
            start: start,
            end: end,
            location: location,
            description: description,
            guests: guests,
            sendInvites: sendInvites,
            color: color,
            reminders: reminders,
            guestsCanSeeGuests: guestsCanSeeGuests
        };
    }

}