class OwnerBuilder {

    static buildOwnerData() {
        const userProperties = PropertiesUserService.getAll();
        if (DataUtils.isEmpty(userProperties.firstName)) {
            Displayer.warning(`Owner data missing!`)
            if (Displayer.ask('Doriti sa va instalati OVBRAIN?')) {
                return this.createOwner();
            }
        }
        return Owner.of(userProperties);
    }

    static createOwner() {
        Displayer.ask("Pentru a instala de OVBRAIN veti avea nevoie sa va introduceti cateva date");

        const firstaName = Displayer.inputField("User creation", "Introdu numele de familie");
        const lastName = Displayer.inputField("User creation", "Introdu prenumele");
        const phone = Displayer.inputField("User creation", "Introdu numarul de telefon");
        const mail = Session.getActiveUser().getEmail();
        let sex = "";
        while(sex != `B` && sex != `F`) {
            sex = Displayer.inputField("User creation", "Introdu B pentru barbat sau F pentru femeie");
        }
    
        const dayOfBirth = Displayer.inputField("User creation", "Introdu ziua de nastere in formatul dd/MM/yyyy");

        const ownerData = {firstaName, lastName, phone, mail, sex, dayOfBirth};
        return Owner.of(ownerData);
    };



}