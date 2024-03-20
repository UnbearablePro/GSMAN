class ContacteEventStatusRouter {

  /**
   * @param {UserEvent} event 
   */
  static routeStatusEvent(event) {
    const service = ContacteStatusService;

    switch (event.value) {
      case ContacteStatus.NESUNAT: service.neSunat(event); break;

      case ContacteStatus.NURASPUNDE1: service.nuRaspunde1(event); break;
      case ContacteStatus.NURASPUNDE2: service.nuRaspunde2(event); break;
      case ContacteStatus.NURASPUNDE3: service.nuRaspunde3(event); break;

      case ContacteStatus.REVINPESTE: service.revin(event); break;
      case ContacteStatus.REVINEELEA: service.revineElEa(event); break;

      case ContacteStatus.REFUZTELEFON: service.refuzTelefon(event); break;
      case ContacteStatus.NRINVALID: service.nrInvalid(event); break;
      case ContacteStatus.NRNECUNOSCUT: service.nrNecunoscut(event); break;
      case ContacteStatus.DEJACLIENT: service.dejaClient(event); break;

      case ContacteStatus.ANALIZA: service.analiza(event); break;
      case ContacteStatus.CONSULTANTA: service.consultanta(event); break;
      case ContacteStatus.CONTRACT: service.contract_(event); break;

      case ContacteStatus.NUMAIRASPUNDE: service.nuMaiRaspunde(event); break;
      case ContacteStatus.ABSENTINTALNIRE: service.absentIntalnire(event); break;
      case ContacteStatus.REFUZOFERTA: service.refuzOferta(event); break;

      case ContacteStatus.DEREPROGRAMATINTALNIRE: service.deReprogramatIntalnire(event); break;
      case ContacteStatus.REVINCUOFERTAPANA: service.revinCuOfertaPana(event); break;

      case ContacteStatus.POTENTIALCLIENT: service.potentialClient(event); break;
      case ContacteStatus.POTENTIALCOLABORATOR: service.potentialColaborator(event); break;
      case ContacteStatus.POTENTIALRECOMANDATOR: service.potentialRecomandator(event); break;

      case ContacteStatus.SERVICE: service.service(event); break;
      case ContacteStatus.CLIENT: service.client_(event); break;
      case ContacteStatus.CLIENTPIERDUT: service.clientPierdut(event); break;

      case ContacteStatus.ABANDONEZ: service.abandonez(event); break;

      case ContacteStatus.REVINPESTEDINOU : service.revinPesteDinNou(event); break;
      case ContacteStatus.REVINEELEADINNOU : service.revinPesteDinNou(event); break;

      case ContacteStatus.REPROGRAMEAZAANALIZA : service.reprogrameazaAnaliza(event); break;
      case ContacteStatus.REPROGRAMEAZACONSULTANTA : service.reprogrameazaConsultanta(event); break;
      case ContacteStatus.REPROGRAMEAZACONTRACT : service.reprogrameazaContract(event); break;
      case ContacteStatus.REPROGRAMEAZASERVICE : service.reprogrameazaService(event); break;

      default: throw Error(`Status unknown: ${event.value}`);
    }
  };

}

