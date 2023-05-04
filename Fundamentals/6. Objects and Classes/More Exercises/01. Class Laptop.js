class Laptop{
    constructor(info, quality){ // взимаме инфото отдолу - (let info = {producer: "Lenovo", age: 1, brand: "Legion"})
        this.info = info;
        this.quality = quality; //което е 10 (new Laptop(info, 10)) и трябва да намаля при всяко включване и изключване
        this.isOn = false;
    }
 
//пишем 3 функции, за всеки случай по една

    turnOn(){  
        this.isOn = true;
        this.quality--;
    }
 
    turnOff(){
        this.isOn = false;
        this.quality--;
    }
 
    showInfo(){
        return JSON.stringify(this.info);
    }
 
    get price() {   // getter ПОЛУЧАВА стойност (използва се като property)
        return (800 - this.info.age * 2 + (this.quality * 0.5));
    }

    // "set" (setter) e друго което не сме учили е - то ВЗИМА стойност
}
 
let info = {producer: "Dell", age: 2, brand: "XPS"}
let laptop = new Laptop(info, 10)
laptop.turnOn()
console.log(laptop.showInfo())
laptop.turnOff()
console.log(laptop.quality)
laptop.turnOn()
console.log(laptop.isOn)
console.log(laptop.price)


