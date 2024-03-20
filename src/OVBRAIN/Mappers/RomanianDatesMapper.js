class RomanianDatesMapper {

    /**
     * @param {String} dateInput : Format (dd/MM/yyyy)
     * @returns 
     */
    static convertRomanianDateToDayMonthYear(dateInput) {
        // Split the date string by '/'
        const parts = dateInput.split('/');

        // Extract the day, month, and year
        const day = parseInt(parts[1], 10); // ParseInt with base 10 to ensure correct parsing
        const month = parseInt(parts[0], 10);
        const year = parseInt(parts[2], 10);

        return { day, month, year };
    }

    /**
     * 
     * @param {String} dateInput 
     */
    static isValidRomanianDateFormat(dateInput) {
        // Regular expression to match "MM/DD/YYYY" format
        const dateFormatRegex = /^\d{2}\/\d{2}\/\d{4}$/;

        return dateFormatRegex.test(dateInput);
    }

    static toRomanianDateFormat(dateInput) {
        return Utilities.formatDate(dateInput, Session.getScriptTimeZone(), 'dd/MM/yyyy');
    }

}