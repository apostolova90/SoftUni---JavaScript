function fishTank(input){
    const lenght = Number(input[0]);
    const widht = Number(input[1]);
    const height = Number(input[2]);
    const otherThingsInTheTank = Number(input[3]);
    const totalCapacity = lenght * widht * height
    const totalCapacityInLiters = totalCapacity / 1000
    const litersNeeded = totalCapacityInLiters - totalCapacityInLiters * otherThingsInTheTank / 100
 
    console.log (litersNeeded)
 
 }
 
 fishTank (["85 ", "75 ", "47 ", "17 "]);