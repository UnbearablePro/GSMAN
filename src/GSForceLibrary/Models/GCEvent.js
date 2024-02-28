
class GCEvent {
    constructor(event) {
        this.event = event;
    }

    static of(event) {
        return this.constructor(event);
    }

    addGuest(email) {
        throw Error("Not implemented yet");
        //TODO: DataUtils.isMailFormat()
    }

    addGuests(emails) {
        throw Error("Not implemented yet");
        //TODO:
    }

    addPopupReminder(minutesBefore) {
        throw Error("Not implemented yet");
        this.event.addPopupReminder(minutesBefore);
    }

    addSmsReminder(minutesBefore) {
        throw Error("Not implemented yet");
        //TODO: Not Implemented yet
    }

    deleteEvent() {
        //TODO : see what is a tag ?
    }

    getDataCreated() {

    }

    getDescription() {

    }

    getGuestsList() {

    }

    getId() {

    }

    getLastUpdated() {

    }

    getPopupReminders() {

    }

    getTag(key) {

    }

    getTitle() {

    }

    getVisibility() {

    }

    isOwnedByMe() { }

    removeAllReminders() { }

    removeGuest(email) { }

    setColor(color) { }

    setDescription(description) { }

    setRecurrence(recurrence, startDate) { }

    setRecurrenceMultiple(recurrence, startTime, endTime) { }

    setTag(key, value) { }

    setTitle(title) { }

    setVisibility(visibility) { }


}