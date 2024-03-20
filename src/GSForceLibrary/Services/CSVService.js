class CSVService {

    /**
     * @param {*} range 
     * @returns {String}
     */
    static getContentToCSVString(range) {
        var values = range.getValues();
        var csvContent = '';

        for (var i = 0; i < values.length; i++) {
            for (var j = 0; j < values[i].length; j++) {
                csvContent += values[i][j];

                if (j < values[i].length - 1) {
                    csvContent += ',';
                }
            }
            csvContent += '\n';
        }
        return csvContent;
    };

    static importContentFromCSV(range, content) {
        range.setValues(Utilities.parseCsv(content));
    }

    static parseCSV(csvData) {
        return Utilities.parseCsv(csvData);
    }

}