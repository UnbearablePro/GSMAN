class TimeMapper {

    static converHourAndMinuteToClockFormat(hour, minute) {
        hour = hour.toString();
        minute = minute.toString();
        if (hour.length != 2) {
            hour = "0" + hour;
        }
        if (minute.length != 2) {
            minute = "0" + minute;
        }

        return hour + ":" + minute;
    }
}