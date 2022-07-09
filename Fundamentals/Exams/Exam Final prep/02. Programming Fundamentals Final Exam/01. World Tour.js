//АЗ


/* function worldTour(array) {

    let workingArray = array.shift() //взимаме първата част върху която ще работим
      
    for (let line of array) {
      //въртим през всеки елемент от масива
      let lineInfo = line.split(":"); // и разделяме отделните части на елемента
      let command = lineInfo[0]; // и записваме всяка една от тях под отделна променлива
      let index = lineInfo[1];
      let another = lineInfo[2];
  
      if (command === "Travel") {
        break;
      }
  
      switch (command) {
        case "Add Stop": 
        index = Number(index)
            if (index > 0 && index < workingArray.length){
                let first = workingArray.substring(0, index);
                let second = workingArray.substring(index, workingArray.length);
                workingArray = first + another + second;
                console.log(workingArray);
            }
          break;

        case "Remove Stop":
          break;

        case "Switch":
          break;
      }
    }
      
}
worldTour([
"Hawai::Cyprys-Greece",
"Add Stop:7:Rome",
"Remove Stop:11:16",
"Switch:Hawai:Bulgaria",
"Travel"]); */
                                                







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