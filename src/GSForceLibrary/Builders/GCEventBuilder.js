class GCEventBuilder {

    static createCalendarEventFrom(title, start, end, 
        //TODO: Implements default values
        description, 
        reminders = {},
        color, 
        location,
        guestsCanSeeGuests, 
        // anyoneCanAddSelf, 
        guestsCanModify, 
        anyoneCanAddSelf) {

        // Extract options or set default values
        // location = options && options.location ? options.location : "Default Location";
        // description = options && options.description ? options.description : "No description";
        // guests = options && options.guests ? options.guests : [];
        // sendInvites = options && options.sendInvites !== undefined ? options.sendInvites : true;
        // color = options && options.color ? options.color : CalendarApp.EventColor.DEFAULT;
        // reminders = options && options.reminders ? options.reminders : {};
        // guestsCanSeeGuests = options && options.guestsCanSeeGuests !== undefined ? options.guestsCanSeeGuests : true;
        // anyoneCanAddSelf = options && options.anyoneCanAddSelf !== undefined ? options.anyoneCanAddSelf : false;
        // guestsCanModify = options && options.guestsCanModify !== undefined ? options.guestsCanModify : true;

        return {
            title: title,
            start: start,
            end: end,
            location: location,
            description: description,
            // guests: guests,
            // sendInvites: sendInvites,
            color: color,
            reminders: reminders,
            guestsCanSeeGuests: guestsCanSeeGuests
        };
    }

}