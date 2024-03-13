class ContacteStatusFilterRouter {

    static route(filterName) {

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

        switch (filterName) {
            case "ShortList": return [NURASPUNDE3, REFUZTELEFON, "NrInvalid", "AbsentIntalnire", "Abandonez", "RefuzOferta", "RenuntatPlan", "Client", "POTENTIALCLIENT", "POTENTIALCOLABORATOR", "SeMaiGandestePana"];
            case "Programari": return ["Nesunat", "NuRaspunde(1)", "NuRaspunde(2)", "NuRaspunde(3)", "RefuzTelefon", "NrInvalid", "AbsentIntalnire", "RevinPeste", "RevineEl/Ea", "Abandonez", "RefuzOferta", "RenuntatPlan", "Client", "POTENTIALCLIENT", "POTENTIALCOLABORATOR", "SeMaiGandestePana"]
            case "Oportuni": return;
            case "Clienti": return ["Nesunat", "NuRaspunde(1)", "NuRaspunde(2)", "NuRaspunde(3)", "RefuzTelefon", "NrInvalid", "AbsentIntalnire", "RevinPeste", "RevineEl/Ea", "Abandonez", "RefuzOferta", "Prog.Analiza", "Prog.Consultanta", "Prog.Contract", "Prog.Service", "POTENTIALCLIENT", "DeProgramatIntalnire", "DeReprogramat"]
            case "Remindere": return ["Nesunat", "NuRaspunde(1)", "NuRaspunde(2)", "NuRaspunde(3)", "RefuzTelefon", "NrInvalid", "AbsentIntalnire", "Abandonez", "RefuzOferta", "RenuntatPlan", "Prog.Analiza", "Prog.Consultanta", "Prog.Contract", "Prog.Service", "Client", "POTENTIALCOLABORATOR"];
            case "StergeFiltru": ContacteStatus.removeFilter(); return null;
        }

    }

}