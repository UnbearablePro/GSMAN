class Client extends Contact {

    /**
     * @param {Array<Contract>} contracte
     * @param {String} dataDeNastere
     */
    constructor(numePrenume, telefon, recomandator,
        status, data,  detalii, profesie, documente, 
        ultimaInteractiune, contracte, dataDeNastere) {

        super(numePrenume, telefon, recomandator,
            status, data, detalii, profesie,
            documente, ultimaInteractiune);
        this.contracte = contracte;
        this.dataDeNastere = dataDeNastere;
    }

    /**
     * @param {Contact} contact 
     * @param {Array<Contract>} contracte
     * @param {String} dataDeNastere
     * @returns {Client}
     */
    static fromContact(contact, contracte, dataDeNastere) {
        return new Client(contact.numePrenume,
            contact.telefon,
            contact.recomandator,
            contact.status,
            contact.data,
            contact.detalii,
            contact.profesie,
            contact.documente,
            contact.ultimaInteractiune,
            contracte,
            dataDeNastere);
    }
}