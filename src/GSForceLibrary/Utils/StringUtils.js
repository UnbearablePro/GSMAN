class StringUtils {

    static addTwoStrings(str1, str2) {
        const num1 = parseInt(str1);
        const num2 = parseInt(str2);

        if (!isNaN(num1) && !isNaN(num2)) {
            return num1 + num2;
        } else {
            return 'Error: Both inputs must be convertible to integers.';
        }
    }

    static subtractTwoStrings(str1, str2) {
        const num1 = parseInt(str1);
        const num2 = parseInt(str2);

        if (!isNaN(num1) && !isNaN(num2)) {
            return num1 - num2;
        } else {
            return 'Error: Both inputs must be convertible to integers.';
        }
}   }