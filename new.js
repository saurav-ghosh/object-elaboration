class person{
    constructor(firstName, lastName, salary) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = salary;
    }
}

const heroPerson = new person ('rocky', 'vai', 300000);
console.log(heroPerson);
const friendlyPerson = new person('cristiano', 'ronaldo', 80000000000);
console.log(friendlyPerson);

// function person(firstName, lastName, salary) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.salary = salary;
// }

// const heroPerson = new person ('sakib', 'khan', 50000);
// console.log(heroPerson);
