
// АЗ

function destionationMapper(text){
    
    let regex = /(\=|\/)(?<destination>[A-Z][A-Za-z]{2,})\1/gm;
    let totalSUm = 0;
    let destinations = [];

    let match = regex.exec(text) // (3) ['=Hawai=', '=', 'Hawai', index: 0, input: '=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=', groups: {…}]

    while (match !== null){
        let destination = match.groups['destination']; // 'Hawai' ... 'Cyprus'
        destinations.push(destination); // (2) ['Hawai', 'Cyprus']
        totalSUm += destination.length // 11
        
        match = regex.exec(text)
    }
    let allPlacesString = destinations.join(", ")
    console.log(`Destinations: ${allPlacesString}`);
    console.log(`Travel Points: ${totalSUm}`)
}
destionationMapper("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=");
destionationMapper("ThisIs some InvalidInput");







// АЗ

/* function destionationMapper(text){

let travelPoints = 0; 
let regex = /(=|\/)(?<destinations>[A-Z][A-Za-z]{2,})\1/g; 
let allStops = [];

let match = regex.exec(text)

while (match !== null){
    let destination = match.groups['destinations']

    travelPoints += destination.length;
    allStops.push(destination)
    match = regex.exec(text);
}

console.log(`Destinations: ${allStops.join(", ")}`)
console.log(`Travel Points: ${travelPoints}`)
}
destionationMapper("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=");
destionationMapper("ThisIs some InvalidInput"); */









// АЗ

/* function destionationMapper(data){

    let pattern = /([=|/])(?<destination>[A-Z]{1}[A-Za-z]{2,})\1/g;
    let points = 0;
    let valid;
    let destinations = [];

    while ((valid = pattern.exec(data))){
        
        points += valid.groups.destination.length;
        destinations.push(valid.groups.destination)
    }
    
    console.log(`Destinations: ${destinations.join(', ')}`)
    console.log(`Travel Points: ${points}`)
}
destionationMapper("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=");
destionationMapper("ThisIs some InvalidInput"); */






// Anotehr

/* function destinationMapper(string) {

    let regex = /(\=|\/)(?<destination>[A-Z][A-Za-z]{2,})\1/gm;
    let travelPoints = 0;
    let destinations = [];

    while ((valid = regex.exec(string)) !== null) {
        let dest = valid.groups.destination;
        destinations.push(dest);
    }

    for (let dest of destinations) {
        travelPoints += dest.length;
    }

    console.log(`Destinations: ${destinations.join(', ')}`);
    console.log(`Travel Points: ${travelPoints}`);
}

destinationMapper("=Haw=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=") */