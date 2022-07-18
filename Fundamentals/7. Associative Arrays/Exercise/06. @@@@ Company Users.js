//решена с Иво на упражненията

function companyUsers(array){

    let listOfCompanies = {};

    for (let line of array){
        let [company, number] = line.split(" -> ");
        
        if (!listOfCompanies.hasOwnProperty(company)){ // ако в обекта я няма компанията
            listOfCompanies[company] = [] // я добавяме като ключ в МАСИВ, за да може после към ключа да добавим стойност
        }

        if(!listOfCompanies[company].includes(number)){ // проверяваме дали number се съдържа в ключа масив
            listOfCompanies[company].push(number);
        }    
    }

    let sortedCompanies = Object.keys(listOfCompanies) //взимаме ключовете, за да ги сортираме
    sortedCompanies.sort((a,b) => a.localeCompare(b)); // сортираме по азбучен ред

    for (let company of sortedCompanies){ //взимаме първо само key
        console.log(company)
            for (let emp of listOfCompanies[company]){ // после с вложен цикъл ще минем по всички елемнти, които са вътре в масива
                console.log(`-- ${emp}`)
            }
        }

}
companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345']);

companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> CC12344',
    'Lenovo -> XX23456',
    'SoftUni -> AA12345',
    'Movement -> DD11111'])
