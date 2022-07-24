


// АЗ

function destionationMapper(data){

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
destionationMapper("ThisIs some InvalidInput");



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