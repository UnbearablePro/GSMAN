const ContacteStatusColorFormat = statusValue => {
    const START = [ColorPallet.WHITE, ColorPallet.GREEN];
    const DEAD = [ColorPallet.WHITE, ColorPallet.GREY];
    const INCERT = [ColorPallet.WHITE, ColorPallet.LIGHTGREEN];
    const REMINDER = [ColorPallet.BLACK, ColorPallet.YELLOW];
    const INTALNIRE = [ColorPallet.WHITE, ColorPallet.BLUE];
    const CLIENT = [ColorPallet.WHITE, ColorPallet.LIGHTPURPLE];
    const LOST = [ColorPallet.WHITE, ColorPallet.RED];
    const OPORTUN = [ColorPallet.WHITE, ColorPallet.PURPLE];

    switch (statusValue) {
        case ContacteStatus.NESUNAT: return START;
    
        case ContacteStatus.NURASPUNDE1: return INCERT;
        case ContacteStatus.NURASPUNDE2: return INCERT;
        case ContacteStatus.NURASPUNDE3: return DEAD;

        case ContacteStatus.REVINPESTE: return REMINDER;
        case ContacteStatus.REVINEELEA: return REMINDER;

        case ContacteStatus.REFUZTELEFON: return DEAD;
        case ContacteStatus.NRINVALID: return DEAD;
        case ContacteStatus.NRNECUNOSCUT: return DEAD;
        case ContacteStatus.DEJACLIENT: return DEAD;

        case ContacteStatus.ANALIZA: return INTALNIRE;
        case ContacteStatus.CONSULTANTA: return INTALNIRE;
        case ContacteStatus.CONTRACT: return INTALNIRE;

        case ContacteStatus.NUMAIRASPUNDE: return DEAD;
        case ContacteStatus.ABSENTINTALNIRE: return DEAD;
        case ContacteStatus.REFUZOFERTA: return DEAD;

        case ContacteStatus.DEREPROGRAMATINTALNIRE: return REMINDER;
        case ContacteStatus.REVINCUOFERTAPANA: return OPORTUN;

        case ContacteStatus.SERVICE: return CLIENT;
        case ContacteStatus.CLIENT: return CLIENT;
        case ContacteStatus.CLIENTPIERDUT: return LOST;

        case ContacteStatus.POTENTIALCLIENT: return OPORTUN;
        case ContacteStatus.POTENTIALCOLABORATOR: return OPORTUN;
        case ContacteStatus.POTENTIALRECOMANDATOR: return OPORTUN;

        case ContacteStatus.ABANDONEZ: return DEAD;

        case ContacteStatus.REVINPESTEDINOU: return REMINDER;
        case ContacteStatus.REVINEELEADINNOU: return REMINDER;

        case ContacteStatus.REPROGRAMEAZAANALIZA: return INTALNIRE;
        case ContacteStatus.REPROGRAMEAZACONSULTANTA: return INTALNIRE;
        case ContacteStatus.REPROGRAMEAZACONTRACT: return INTALNIRE;
        case ContacteStatus.REPROGRAMEAZASERVICE: return INTALNIRE;
    }
}
    
    

