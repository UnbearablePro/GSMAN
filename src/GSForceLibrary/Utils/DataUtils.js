/**  
 * The DataUtils class provides utility functions for checking and manipulating data. 
*/
class DataUtils {

  /**
   * The function returns the input data if it is not empty, otherwise it returns null.
   * 
   * @param {*} data - The parameter "data" is a variable that represents some data that we want to check
   * if it is not empty.
   * @returns {data|null}
   */
  static getIfNotEmpty(data, defaultValue = null) {
    return (data == null || data === undefined || data == "" || data == " ") ? defaultValue : data;
  }

  static reuquireNotNull(data, message) {
    if (data == null || data === undefined || data == "" || data == " ") {
      throw new InvalidDataError(message);
    };
  }

  /**
   * The function checks if a given data is not empty.
   * @param {*} data - The parameter "data" is a variable that represents the data that we want to check if
   * it is not empty.
   * @returns {boolean}
   */
  static isNotEmpty(data) {
    return (data == null || data === undefined || data == "" || data == " ") ? false : true;
  }

  /**
   * The function checks if a given data is empty or not.
   * @param data - The parameter "data" is a variable that represents the value being checked for
   * emptiness.
   * @returns a boolean value indicating whether the given data is empty or not.
   */
  static isEmpty(data) {
    return (data == null || data === undefined || data == "" || data == " ");
  }

  /**
   * The function `mapArrayIntoKeyValueObject` takes an array of data and maps the values into a
   * key-value object, excluding any empty values.
   * @param dataArray - The `dataArray` parameter is an array of arrays. Each inner array represents a
   * key-value pair, where the first element is the key and the second element is the value.
   * @returns a mapped object where the keys are the values in the first column of the dataArray and
   * the values are the values in the second column of the dataArray.
   */
  static mapArrayIntoKeyValueObject(dataArray) {
    let mappedValues = {};

    for (var i = 1; i < dataArray.length; i++) {
      if (this.isNotEmpty(dataArray[i][0])) {
        mappedValues[dataArray[i][0]] = dataArray[i][1];
      }
    }
    return mappedValues;
  }

}
