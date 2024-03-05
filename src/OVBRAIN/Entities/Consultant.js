class Consultant extends User {

    constructor(firstName, lastName, email, phone, sex, dateOfBirth, leaderName, leaderId) {
        super(firstName, lastName, email, phone, sex, dateOfBirth);
        this.leaderName = leaderName;
        this.leaderId = leaderId
    }

}