class CentralizareService {

    static takeMeetingSnapshot() {
        
    }

    static takeWeekSnapshot() {
        var currentDate = LuxonDateTime.now();

        var startOfWeek = currentDate.startOf('week');
        var endOfWeek = startOfWeek.plus({ days: 7 });

        var properties = PropertiesDocumentService.getAll();

        var snapshot = [];
        snapshot.push(startOfWeek.quarter, DateTime.toRomanianFormat(startOfWeek), DateTime.toRomanianFormat(endOfWeek));
        for(let key in TellPartyProperties) {
            snapshot.push(properties[TellPartyProperties[key]]);
        }

        CentralizareSaptamanalaSheet.createSnapshot(snapshot);
    }

    static takeQSnapshot() {
        var currentDate = LuxonDateTime.now();

        var startOfWeek = currentDate.startOf('week');
        var endOfWeek = startOfWeek.plus({ days: 7 });

        var properties = PropertiesDocumentService.getAll();

        var snapshot = [];
        snapshot.push(startOfWeek.quarter, DateTime.toRomanianFormat(startOfWeek), DateTime.toRomanianFormat(endOfWeek));
        for(let key in TellPartyProperties) {
            snapshot.push(properties[TellPartyProperties[key]]);
        }

        CentralizareTotalaSheet.createSnapshot(snapshot);
    }
}