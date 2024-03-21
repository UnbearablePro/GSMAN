class JSDateUtils {

    static createJSDateFromDateAndTime(day, month, year, hour, minutes) {
        return new Date(year, month - 1, day, hour, minutes);
    }

    static isJSDate(obj) {
        return obj instanceof Date;
    }

    static getJSDateAfterMinutes(inputDate, minutes) {
        if (this.isJSDate(inputDate)) {
            return new Date(inputDate.getTime() + minutes * 60000); // Convert minutes to milliseconds
        } else {
            throw Error(`Input date ${inputDate} is not a JS Date object`);
        }
    }

    static now() {
        return new Date();
    }
}

