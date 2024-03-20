class JSDateUtils {

    static createJSDateFromDateAndTime(day, month, year, hour, minutes) {
        const jsDate = new Date(year, month - 1, day, hour, minutes);
        return jsDate;
    }

    static isJSDate(obj) {
        return obj instanceof Date;
    }

    static getJSDateAfterMinutes(inputDate, minutes) {
        if (this.isJSDate(inputDate)) {
            const newDate = new Date(inputDate.getTime() + minutes * 60000); // Convert minutes to milliseconds
            return newDate;
        } else {
            throw Error(`Input date ${inputDate} is not a JS Date object`);
        }
    }

    static now() {
        return new Date();
    }
}

