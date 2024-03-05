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