class MeetingService {

    static openMeetingFromStatusEvent(event) {
        let c = Contact.getContactFrom(event.row);

        const properties = {
            numePrenume: c.numePrenume,
            telefon: c.telefon,
            recomandator: c.recomandator,
            row: event.row,
            oldValue: event.oldValue
        }

        this.openMeeting(properties);
    }

    static openMeeting(properties) {
        const [httpName, title, width, height] = HtmlFiles.PROGRAMMEETING;
        // @ts-expect-error
        Displayer.openHtmlPopup(httpName, title, width, height, properties);
    }

    static setMeetingFromStatusEvent(row, lastValue, numePrenume, day, month, year, hour, minute, details, meetingType) {
        Lug.build(`Creating meeting ${meetingType} from status event for ${numePrenume} on ${day}/${month}/${year} at ${hour}:${minute} ...`);

        const c = Contact.getContactFrom(row);
        if (c.numePrenume != numePrenume) {
            throw Error(`Nume prenume from contact is not equal to nume prenume from html event: ${c.numePrenume} != ${numePrenume}`);
        }
        GCMeeting.createMeeting(numePrenume, day, month, year, hour, minute, details, meetingType);

        Lug.progress(`${meetingType} meeting created successfully!`);
    }


    

}

