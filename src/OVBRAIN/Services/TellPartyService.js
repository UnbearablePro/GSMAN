class CentralizareService extends PropertiesDocumentService {

    static startTellParty() {
        let teluri = this.askForTells();
        Lug.progress(`TELL PARTY: Teluri stabilite ${teluri}`);
        this.setTellPartyTel(teluri);
        this.setDefaultTellPartyValues();

        Displayer.complete("Success la telefoane", "Start TELL PARTY!!!");
    }

    static askForTells() {
        let analize = Displayer.inputField('Incepe tellParty', 'Seteaza tel Anlize:');
        let consultante = Displayer.inputField('Incepe tellParty', 'Seteaza tel Consultante:');
        let contracte = Displayer.inputField('Incepe tellParty', 'Seteaza tel Contracte:');
        let service = Displayer.inputField('Incepe tellParty', 'Seteaza tel Serviceuri:');
        this.checkForTellPartyValues_(analize, consultante, contracte, service);

        return [analize, consultante, contracte, service];
    }

    static checkForTellPartyValues_(analize, consultante, contracte, service) {
        analize = DataUtils.getIfValidPositiveNumber(analize, 0);
        consultante = DataUtils.getIfValidPositiveNumber(consultante, 0);
        contracte = DataUtils.getIfValidPositiveNumber(contracte, 0);
        service = DataUtils.getIfValidPositiveNumber(service, 0);

        return [analize, consultante, contracte, service];
    }

    //TODO: not finished
    static setDefaultTellPartyValues() {
        const defaultProperties = {};
        for (const key in CentralizareProperties) {
            switch (key) {
                // case TellPartyProperties.NRCONTACTE: defaultProperties[TellPartyProperties[key]] = this.setAndGetNrContacte(); break;
                // case TellPartyProperties.NRCONTACTESHORTLIST: defaultProperties[TellPartyProperties[key]] = this.setAndGetNrContacteShortList(); break;
                // case TellPartyProperties.NrClienti: defaultProperties[TellPartyProperties[key]] = this.setAndGetNrClient(); break;
                // case TellPartyProperties.NrColaboratoriNoi: defaultProperties[TellPartyProperties[key]] = this.setAndGetNrContacte(); break;
                // case TellPartyProperties.NRCONTACTE: defaultProperties[TellPartyProperties[key]] = this.setAndGetNrContacte(); break;
                default: defaultProperties[CentralizareProperties[key]] = "0"; break;
            }
        }

        PropertiesDocumentService.setByList(defaultProperties);
    }

    static setTellPartyTel(teluri) {
        PropertiesDocumentService.set(CentralizareProperties.ANALIZE_TEL, teluri[0]);
        PropertiesDocumentService.set(CentralizareProperties.CONSULTANTE_TEL, teluri[1]);
        PropertiesDocumentService.set(CentralizareProperties.CONSULTANTE_TEL, teluri[2]);
        PropertiesDocumentService.set(CentralizareProperties.SERVICE_TEL, teluri[3]);

        ContacteSheet.updateTeluri(teluri[0], teluri[1], teluri[2], teluri[3]);
    }

    static incIntalnire(meetingType) {
        switch (meetingType) {
            case ContacteStatus.ANALIZA: this.incAnalizeProg(); break;
            case ContacteStatus.CONSULTANTA: this.incConsultanteProg(); break;
            case ContacteStatus.CONTRACT: this.incContracteProg(); break;
            case ContacteStatus.SERVICE: this.incServiceProg(); break;
        }
    }

    static incTelefoaneSunate() {
        Lug.build("Incrementing telefoane sunate");

        let actualValue = PropertiesDocumentService.get(CentralizareProperties.TELEFOANE_SUNATE);
        let newValue = StringUtils.addTwoStrings(actualValue, "1");
        PropertiesDocumentService.set(CentralizareProperties.TELEFOANE_SUNATE, newValue);
        ContacteSheet.updateTelefoaneSunate(newValue);
    }

    static incTelefoaneRaspunse() {
        Lug.build("Incrementing telefoane raspunse");

        let actualValue = PropertiesDocumentService.get(CentralizareProperties.TELEFOANE_RASPUNSE);
        let newValue = StringUtils.addTwoStrings(actualValue, "1");
        PropertiesDocumentService.set(CentralizareProperties.TELEFOANE_RASPUNSE, newValue);
        ContacteSheet.updateTelefoaneRaspunse(newValue);
    }

    static incAnalizeProg() {
        PropertiesDocumentService.increment(CentralizareProperties.ANALIZE_STABILITE);
    }
    static incConsultanteProg() {
        PropertiesDocumentService.increment(CentralizareProperties.CONSULTANTE_STABILITE);
    }
    static incContracteProg() {
        PropertiesDocumentService.increment(CentralizareProperties.CONTRACTE_STABILITE);
    }
    static incServiceProg() {
        PropertiesDocumentService.increment(CentralizareProperties.SERVICE_STABILITE);
    }

    static incAnalizeTinute() {
        PropertiesDocumentService.increment(CentralizareProperties.ANALIZE_TINUTE);
    }
    static incConsultanteTinute() {
        PropertiesDocumentService.increment(CentralizareProperties.CONSULTANTE_TINUTE);
    }
    static incContracteTinute() {
        PropertiesDocumentService.increment(CentralizareProperties.CONTRACTE_TINUTE);
    }
    static incServiceTinute() {
        PropertiesDocumentService.increment(CentralizareProperties.SERVICE_TINUTE);
    }

    static setAndGetNrContacte() {
        ContacteSheet.setAndGetNrContacte();
    }

    static setAndGetNrContacteShortList() {

    }

    static setAndGetNrClient() {

    }


}