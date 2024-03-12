class TellPartyService extends PropertiesDocumentService {

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

    static setAndGetNrContacte() {
        ContacteSheet.setAndGetNrContacte();
    }

    static setAndGetNrContacteShortList() {

    }

    static setAndGetNrClient() {

    }


}