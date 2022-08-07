function rojectsCreation(input){
    let name = input[0]
    let projects = Number(input[1])
    let all = projects * 3
    console.log (`The architect ${name} will need ${all} hours to complete ${projects} project/s.`);
}

rojectsCreation (["George", "4"]);
