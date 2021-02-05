const normalPerson = {
    firstName: 'saurav',
    lastName: 'ghosh',
    salary: 700,
    getFullName: function () {
        console.log(this.firstName, this.lastName);
    },
    charge: function (amount, tips, tax) {
        this.salary = this.salary - amount - tips - tax;
        return this.salary;
    }
}
// normalPerson.charge(50);
// console.log(normalPerson.salary);

const heroPerson = {
    firstName: 'sakib',
    lastName: 'khan',
    salary: 2000
}

// const heroPersonChargeBill = normalPerson.charge.bind(heroPerson);
// heroPersonChargeBill(500);
// console.log(heroPerson.salary);

const friendlyPerson = {
    firstName: 'rocky',
    lastName: 'bai',
    salary: 5000
}

// const friendlyCharge = normalPerson.charge.bind(friendlyPerson);
// friendlyCharge(2000);
// console.log(friendlyPerson.salary);

// normalPerson.charge.call(heroPerson, 500);
// console.log(heroPerson.salary);
// console.log(normalPerson.salary);

normalPerson.charge.apply(friendlyPerson,[ 3000, 1000, 1000]);
console.log(friendlyPerson.salary);