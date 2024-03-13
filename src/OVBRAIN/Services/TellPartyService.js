class TellPartyService extends PropertiesDocumentService {

    static startTellParty() {
        let teluri = this.askForTells();
        Lug.progress(`Teluri: ${teluri}`);
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
        for (const key in TellPartyProperties) {
            switch (key) {
                // case TellPartyProperties.NRCONTACTE: defaultProperties[TellPartyProperties[key]] = this.setAndGetNrContacte(); break;
                // case TellPartyProperties.NRCONTACTESHORTLIST: defaultProperties[TellPartyProperties[key]] = this.setAndGetNrContacteShortList(); break;
                // case TellPartyProperties.NrClienti: defaultProperties[TellPartyProperties[key]] = this.setAndGetNrClient(); break;
                // case TellPartyProperties.NrColaboratoriNoi: defaultProperties[TellPartyProperties[key]] = this.setAndGetNrContacte(); break;
                // case TellPartyProperties.NRCONTACTE: defaultProperties[TellPartyProperties[key]] = this.setAndGetNrContacte(); break;
                default: defaultProperties[TellPartyProperties[key]] = "0"; break;
            }
        }

        PropertiesDocumentService.setByList(defaultProperties);
    }

    static setTellPartyTel(teluri) {
        PropertiesDocumentService.set(TellPartyProperties.ANALIZETEL, teluri[0]);
        PropertiesDocumentService.set(TellPartyProperties.CONSULTANTETEL, teluri[1]);
        PropertiesDocumentService.set(TellPartyProperties.CONTRACTETELL, teluri[2]);
        PropertiesDocumentService.set(TellPartyProperties.ServiceTel, teluri[3]);

        ContacteSheet.updateTeluri(teluri[0], teluri[1], teluri[2], teluri[3]);
    }

    static incTelefoaneSunate() {
        Lug.build("Incrementing telefoane sunate");
        
        let actualValue = PropertiesDocumentService.get(TellPartyProperties.TELEFOANESUNATE);
        let newValue = StringUtils.addTwoStrings(actualValue, "1");
        PropertiesDocumentService.set(TellPartyProperties.TELEFOANESUNATE, newValue);
        ContacteSheet.updateTelefoaneSunate(newValue);
    }

    static incTelefoaneRaspunse() {
        Lug.build("Incrementing telefoane raspunse");

        let actualValue = PropertiesDocumentService.get(TellPartyProperties.TELEFOANERASPUNSE);
        let newValue = StringUtils.addTwoStrings(actualValue, "1");
        PropertiesDocumentService.set(TellPartyProperties.TELEFOANERASPUNSE, newValue);
        ContacteSheet.updateTelefoaneRaspunse(newValue);
    }

    static incAnalizeProg() {
        PropertiesDocumentService.increment(TellPartyProperties.AnalizeStabilite);
    }

    static incAnalizeTel() {
        PropertiesDocumentService.increment(TellPartyProperties.ANALIZETEL);   
    }

    static incConsultanteProg() {

    }

    static incConsultanteTel() {
        
    }

    static incContracteProg() {

    }

    static incContracteTel() {
        
    }

    static incServiceProg() {

    }

    static incServiceTel() {
        
    }

    static setAndGetNrContacte() {
        ContacteSheet.setAndGetNrContacte();
    }

    static setAndGetNrContacteShortList() {

    }

    static setAndGetNrClient() {

    }


}