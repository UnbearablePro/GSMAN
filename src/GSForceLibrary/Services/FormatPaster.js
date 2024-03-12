class FormatPaster {

    static copyFormat() {
        var sourceSpreadsheet  = SpreadsheetApp.openById('1pZz9arl4ISsnNiEu7sfFsg6INHNteFutXEp73XIJfuA');
        var sourceSheet = sourceSpreadsheet .getSheetByName('Contacte');
        var sourceRange = sourceSheet.getRange('A1:I40');

        // Destination spreadsheet and range
        var destSpreadsheet = SpreadsheetApp.openById('1QIXQstQ3jWfOBkaHt9baycbxmmcJIQXvVZf0Sp3cVTo');
        var destSheet = destSpreadsheet.getSheetByName('Contacte');
        var destRange = destSheet.getRange('A1:I40');

        // Get the rich text values (format and colors) from the source range
        var richText = sourceRange.getRichTextValues();
        console.log(richText);
        destRange.setRichTextValues(richText);
        

        // Apply the rich text values to the destination range
        
    }
}