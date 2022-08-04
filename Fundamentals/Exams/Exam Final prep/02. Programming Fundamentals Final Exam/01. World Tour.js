//АЗ

function worldTour(array) {

let stops = array.shift()

for (let i = 0; i < array.length; i++) {
    
    let tokens = array[i].split(":")
    let command = tokens[0]

    if (command === "Travel"){ // при получаваме команда за край
        break;
    }

    if (command === "Add Stop"){ // добавяме 
        let index = Number(tokens[1]);
        let string = tokens[2]
        if (index >= 0 && index < stops.length){ // проверяваме дали индекса съществува
            let firstPart = stops.substring(0, index);
            let secondPart = stops.substring(index, stops.length)
            stops = firstPart + string + secondPart
        }
        console.log(stops)
    }

    if (command === "Remove Stop"){ // премахваме
        let startIndex = Number(tokens[1]);
        let endIndex = Number(tokens[2])
        if (startIndex >= 0 && startIndex < stops.length){ // проверяваме дали първия индекс съществува
            if (endIndex >= 0 && endIndex < stops.length){ // проверяваме дали втория индекс съществува
            let firstPart = stops.substring(0, startIndex);
            let secondPart = stops.substring(endIndex + 1, stops.length)
            stops = firstPart + secondPart
            // или с .replace:
                //let removed = stops.substring(startIndex, endIndex + 1);
                //stops = stops.replace(removed, '');
            }
        }
        console.log(stops)
    }
    
    if (command === "Switch"){ // разменяме
        let oldString = tokens[1];
        let newString = tokens[2]
        if (stops.includes(oldString)){ // първо проверяваме дали съществува
            stops = stops.replace(oldString, newString)
        }
        console.log(stops)
    }
}

console.log(`Ready for world tour! Planned stops: ${stops}`)

}
worldTour([
"Hawai::Cyprys-Greece",
"Add Stop:7:Rome",
"Remove Stop:11:16",
"Switch:Hawai:Bulgaria",
"Travel"]); 

worldTour([
    'Albania:Bulgaria:Cyprus:Deuchland',
    'Add Stop:3:Nigeria',
    'Remove Stop:4:8',
    'Switch:Albania: Azərbaycan',
    'Travel'])














//АЗ

/* function worldTour(array) {

    let allStops = array.shift();

    for (let i = 0; i < array.length; i++) {
        if (array[i] === "Travel"){
            break;
        }

        let tokens = array[i].split(":");
        let command = tokens[0];

        if (command === "Add Stop"){
            let index = Number(tokens[1]);
            let city = tokens[2];
            if (index >= 0 && index < allStops.length){
                let firstPart = allStops.substring(0, index);
                let secondPart = allStops.substring(index, allStops.length);
                allStops = firstPart + city + secondPart;
            }
            console.log(allStops);
        }

        if (command === "Remove Stop"){
            let firstIndex = Number(tokens[1]);
            let secondIndex = Number(tokens[2]);
            if (firstIndex >= 0 && firstIndex < allStops.length){
                if (secondIndex >= 0 && secondIndex < allStops.length){
                    let firstPart = allStops.substring(0, firstIndex);
                    let secondPart = allStops.substring(secondIndex + 1, allStops.length);
                    allStops = firstPart + secondPart;
                }
            }
            console.log(allStops)
        }

        if (command === "Switch"){
            let oldString = tokens[1];
            let newString = tokens[2];
            if (allStops.includes(oldString)){
                allStops = allStops.replace(oldString, newString);
            }
            console.log(allStops);
        }
    }

    console.log(`Ready for world tour! Planned stops: ${allStops}`)
}
worldTour([
"Hawai::Cyprys-Greece",
"Add Stop:7:Rome",
"Remove Stop:11:16",
"Switch:Hawai:Bulgaria",
"Travel"]); 

worldTour([
'Albania:Bulgaria:Cyprus:Deuchland',
'Add Stop:3:Nigeria',
'Remove Stop:4:8',
'Switch:Albania: Azərbaycan',
'Travel']) */








// друг

/* function worldTour(arr) {

    let stops = arr.shift();

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "Travel") {
            break;
        }
        let tokens = arr[i].split(':');
        let command = tokens[0];
        if (command === "Add Stop") {
            let index = Number(tokens[1]);
            let string = tokens[2];
            if (index >= 0 && index < stops.length) {
                let first = stops.substring(0, index);
                let second = stops.substring(index, stops.length);
                stops = first + string + second;
            }
            console.log(stops);
        } else if (command === "Remove Stop") {
            let startIndex = Number(tokens[1]);
            let endIndex = Number(tokens[2]);
            if (startIndex >= 0 && startIndex < stops.length && endIndex >= 0 && endIndex < stops.length) {
                let removed = stops.substring(startIndex, endIndex + 1);
                stops = stops.replace(removed, '');
            }
            console.log(stops);
        } else if (command === "Switch") {
            let oldString = tokens[1];
            let newString = tokens[2];
            if (stops.includes(oldString)) {
                stops = stops.replace(oldString, newString);
            }
            console.log(stops);
        }
    }
    console.log(`Ready for world tour! Planned stops: ${stops}`);
}

worldTour(["Hawai::Cyprys-Greece",
    "Add Stop:7:Rome",
    "Remove Stop:11:16",
    "Switch:Hawai:Bulgaria",
    "Travel"]) */