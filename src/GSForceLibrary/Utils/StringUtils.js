class StringUtils {

    static addTwoStrings(str1, str2) {
        const num1 = parseInt(str1);
        const num2 = parseInt(str2);

        if (!isNaN(num1) && !isNaN(num2)) {
            return num1 + num2;
        } else {
            throw new Error(`The two string provided for substract are not convertible to number format. String: ${num1} / ${num2}`)
        }
    }

    static subtractTwoStrings(str1, str2) {
        const num1 = parseInt(str1);
        const num2 = parseInt(str2);

        if (!isNaN(num1) && !isNaN(num2)) {
            return num1 - num2;
        } else {
            throw new Error(`The two string provided for substract are not convertible to number format. String: ${num1} / ${num2}`)
        }
    }

    static splitLines(inputString) {
        const splitedLines = inputString.split('\n');
        const result = splitedLines.filter(function(str) {
            return str.trim() !== "";
        })
        return result;
    }

    static removeLeadingDigits(inputString) {
        return inputString.replace(/^\d+\.\s*/, '');
    }
}