/** 
 * SpreadSheet {Contacte}. 
 * @private
*/
ContacteSheet.sheet = null;
ContacteSheet.name = "Contacte";
ContacteSheet.headers = {
    NumePrenume: 1,
    Telefon: 2,
    Recomandator: 3,
    Status: 4,
    Data: 5,
    Detalii: 6,
    Profesie: 7,
    Document: 8,
    UltimaInteractiune: 9
};

ContacteSheet.indexes = {
    StartingDataRow: 7
}

ContacteSheet.status = {
    NESUNAT: "NeSunat",

    NURASPUNDE1: "NuRaspunde(1)",
    NURASPUNDE2: "NuRaspunde(2)",
    NURASPUNDE3: "NuRaspunde(3)",

    REVINPESTE: "RevinPeste",
    REVINEELEA: "RevineEl/Ea",

    REFUZTELEFON: "RefuzTelefon",
    NRINVALID: "NrInvalid",
    NRNECUNOSCUT: "NRNECUNOSCUT",
    DEJACLIENT: "DejaClient",

    ANALIZA: "Analiza",
    CONSULTANTA: "Consultanta",
    CONTRACT: "Contract",

    NUMAIRASPUNDE: "NuMaiRaspunde",
    ABSENTINTALNIRE: "AbsentIntalnire",
    REFUZOFERTA: "RefuzOferta",

    DEREPROGRAMATINTALNIRE: "DeReprogramatIntalnire",
    REVINCUOFERTAPANA: "RevinCuOfertaPana",

    POTENTIALCLIENT: "PotentialClient",
    POTENTIALCOLABORATOR: "PotentialColaborator",
    POTENTIALRECOMANDATOR: "PotentialRecomandator",

    CLIENT: "Client",
    SERVICE: "Service",
    CLIENTPIERDUT: "PIERDUTCLIENT",

    ABANDONEZ: "Abandonez",
    RESETEZSTATUSUL: "ResetezStatusul"

}
