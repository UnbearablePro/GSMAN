class Contract {
    
    /**
     * @param {String} telefon 
     * @param {String} numePrenume 
     * @param {String} dataIncepere 
     * @param {String} companie 
     * @param {String} produs 
     * @param {String} suma 
     * @param {String} unitati 
     * @param {String} detalii 
     * @param {String} documente 
     */
    constructor(telefon, numePrenume, dataIncepere, companie, produs, suma, unitati, detalii, documente) {
        this.telefon = telefon;
        this.numePrenume = numePrenume;
        this.dataIncepere = dataIncepere;
        this.companie = companie;
        this.produs = produs;
        this.suma = suma;
        this.unitati = unitati;
        this.detalii = detalii;
        this.documente = documente;
    }
}