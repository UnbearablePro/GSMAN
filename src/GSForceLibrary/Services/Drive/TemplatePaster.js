class TemplatePaster {

    static createNewTemplateFrom(templateId, folderDestination, fileName, placeholders) {
        const templateSpreadsheet = SpreadsheetApp.openById('YOUR_TEMPLATE_SPREADSHEET_ID');
        //TODO: Not implemented yet
    }

    static reformat(templateRange, sheet) {
        // Get all the values, formulas, and formatting from the template sheet
        var values = templateRange.getValues();
        var formulas = templateRange.getFormulas();
        var backgrounds = templateRange.getBackgrounds();
        var fonts = templateRange.getFontColors();
        var fontWeights = templateRange.getFontWeights();
        var fontStyles = templateRange.getFontStyles();
        var horizontalAlignments = templateRange.getHorizontalAlignments();
        var verticalAlignments = templateRange.getVerticalAlignments();
        var borders = templateRange.getBorder(true, true, true, true, true, true);

        // Set the values, formulas, and formatting to the destination sheet
        sheet.getRange(1, 1, values.length, values[0].length).setValues(values);
        sheet.getRange(1, 1, formulas.length, formulas[0].length).setFormulas(formulas);
        sheet.getRange(1, 1, backgrounds.length, backgrounds[0].length).setBackgrounds(backgrounds);
        sheet.getRange(1, 1, fonts.length, fonts[0].length).setFontColors(fonts);
        sheet.getRange(1, 1, fontWeights.length, fontWeights[0].length).setFontWeights(fontWeights);
        sheet.getRange(1, 1, fontStyles.length, fontStyles[0].length).setFontStyles(fontStyles);
        sheet.getRange(1, 1, horizontalAlignments.length, horizontalAlignments[0].length).setHorizontalAlignments(horizontalAlignments);
        sheet.getRange(1, 1, verticalAlignments.length, verticalAlignments[0].length).setVerticalAlignments(verticalAlignments);
        sheet.getRange(1, 1, borders.length, borders[0].length).setBorder(true, true, true, true, true, true, borders, null);
    }
}