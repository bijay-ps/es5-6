const person = {
    fName: 'Ruchi',
    lName: 'Kumari',
    set age(ageVal) {
        if(ageVal >= 18 && ageVal < 60) {
            this._age = ageVal
        }
    },
    get age() {
        return this._age;
    },
    get fullName() {
        return `${this.fName} ${this.lName}`
    },
}

person.age = 25;
console.log(person.fullName)