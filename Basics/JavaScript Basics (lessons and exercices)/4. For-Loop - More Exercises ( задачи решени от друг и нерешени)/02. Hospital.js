function hospital(input){

    let index = 0;
    let timePeriod = Number(input[index]);
    index++;

    let patientsPerDay = Number(input[index]);;
    index++;
    
    let doctors = 7;
    let treatedPatients = 0;
    let untreatedPatients = 0;
 
    let totalDays = 0;
 
    for (let i = 1; i <= timePeriod; i++){
        patientsPerDay = Number(input[i]);  
        totalDays++;
        
        if (totalDays % 3 === 0 && untreatedPatients > treatedPatients){
            doctors++;
        }

        if (patientsPerDay > doctors) {
            untreatedPatients = untreatedPatients + (patientsPerDay - doctors);
            treatedPatients += doctors;
 
        } else {
            treatedPatients = treatedPatients + patientsPerDay;
 
        }


    }
    console.log(`Treated patients: ${treatedPatients}.`);
    console.log(`Untreated patients: ${untreatedPatients}.`);
}
hospital(["4", "7", "27", "9", "1"]);