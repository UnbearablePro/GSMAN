/** @class */
class UserEvent {

    constructor(event) {
        this.range = event.range;
        this.oldValue = event.oldValue;
        this.value = event.value;
        this.row = this.range.getRowIndex();
        this.col = this.range.getColumn();
        this.sheetName = this.range.getSheet().getName();
    }

    static initialize(event) {
        return this.constructor(event);
    }

}