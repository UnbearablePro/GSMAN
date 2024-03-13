class FilterService {

    static buildCriteria(filterValues) {
        SpreadsheetApp.newFilterCriteria()
            .setHiddenValues(filterValues)
            .build();
    }

    static removeFilter(sheet) {
        sheet.getFilter().remove();
    }

}