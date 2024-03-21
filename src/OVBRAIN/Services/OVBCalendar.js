class OVBCalendar {

    static initialize() {
        if (DataUtils.isEmpty(this.calendar)) {
            this.calendar = GCService.getCalendar('OVB');
        }
    }

    static getCalendar() {
        this.initialize();
        return this.calendar;
    }

}
