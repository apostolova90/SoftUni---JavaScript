// Call and apply
function introduce() {
    console.log(`Hello, my name is ${this.name}`);
}

introduce(); // Global invitation

let objPerson = {
    name: 'Pesho'
}

introduce.call(objPerson); // invoke using call
introduce.apply(objPerson); // invoke using apply




// Bing
let superHuman = {
    name: 'Superman'
};

let superIntroduction = introduce.bind(superHuman, 'Maria', 'Petrova'); // bind всъщност създава нова функция, която можем да извикаме по-късно
superIntroduction();
