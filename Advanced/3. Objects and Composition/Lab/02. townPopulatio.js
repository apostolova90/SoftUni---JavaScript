function townPopulatio(array){

    let towns = {};

    for (let info of array) { // минаваме през всеки ред в масива
        let infoArray = info.split(' <-> ') // и превръщаме всеки ред в нов масив, като разделяме различните данни в него ------ ["Sofia","1200000",]
        let town = infoArray[0];
        let population = Number(infoArray[1]);

        if (!towns[town]) { // когато града го няма
            towns[town] = 0; // го създава със стойност 0
        }

        towns[town] += population; // за да може после да добавяме популацията с +=
    }

    for (key in towns){ // така получавам всеки key от обекта
        console.log(`${key} : ${towns[key]}`) // Ivan - 2645484,  Georg - 746374,  Petyr - 5734735
    }
}
townPopulatio([
'Sofia <-> 1200000',
'Montana <-> 20000',
'New York <-> 10000000',
'Washington <-> 2345000',
'Las Vegas <-> 1000000']);

townPopulatio([
'Istanbul <-> 100000',
'Honk Kong <-> 2100004',
'Jerusalem <-> 2352344',
'Mexico City <-> 23401925',
'Istanbul <-> 1000'])
