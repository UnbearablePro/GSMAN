// @ts-nocheck
class DateTimeMapper {

  /**
   * 
   * @param {*} dateInput 
   * @returns {DateTime}
   */
    static getLuxonDateFrom(dateInput) {

        /* dateInput is already a Luxon DateTime */
        if (DateTime.isDateTime(dateInput)) {
          return dateInput;
        }
    
        let convertedInput;
    
        /* dateInput is JS Date object */
        if (Object.prototype.toString.call(dateInput) === "[object Date]") {
          convertedInput = luxon.DateTime.fromJSDate(dateInput);
          if (convertedInput.isValid) {
            return convertedInput;
          }
        }
    
        /* dateInput is ISO Format */
        convertedInput = luxon.DateTime.fromISO(dateInput);
        if (convertedInput.isValid) {
          return convertedInput;
        }
    
        /* dateInput is a custom RomaniaDate Format */
        convertedInput = luxon.DateTime.fromFormat(dateInput, DateFormat.ROMANIADATE);
        if (convertedInput.isValid) {
          return convertedInput;
        }
    
        /* dateInput is a SQL format */
        convertedInput = luxon.DateTime.fromSQL(dateInput);
        if (convertedInput.isValid) {
          return convertedInput;
        }
        /* dateInput is a HTTP format */
        convertedInput = luxon.DateTime.fromHTTP(dateInput);
        if (convertedInput.isValid) {
          return convertedInput;
        }
        /* convert to JS date and then to Luxon date */
        convertedInput = new Date(dateInput);
        convertedInput = luxon.DateTime.fromJSDate(convertedInput);
        if (convertedInput.isValid) {
          return convertedInput;
        }
    
        throw new Error(`The date converted unsuccesfully for the date input : ${dateInput}`);
    }

    

}