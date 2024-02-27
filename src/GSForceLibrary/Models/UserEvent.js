/** @class */
class UserEvent {

    constructor(event, sheetName) {
        this.range = event.range;
        this.oldValue = event.oldValue;
        this.value = event.value;
        this.row = this.range.getRowIndex();
        this.col = this.range.getColumn();
        this.sheetName = sheetName;
    }

    static initialize(event) {
        return this.constructor(event);
    }

}