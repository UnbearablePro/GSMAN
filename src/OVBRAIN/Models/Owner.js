class Owner extends PropertiesUserService {

    static initialize() {
        if (this.me == null) {
            this.me = this.checkAndBuildOwnerData();
        }
    }

    static exist() {
        return PropertiesUserService.get('firstName') ? true : false;
    }

    static getOwner() {
        this.initialize();
        return this.me;
    }
    

    static setDefaultValues() {
        this.of(["Default-FirstName", "Default-LastName", "Default-Email", "0744 444 444", "default@gmail.com", "01/01/2000", "Default-LeaderName", "Defaul-leaderId"]);
    }

    static of(ownerData) {
        PropertiesUserService.setByList(ownerData);

        return new ConsultantOwner(
            ownerData.firstName,
            ownerData.lastName,
            ownerData.email,
            ownerData.phone,
            ownerData.sex,
            ownerData.dateOfBirth,
            ownerData.leaderName,
            ownerData.leaderId);
    }

    static checkAndBuildOwnerData() {
        const userProperties = PropertiesUserService.getAll();
        if (DataUtils.isEmpty(userProperties.firstName)) {
            Displayer.warning(`Owner data missing!`)
            if (Displayer.ask('Doriti sa incepeti procesul de creare a contului de OVBRAIN ?')) {
                return this.buildOwnerData();
            }
        }
        return Owner.of(userProperties);
    }

    static buildOwnerData() {
        Displayer.ask("Pentru a instala de OVBRAIN veti avea nevoie sa va introduceti datele");

        const firstaName = Displayer.inputFieldMandatory("User creation", "Introdu numele de familie");
        const lastName = Displayer.inputFieldMandatory("User creation", "Introdu prenumele");
        const phone = Displayer.inputFieldMandatory("User creation", "Introdu numarul de telefon");
        const mail = Session.getActiveUser().getEmail();
        let sex = "";
        while (sex != `B` && sex != `F`) {
            sex = Displayer.inputFieldMandatory("User creation", "Introdu B pentru barbat sau F pentru femeie");
        }

        const dayOfBirth = Displayer.inputField("User creation", "Introdu ziua de nastere in formatul dd/MM/yyyy");

        const leaderId = "leader-id";
        const leaderName = "firstName"
        const id = "";
        const ownerData = {id, firstaName, lastName, phone, mail, sex, dayOfBirth, leaderId, leaderName };
        return Owner.of(ownerData);
    };
}
Owner.me = null;