function carFactory(object){

    let resultCar = {};
    let engine = {}; // това ще бъде вложен обект в новия опбект "resultCar"
    let carriage = {}; // това също ще бъде вложен обект в новия опбект "resultCar"
    
    resultCar.model = object.model; //наливаме модела, защото той няма да се променя

    // запълваме обект engine
    if (object.power <= 90){ 
        engine.power = 90;
        engine.volume = 1800;
    } else if(object.power <= 120){
        engine.power = 120;
        engine.volume = 2400;
    } else if (object.power <= 200){
        engine.power = 200;
        engine.volume = 3500;
    }

    // запълваме обект carriage
    carriage.type = object.carriage;
    carriage.color = object.color;

    // смятаме wheelsize
    if (object.wheelsize % 2 === 0){
        object.wheelsize--;
    }

    // пълним новия обект "resultCar"
    resultCar.engine = engine;
    resultCar.carriage = carriage;
    resultCar.wheels = [
        object.wheelsize,
        object.wheelsize,
        object.wheelsize,
        object.wheelsize
    ];

    return resultCar;
}
carFactory({ 
model: 'VW Golf II',
power: 90,
color: 'blue',
carriage: 'hatchback',
wheelsize: 14 
});

carFactory({ 
model: 'Opel Vectra',
power: 110,
color: 'grey',
carriage: 'coupe',
wheelsize: 17 
})
