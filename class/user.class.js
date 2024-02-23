class User {
    constructor(nom, email, password) {
        this._nom = nom;
        this._email = email;
        this._password = password;
    }

    get nom() {
        return this._nom;
    }

    set nom(nom) {
        this._nom = nom;
    }

    get email() {
        return this._email;
    }

    set email(email) {
        this._email = email;
    }

    get password() {
        return this._password;
    }

    set password(password) {
        this._password = password;
    }

    toMap() {
        return {
            nom: this._nom,
            email: this._email,
            password: this._password
        }
    }

    static fromMap(map) {
        return new User(map.nom, map.email, map.password);
    }
    

    
}

module.exports = User;
