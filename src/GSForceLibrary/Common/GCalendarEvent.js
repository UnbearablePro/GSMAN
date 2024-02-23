/** @class */
class GCalendarEvent {
    constructor(event) {
        this.range = event.range;
        this.oldValue = event.oldValue;
        this.value = event.value;
        this.row = this.range.getRowIndex();
        this.col = this.range.getColumn();
    }
    static initialize(event) {
        return this.constructor(event);
    }
}