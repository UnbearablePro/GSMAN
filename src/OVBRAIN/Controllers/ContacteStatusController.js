class ContacteStatusController {


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

        const service = ContacteStatusService;
    
        switch (event.value) {
          case NESUNAT: service.neSunat(event); break;
    
          case NURASPUNDE1: service.nuRaspunde1(event); break;
          case NURASPUNDE2: service.nuRaspunde2(event); break;
          case NURASPUNDE3: service.nuRaspunde3(event); break;
    
          case REVINPESTE: service.revin(event); break;
          case REVINEELEA: service.revineElEa(event); break;
    
          case REFUZTELEFON: service.refuzTelefon_(event); break;
          case NRINVALID: service.nrInvalid_(event); break;
          case NRNECUNOSCUT: service.nrNecunoscut_(event); break;
          case DEJACLIENT: service.dejaClient_(event); break;
    
          case ANALIZA: service.analiza_(event); break;
          case CONSULTANTA: service.consultanta_(event); break;
          case CONTRACT:service.contract_(event); break;
    
          case NUMAIRASPUNDE: service.nuMaiRaspunde_(event); break;
          case ABSENTINTALNIRE: service.absentIntalnire_(event); break;
          case REFUZOFERTA: service.refuzOferta_(event); break;
    
          case DEREPROGRAMATINTALNIRE: service.deReprogramatIntalnire_(event); break;
          case REVINCUOFERTAPANA: service.revinCuOfertaPana_(event); break;
    
          case POTENTIALCLIENT: service.potentialClient_(event); break;
          case POTENTIALCOLABORATOR: service.potentialColaborator_(event); break;
          case POTENTIALRECOMANDATOR: service.potentialRecomandator_(event); break;
    
          case SERVICE: service.service_(event); break;
          case CLIENT: service.client_(event); break;
          case CLIENTPIERDUT: service.clientPierdut_(event); break;
    
          case ABANDONEZ: service.abandonez_(event); break;
          case RESETEZSTATUSUL: service.resetezStatusul_(event); break;
    
          default: throw Error(`Status unknown: ${status}`);
        }
      };
    
}

