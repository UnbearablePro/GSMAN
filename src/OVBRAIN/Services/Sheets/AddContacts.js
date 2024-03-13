class AddContacts {

    static openAdaugaContacte() {
        const [httpName, title, width, height] = HtmlFiles.ADDCONTACTS;
        // @ts-expect-error
        Displayer.openHtmlSidebar(httpName, title, width, height, {});
    }

    static addContacts(recommandar, contacts) {
        let listOfContacts = [];

        let listOfRawContacts = StringUtils.splitLines(contacts);
        listOfRawContacts.forEach(element => {
            element = StringUtils.removeLeadingDigits(element);
            let match = element.match(/^([^\s–]+(?:\s+[^\s–]+)*)\s*[-–]\s*([\d\s]+)\s*(?:[-–]\s*(.*))?$/);

            if (match) {
                var name = match[1].trim();
                var phoneNumber = match[2].trim();
                var description = match[3] ? match[3].trim() : '';
                listOfContacts.push(Contact.of(name, phoneNumber, recommandar, description))
            } else {
                Displayer.warning(`Contactul: ${element} nu s-a potrivit formatului!`);
            }
        });

        ContacteSheet.addContacts(listOfContacts);
        Displayer.complete(`${listOfContacts.length} contacte adaugate cu success`);
    }



}
// function addContacts_record(recomandator, contacteList) {
//   var listOfContacte = splitLines(contacteList);
//   var result;
//   for (var i = 0; i < listOfContacte.length; i++) {
//     result = splitRec(listOfContacte[i].toString());
//     createNewContact(recomandator, result);
//   }
// }

// function splitLines(inputString) {
//   var splitString = inputString.split('\n');
//   return splitString;
// }

// function splitFilter(inputString) {
//   if (inputString.indexOf('–') == -1) {
//     return inputString.split('.')[1].split('-');
//   }
//   if (inputString.indexOf('-') == -1) {
//     return inputString.split('.')[1].split('–');
//   }
//   if (inputString.indexOf('-') < inputString.indexOf('–')) {
//     return inputString.split('.')[1].split('-');
//   }
//   return inputString.split('.')[1].split('–');
// }

// function splitRec(inputString) {
//   var splitStrings = splitFilter(inputString);

//   var nume = splitStrings[0].trim();
//   var telefon = splitStrings[1].trim();
//   var detalii = '';

//   if (splitStrings.length == 3) {
//     detalii = splitStrings[2].trim();
//   }

//   if (splitStrings.length > 3) {
//     for (var y = 3; y <= splitStrings.length; y++) {
//       detalii = detalii + splitStrings[y];
//     }
//   }

//   return { nume: nume, telefon: telefon, detalii: detalii };
// }


// function createNewContact(recomandator, cont) {
//   contacteSheet.insertRowBefore(4);
//   increment_contacteLength();
//   contacteSheet.getRange(4, indexC_SL).setValue(true);
//   contacteSheet.getRange(4, indexC_Star).setValue('⭐');
//   contacteSheet.getRange(4, indexC_numePrenume).setValue(cont.nume);
//   contacteSheet.getRange(4, indexC_Telefon).setValue(cont.telefon);
//   contacteSheet.getRange(4, indexC_Recomandator).setValue(recomandator);
//   contacteSheet.getRange(4, indexC_Status).setValue('Nesunat');
//   contacteSheet.getRange(4, indexC_Detalii).setValue(cont.detalii);
// }
