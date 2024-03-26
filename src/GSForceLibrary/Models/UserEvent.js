/** @class */
class UserEvent {

    constructor(range, oldValue, value, row, col) {
        this.range = range;
        this.oldValue = oldValue;
        this.value = value;
        this.row = row
        this.col = col;
    }

    static fromEditEvent(event) {
        return new this(event.range, event.oldValue, event.value, event.range.getRowIndex(), event.range.getColumn());
    }

    restore() {
        this.range.setValue(this.oldValue);
    }
}