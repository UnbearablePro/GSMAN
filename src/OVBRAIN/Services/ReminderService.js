class ReminderService {

    static openReminderFromStatusEvent(event) {
        let c = Contact.getContactFrom(event.row);
        const [httpName, title, width, height] = HtmlFiles.REMINDER;
        // @ts-expect-error
        Displayer.openHtmlPopup(httpName, title, width, height, {});

        const properties = {
            numePrenume : c.numePrenume,
            telefon : c.telefon,
            recomandator : c.recomandator,
            status : event.value
        }
        // @ts-expect-error
        Displayer.openHtmlPopup(httpName, title, width, height, properties);
    }

}