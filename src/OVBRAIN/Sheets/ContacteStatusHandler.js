class ContacteStatusHandler {

  static handleStatusEvent(event) {
    const {
      NESUNAT, NURASPUNDE1, NURASPUNDE2, NURASPUNDE3,
      REVINPESTE,
      REVINEELEA,
      REFUZTELEFON,
      NRINVALID,
      NRNECUNOSCUT,
      DEJACLIENT,
      ANALIZA,
      CONSULTANTA,
      CONTRACT,
      NUMAIRASPUNDE,
      ABSENTINTALNIRE,
      REFUZOFERTA,
      DEREPROGRAMATINTALNIRE,
      REVINCUOFERTAPANA,
      POTENTIALCLIENT,
      POTENTIALCOLABORATOR,
      POTENTIALRECOMANDATOR,
      SERVICE,
      CLIENT,
      CLIENTPIERDUT,
      ABANDONEZ,
      RESETEZSTATUSUL
    } = ContacteStatus;

    switch (event.value) {
      case NESUNAT: this.neSunat_(event); break;

      case NURASPUNDE1: this.nuRaspunde1_(event); break;
      case NURASPUNDE2: this.nuRaspunde2_(event); break;
      case NURASPUNDE3: this.nuRaspunde3_(event); break;

      case REVINPESTE: this.revin_(event); break;
      case REVINEELEA: this.revineElEa_(event); break;

      case REFUZTELEFON: this.refuzTelefon_(event); break;
      case NRINVALID: this.nrInvalid_(event); break;
      case NRNECUNOSCUT: this.nrNecunoscut_(event); break;
      case DEJACLIENT: this.dejaClient_(event); break;

      case ANALIZA: this.analiza_(event); break;
      case CONSULTANTA: this.consultanta_(event); break;
      case CONTRACT: this.contract_(event); break;

      case NUMAIRASPUNDE: this.nuMaiRaspunde_(event); break;
      case ABSENTINTALNIRE: this.absentIntalnire_(event); break;
      case REFUZOFERTA: this.refuzOferta_(event); break;

      case DEREPROGRAMATINTALNIRE: this.deReprogramatIntalnire_(event); break;
      case REVINCUOFERTAPANA: this.revinCuOfertaPana_(event); break;

      case POTENTIALCLIENT: this.potentialClient_(event); break;
      case POTENTIALCOLABORATOR: this.potentialColaborator_(event); break;
      case POTENTIALRECOMANDATOR: this.potentialRecomandator_(event); break;

      case SERVICE: this.service_(event); break;
      case CLIENT: this.client_(event); break;
      case CLIENTPIERDUT: this.clientPierdut_(event); break;

      case ABANDONEZ: this.abandonez_(event); break;
      case RESETEZSTATUSUL: this.resetezStatusul_(event); break;

      default: throw Error(`Status unknown: ${status}`);
    }
  };

  static getContacteValidationRuleFunction(statusValue) {
    const {
      NESUNAT,
      NURASPUNDE1,
      NURASPUNDE2,
      NURASPUNDE3,
      REVINPESTE,
      REVINEELEA,
      REFUZTELEFON,
      NRINVALID,
      NRNECUNOSCUT,
      DEJACLIENT,
      ANALIZA,
      CONSULTANTA,
      CONTRACT,
      NUMAIRASPUNDE,
      ABSENTINTALNIRE,
      REFUZOFERTA,
      DEREPROGRAMATINTALNIRE,
      REVINCUOFERTAPANA,
      POTENTIALCLIENT,
      POTENTIALCOLABORATOR,
      POTENTIALRECOMANDATOR,
      SERVICE,
      CLIENT,
      CLIENTPIERDUT,
      ABANDONEZ,
      RESETEZSTATUSUL
    } = ContacteStatus;

    switch (statusValue) {
      case NESUNAT: return [NESUNAT, NURASPUNDE1, REVINPESTE, REVINEELEA, REFUZTELEFON, NRINVALID, NRNECUNOSCUT, DEJACLIENT, ANALIZA, ABANDONEZ, RESETEZSTATUSUL];

      case NURASPUNDE1: return [NURASPUNDE1, NURASPUNDE2, REVINPESTE, REVINEELEA, REFUZTELEFON, NRNECUNOSCUT, DEJACLIENT, ANALIZA, ABANDONEZ, RESETEZSTATUSUL];
      case NURASPUNDE2: return [NURASPUNDE2, NURASPUNDE3, REVINPESTE, REVINEELEA, REFUZTELEFON, NRNECUNOSCUT, DEJACLIENT, ANALIZA, ABANDONEZ, RESETEZSTATUSUL];
      case NURASPUNDE3: return [NURASPUNDE3, REVINPESTE, REVINEELEA, REFUZTELEFON, NRNECUNOSCUT, DEJACLIENT, ANALIZA, ABANDONEZ, RESETEZSTATUSUL];

      case REVINPESTE: return [REVINPESTE, "RevinPesteDinNou", REFUZTELEFON, REVINEELEA, ANALIZA, NUMAIRASPUNDE, ABANDONEZ, RESETEZSTATUSUL];
      case REVINEELEA: return [REVINEELEA, REFUZTELEFON, REVINPESTE, ANALIZA, NUMAIRASPUNDE, ABANDONEZ, RESETEZSTATUSUL];

      case REFUZTELEFON: return [REFUZTELEFON, ANALIZA, RESETEZSTATUSUL];
      case NRINVALID: return [NRINVALID, RESETEZSTATUSUL];
      case NRNECUNOSCUT: return [NRNECUNOSCUT, REFUZTELEFON, DEJACLIENT, ANALIZA, ABANDONEZ, RESETEZSTATUSUL];
      case DEJACLIENT: return [DEJACLIENT, RESETEZSTATUSUL];

      case ANALIZA: return [ANALIZA, "ReprogrameazaAnaliza", NUMAIRASPUNDE, ABSENTINTALNIRE, REFUZOFERTA, CONSULTANTA, DEREPROGRAMATINTALNIRE, REVINCUOFERTAPANA, POTENTIALCLIENT, POTENTIALCOLABORATOR, POTENTIALRECOMANDATOR, ABANDONEZ, RESETEZSTATUSUL];
      case CONSULTANTA: return [CONSULTANTA, "ReprogrameazaConsultanta", NUMAIRASPUNDE, ABSENTINTALNIRE, REFUZOFERTA, CONTRACT, DEREPROGRAMATINTALNIRE, REVINCUOFERTAPANA, POTENTIALCLIENT, POTENTIALCOLABORATOR, POTENTIALRECOMANDATOR, ABANDONEZ, RESETEZSTATUSUL];
      case CONTRACT: return [CONTRACT, "ReprogrameazaContract", NUMAIRASPUNDE, ABSENTINTALNIRE, REFUZOFERTA, CLIENT, DEREPROGRAMATINTALNIRE, REVINCUOFERTAPANA, POTENTIALCLIENT, POTENTIALCOLABORATOR, POTENTIALRECOMANDATOR, ABANDONEZ, RESETEZSTATUSUL];

      case NUMAIRASPUNDE: return [NUMAIRASPUNDE, ANALIZA, CONSULTANTA, CONTRACT, DEREPROGRAMATINTALNIRE, ABANDONEZ, RESETEZSTATUSUL];
      case ABSENTINTALNIRE: return [ABSENTINTALNIRE, ANALIZA, CONSULTANTA, CONTRACT, NUMAIRASPUNDE, REFUZOFERTA, DEREPROGRAMATINTALNIRE, ABANDONEZ, RESETEZSTATUSUL];
      case REFUZOFERTA: return [REFUZOFERTA, CONSULTANTA, CONTRACT, POTENTIALCLIENT, POTENTIALCOLABORATOR, POTENTIALRECOMANDATOR, ABANDONEZ, RESETEZSTATUSUL];

      case DEREPROGRAMATINTALNIRE: return [DEREPROGRAMATINTALNIRE, ANALIZA, CONSULTANTA, CONTRACT, NUMAIRASPUNDE, REFUZOFERTA, ABANDONEZ, RESETEZSTATUSUL];
      case REVINCUOFERTAPANA: return [REVINCUOFERTAPANA, CONSULTANTA, CONTRACT, NUMAIRASPUNDE, POTENTIALCLIENT, POTENTIALCOLABORATOR, POTENTIALRECOMANDATOR, REFUZOFERTA, ABANDONEZ, RESETEZSTATUSUL];

      case SERVICE: return [SERVICE, "ReprogrameazaService", CLIENT, CONTRACT, CLIENTPIERDUT, RESETEZSTATUSUL];
      case CLIENT: return [CLIENT, SERVICE, DEREPROGRAMATINTALNIRE, CLIENTPIERDUT, POTENTIALCOLABORATOR, REFUZOFERTA, RESETEZSTATUSUL];
      case CLIENTPIERDUT: return [CLIENTPIERDUT, CLIENT, CONTRACT, SERVICE, RESETEZSTATUSUL];

      case POTENTIALCLIENT: return [POTENTIALCLIENT, CONSULTANTA, CONTRACT, NUMAIRASPUNDE, POTENTIALCOLABORATOR, POTENTIALRECOMANDATOR, REFUZOFERTA, ABANDONEZ, RESETEZSTATUSUL];
      case POTENTIALCOLABORATOR: return [POTENTIALCOLABORATOR, ANALIZA, CONSULTANTA, CONTRACT, SERVICE, NUMAIRASPUNDE, REFUZOFERTA, POTENTIALCLIENT, POTENTIALRECOMANDATOR, ABANDONEZ, RESETEZSTATUSUL];
      case POTENTIALRECOMANDATOR: return [POTENTIALCLIENT, POTENTIALCOLABORATOR, ANALIZA, CONSULTANTA, CONTRACT, SERVICE, NUMAIRASPUNDE, REFUZOFERTA, ABANDONEZ, RESETEZSTATUSUL];

      case ABANDONEZ: return [ABANDONEZ, RESETEZSTATUSUL];
      case RESETEZSTATUSUL: return resetStatus();

      // FIXME
      default: return SpreadshDeetApp.newDataValidation().requireValueInList([value, RESETEZSTATUSUL]).setAllowInvalid(false).build();
    }
  }


}