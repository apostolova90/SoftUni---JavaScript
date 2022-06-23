// как да пишем функции, вътре в обектите:


function objectCreator(fn, ln, a){ //параметри зададени в инпута

    let person = {
        firstName: fn, // за разлика от масивите, тук именоваме всеки елемнт от обекта, 
        lastName: ln, // за да го достъпим по-нататък в кода
        age: a
        sayHello(){console.log('Hello')}  // първи на1ин
    }

    person.sayGoodbye = () => console.log('Bye') // втори начин

}

objectCreator("Peter", "Pan", 20)