class FilteringService {

    static openFilteringContacteByStatus() {
        const [httpName, title, width, height] = HtmlFiles.CONTACTE_FILTERS;

        Displayer.openHtmlPopup(httpName, title, width, height);
    }

// function callButtonFiltre(){
//   HtmlUtils.openHtmlPopup("5.CONTROL_Filters_HTML", 250, 300, "Seteaza filtrul");
// }

// function catchResponseFiltre(filterName) {
//   Logger.log(`Filter response catch succesfully. Filter choice ${filterName}`);
//   filter_Choose(filterName);
// }

// function filter_Choose(filterName) {

//   switch (filterName){
//     case "ShortList": filter_set(["NuRaspunde(3)","RefuzTelefon","NrInvalid","AbsentIntalnire","Abandonez","RefuzOferta","RenuntatPlan","Client","POTENTIALCLIENT","POTENTIALCOLABORATOR","SeMaiGandestePana"]); break;
    
//     case "Programari": filter_set(["Nesunat","NuRaspunde(1)","NuRaspunde(2)","NuRaspunde(3)","RefuzTelefon","NrInvalid","AbsentIntalnire","RevinPeste","RevineEl/Ea","Abandonez","RefuzOferta","RenuntatPlan","Client","POTENTIALCLIENT","POTENTIALCOLABORATOR","SeMaiGandestePana"]); break;

//     case "Oportuni": ui.alert("Neimplemented"); break;//TODO

//     case "Clienti": filter_set(["Nesunat","NuRaspunde(1)","NuRaspunde(2)","NuRaspunde(3)","RefuzTelefon","NrInvalid","AbsentIntalnire","RevinPeste","RevineEl/Ea","Abandonez","RefuzOferta","Prog.Analiza","Prog.Consultanta","Prog.Contract","Prog.Service","POTENTIALCLIENT","DeProgramatIntalnire","DeReprogramat"]); break;
    
//     case "Remindere": filter_set(["Nesunat","NuRaspunde(1)","NuRaspunde(2)","NuRaspunde(3)","RefuzTelefon","NrInvalid","AbsentIntalnire","Abandonez","RefuzOferta","RenuntatPlan","Prog.Analiza","Prog.Consultanta","Prog.Contract","Prog.Service","Client","POTENTIALCOLABORATOR"]); break;
    
//     case "StergeFiltru": removeFilter(); break;
//   }
// }

// // Remove filters
// function removeFiltre(){
//   contacteSheet.getFilter().remove();
// }

// // Set the filters
// function filter_set(filterValues){

//   // Takes the range of the filter
//   let maxRowNumber = contacteSheet.getLastRow();
//   var range = contacteSheet.getRange(4,1,maxRowNumber,10); //TODO: inlocuiesc contactelength cu lungimea excelului


//   // Checks if a filter already exists and remove it
//   if (range.getFilter()!=null) {
//     range.getFilter().remove();
//   }
  
//   // Creating the criteria
//   var filter = range.createFilter();
//   var criteria = SpreadsheetApp.newFilterCriteria()
//     .setHiddenValues(filterValues)
//     .build();

// // Apply the filter to Contacte Sheet
//   filter.setColumnFilterCriteria(indexC_Status,criteria);
// }






}