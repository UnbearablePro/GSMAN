class TriggerOVBService extends TriggerService {


    static startQuotaCycle() {
        this.createRecurringEveryMinutesTimeTriggered('quoteCycleTrigger', 10);
    }

    static stopQuotaCycle() {
        this.deleteTriggerFromFunction('quoteCycleTrigger');
    }

    static startTellPartyCycle() {
        this.createRecurringWeeklyTimeTrigger('takeTellPartySnapshotFromPropertiesTrigger', ScriptApp.WeekDay.MONDAY, 3, 0);
    }

    static stopTellPartyCycle() {
        this.deleteTriggerFromFunction('takeTellPartySnapshotFromPropertiesTrigger');
    }

    static onEditTrigger() {
        ScriptApp.newTrigger('onEditTrigger')
            .forSpreadsheet(SpreadSheetIds.OVBRAIN)
            .onEdit()
            .create();
    }
}