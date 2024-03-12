class Owner extends PropertiesUserService {

    static initialize() {
        if (this.me == null) {
            OwnerBuilder.buildOwnerData();
        }
    }

    static exist() {
        return PropertiesUserService.get('firstName') ? true : false;
    }

    static getOwner() {
        this.initialize();
        return this.me;
    }

    static create() {
        OwnerBuilder.createOwner();
    }

    static setDefaultValues() {
        this.of(["Default-FirstName", "Default-LastName", "Default-Email", "0744 444 444", "default@gmail.com", "01/01/2000","Default-LeaderName", "Defaul-leaderId"]);
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

}