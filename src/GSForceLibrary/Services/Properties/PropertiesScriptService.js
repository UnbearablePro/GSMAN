class PropertiesScriptService extends AbstractPropertiesService {

    static initialize() {
        if (this.service == undefined || this.service == null) {
            this.service = PropertiesService.getScriptProperties();
        }
    }
}