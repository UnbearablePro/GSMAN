
class GCEvent {

    /**
     * @param {*} title 
     * @param {*} start 
     * @param {*} end 
     * @param {*} description 
     * @param {*} emailReminder 
     * @param {*} popupReminder 
     * @param {*} color 
     * @param {*} location 
     * @param {*} guests 
     * @param {*} guestsCanSeeGuests 
     * @param {*} sendInvites 
     * @param {*} anyoneCanAddSelf 
     * @param {*} guestsCanModify 
     */
    constructor(title, start, end, description, emailReminder, popupReminder, color, location, guests, guestsCanSeeGuests, sendInvites, anyoneCanAddSelf, guestsCanModify) {

        this.title = title;
        this.start = start;
        this.end = end;
        this.description = description;
        this.color = color;
        this.emailReminder = emailReminder;
        this.popupReminder = popupReminder;
        this.location = location;
        this.guests = guests;
        this.guestsCanSeeGuests = guestsCanSeeGuests;
        this.guestsCanModify = guestsCanModify;
        this.anyoneCanAddSelf = anyoneCanAddSelf;
        this.sendInvites = sendInvites;
        
    }

    static of(event) {
        throw Error(`Not implemented yet`);
        return new this();
    }

}