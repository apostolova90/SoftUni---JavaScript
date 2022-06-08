function tseamAccount(array) {
    let initialInastalledGames = array.shift().split(" "); //сплитваме стария масив, 
    //като ПРЕМЕСТВАМЕ първата част от него в нов масив, където е всеки елемент е самостоятелен
    //вече не съществува тази част в стария масив
 
    for (let index = 0; index < array.length; index++) { //пускаме да въртим всеки елемент от масива, за да можем по-долу да го сплитнем
        const element = array[index]; //записваме всеки елемент в стария масив под величина
        if (element != "Play!") { //имаме един случа за "Play!", затова слагаме всичко под него, после е }else{}
            let splitted = element.split(" "); //сплитваме всеки елемнет и записваме данните под отделни масиви
            let command = splitted[0]; //елемент 1
            let game = splitted[1]; //елемнет 2
 
            switch (command) {
                case "Install":
                    if (!initialInastalledGames.includes(game)) {
                        initialInastalledGames.push(game) //add the game at the last position in the account, but only if it isn't installed already
                    }
                    break;
                case "Uninstall":
                    if (initialInastalledGames.includes(game)) {
                        let indexOf = initialInastalledGames.indexOf(game); //delete the game if it exists.
                        initialInastalledGames.splice(indexOf, 1);
                    }
                    break;
                    case "Update":
                        if (initialInastalledGames.includes(game)) {
                            let indexOf = initialInastalledGames.indexOf(game); //update the game if it exists and place it in the last position
                            let toPushButInArr = initialInastalledGames.splice(indexOf, 1); 
                            let toPush = toPushButInArr.join();
                            initialInastalledGames.push(toPush);
                        }
                        break;
                    case "Expansion":
                        let splittedExpansions = game.split("-");
                        if (initialInastalledGames.includes(splittedExpansions[0])) { //check if the game exists and insert after it the expansion in the following format: "{game}:{expansion}";
                            let indexOf = initialInastalledGames.indexOf(splittedExpansions[0]);
                            let toInsert = `${splittedExpansions[0]}:${splittedExpansions[1]}`;
                            initialInastalledGames.splice(indexOf + 1, 0, toInsert);
     
                        }
                        break;
                }
     
            } else {
                console.log(initialInastalledGames.join(" "));
            }
        }
    }



tseamAccount([
  "CS WoW Diablo",
  "Install LoL",
  "Uninstall WoW",
  "Update Diablo",
  "Expansion CS-Go",
  "Play!",
]);
tseamAccount;
[
  "CS WoW Diablo",
  "Uninstall XCOM",
  "Update PeshoGame",
  "Update WoW",
  "Expansion Civ-V",
  "Play!",
];
