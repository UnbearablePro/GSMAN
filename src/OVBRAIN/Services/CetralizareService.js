class CentralizareService {


    static takeWeekSnapshot() {
        var currentDate = LuxonDateTime.now();

        var startOfWeek = currentDate.startOf('week');
        var endOfWeek = startOfWeek.plus({ days: 7 });

        var properties = PropertiesDocumentService.getAll();

        var snapshot = [];
        snapshot.push("Q",startOfWeek.toISODate(), endOfWeek.toISODate());
        for(let key in TellPartyProperties) {
            snapshot.push(properties[TellPartyProperties[key]]);
        }

        CentralizareSaptamanalaSheet.createSnapshot(snapshot);

    }
}