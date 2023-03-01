const person = {
    firstName: 'Pesho',
    lastName: 'Georgiev',
    introduce() {
        const getFUllName = () => { // arrow function
            return this.firstName + ' ' + this.lastName;
        }

        console.log(`Hello, my name is ${getFUllName()}`);
    }
}

person.introduce()