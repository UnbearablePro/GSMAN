class ContacteEventStatusRouter {

    static routeStatusEvent(event) {
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
        } = ContacteStatus;
        const service = ContacteStatusService;
    
        switch (event.value) {
          case NESUNAT: service.neSunat(event); break;
    
          case NURASPUNDE1: service.nuRaspunde1(event); break;
          case NURASPUNDE2: service.nuRaspunde2(event); break;
          case NURASPUNDE3: service.nuRaspunde3(event); break;
    
          case REVINPESTE: service.revin(event); break;
          case REVINEELEA: service.revineElEa(event); break;
    
          case REFUZTELEFON: service.refuzTelefon(event); break;
          case NRINVALID: service.nrInvalid(event); break;
          case NRNECUNOSCUT: service.nrNecunoscut(event); break;
          case DEJACLIENT: service.dejaClient(event); break;
    
          case ANALIZA: service.analiza(event); break;
          case CONSULTANTA: service.consultanta(event); break;
          case CONTRACT:service.contract_(event); break;
    
          case NUMAIRASPUNDE: service.nuMaiRaspunde(event); break;
          case ABSENTINTALNIRE: service.absentIntalnire(event); break;
          case REFUZOFERTA: service.refuzOferta(event); break;
    
          case DEREPROGRAMATINTALNIRE: service.deReprogramatIntalnire(event); break;
          case REVINCUOFERTAPANA: service.revinCuOfertaPana(event); break;
    
          case POTENTIALCLIENT: service.potentialClient(event); break;
          case POTENTIALCOLABORATOR: service.potentialColaborator(event); break;
          case POTENTIALRECOMANDATOR: service.potentialRecomandator(event); break;
    
          case SERVICE: service.service(event); break;
          case CLIENT: service.client_(event); break;
          case CLIENTPIERDUT: service.clientPierdut(event); break;
    
          case ABANDONEZ: service.abandonez(event); break;
    
          default: throw Error(`Status unknown: ${event.value}`);
        }
      };
    
}

