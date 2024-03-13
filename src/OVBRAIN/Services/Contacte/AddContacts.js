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