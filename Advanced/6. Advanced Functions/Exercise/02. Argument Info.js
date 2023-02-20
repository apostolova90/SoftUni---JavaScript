function argumentInfo(){

    let data = {}; // обект, който да пълним с всички counts

//arguments ни връща масив, който има вътре в себе си всички елемeнти от инпута --- правим го обаче с Array.from, за да стане истински масив, защото arguments не връща точно масив
    Array.from(arguments).forEach((line) => { // обхождаме - за всеки line от масива
        let type = typeof line; // взимаме type-а на всеки line
        console.log(`${type}: ${line}`);

        if (!data[type]){    // проверяваме дали в обекта, който сме създали вече горе го НЯМА този ключ type
            data[type] = 0;    // ако го няма, го сетваме
        }      
        data[type]++;   // ако пък го има, повишаваме броя с едно
    });

    Object.keys(data)   // взимаме всички ключове, за да ги сортираме
    .sort((a,b) => data[b] - data[a]) 
    .forEach((key) => console.log(`${key} = ${data[key]}`));
}
argumentInfo('cat', 42, function () { console.log('Hello world!'); })