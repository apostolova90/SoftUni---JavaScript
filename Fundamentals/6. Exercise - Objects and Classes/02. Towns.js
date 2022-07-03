function towns(arrayInput){

    let currentTown = {} // създаваме обекта

    for (let city of arrayInput){ // минаваме през всички елементи в масива

        let cityElements = city.split(' | ') // разделяме всеки елемент в масива ----- ['Sofia', '42.696552', '23.32601']
        
        // записваме всеки елемент под нова променлива
        let townName = cityElements[0]; // Sofia
        let townLatitute = Number(cityElements[1]); // 42.696552
        let townLongtitute = Number(cityElements[2]); // 23.32601

        // наливаме еемнтите в отделните части на обекта
        currentTown.town = townName; 
        currentTown.latitude = townLatitute.toFixed(2);
        currentTown.longitude = townLongtitute.toFixed(2);
        console.log(currentTown)
    }


}
towns(['Sofia | 42.696552 | 23.32601',
       'Beijing | 39.913818 | 116.363625'])
towns(['Plovdiv | 136.45 | 812.575'])
