class AddDocuments {
    
}

// // Check for documents
// function callButtonAdaugaDocumente(){
//   // Initializers
//     initialize_Sheets();
//     initialize_UI();
//     initialize_PersonFromContacte();

//   var rowTarget = contacteSheet.getCurrentCell().getRowIndex();
//   var sheetName = SpreadsheetApp.getActiveSheet().getName();

//   if(sheetName != "Contacte"){
//     ui.alert('EROARE: Nu esti pe sheet-ul Contacte.');
//     return;
//   }

//   if(rowTarget < 4 ){
//     ui.alert('EROARE: Randul selectat este din sectiunea de sus a tabelei.\nSUGESTIE: Selecteaza o persoana din tabel pentru a adauga documentele.');
//     return;
//   }
  
//   addDocument(rowTarget);
// }

// // Adauga documentul in excel
// function addDocument(row){
  
//   var numePrenume = "";
//   numePrenume = contacteSheet.getRange(row,indexC_numePrenume).getValue();

//   return;
//   var title = numePrenume;
//   var urlResponse;
//   try{
//     var files = DriveApp.searchFiles("title contains '"+title+"' ");
//     if(files!= null)
//     {
//       urlResponse = files.next().getUrl();

//       createUrlDocument(urlResponse, numePrenume, row);   
    
//   }} catch(error) {
//     let response = ui.alert(`Documente negasite pentru ${title}`,
//     "Posibile motive \n-documentele nu sunt in drive \n-numele de pe coloana nu coincide cu numele dosarului.\n\nDoriti sa adaugati fisierele acum?",ui.ButtonSet.YES_NO);
//     if(response == "YES"){
//       startHtmlDocuments();
//     } else {
//       return;
//     }
//   }
// }

// function startHtmlDocuments(){
//   let popuphtml = HtmlService.createHtmlOutputFromFile("html_Documents")
//   .setWidth(500)
//   .setHeight(700);
//   ui.showModalDialog(popuphtml, 'Adauga documentele');
// }

// function createUrlDocument(urlResponse, numePrenume, row){
//   contacteSheet.getRange(row, indexC_Document).setValue('=HYPERLINK("' + urlResponse + '"; "📁 '+ numePrenume + '")');
// }

// function makeDocumentFromHtml(f){
//   initialize_Sheets();
//   initialize_UI();
//   ui.alert(f);
//   // TO DO

// }

// // function addDocumentManualy(){

// //   var indexR_TARGET_CS = contacteSheet.getCurrentCell().getRowIndex();

// //   var sheet = SpreadsheetApp.getActiveSheet()

// //   if(sheet.getName() != 'Contacte') {
// //     ui.alert('EROARE: Nu esti pe sheet-ul Contacte');
// //     return;
// //   }
// //   var numePrenume = contacteSheet.getRange(row,indexC_numePrenume).getValue();
// //   var urlResponse = ui.prompt("Introdu link-ul folderului clientului: " + numePrenume);  

// //   contacteSheet.getRange(indexR_TARGET_CS, indexC_Document).setValue('=HYPERLINK("' + urlResponse + '"; "📁 '+ numePrenume + '")');
// // }

