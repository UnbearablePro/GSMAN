class MeetingService {

    static openMeetingFromStatusEvent(event) {
        let c = Contact.getContactFrom(event.row);

        const properties = {
            numePrenume: c.numePrenume,
            telefon: c.telefon,
            recomandator: c.recomandator,
            status: event.value,
            index: event.row
        }

        this.openMeeting(properties);
    }

    static openMeeting(properties) {
        const [httpName, title, width, height] = HtmlFiles.PROGRAMMEETING;
        // @ts-expect-error
        Displayer.openHtmlPopup(httpName, title, width, height, properties);
    }

    static programMeeting(type, date, hour, details, reminder) {
        OVBCalendar.createMeeting(type, date, hour, details, reminder); 
    }

    static programMeetingFromStatusEvent(event, date, hour, details, reminder) {
        this.programMeeting(event.value, date, hour, details, reminder);

        let contact = Contact.getContactFrom(event.row);
        let isChangedThisWeek = contact.isLastInteractionThisWeek();

        if (isChangedThisWeek == false) {
            PropertiesDocumentService.increment(TellPartyProperties.TELEFOANESUNATE);
            PropertiesDocumentService.increment(TellPartyProperties.TELEFOANERASPUNSE);
        }

        ContacteSheet.setStatusDataValidation(event.range, ContacteStatus.ANALIZA);
        PropertiesDocumentService.increment(TellPartyProperties.TELEFOANERASPUNSE);
        ContacteSheet.updateInteractionDate(event.row);
    }


}

