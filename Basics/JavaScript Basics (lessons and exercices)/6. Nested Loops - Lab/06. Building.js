function buildings(input) {
    let x = Number(input[0]);
    let y = Number(input[1]);

    for(let floor = x; floor > 0; floor--){
        let res = "";
        for(let room = 0; room < y; room++){
            if (floor === x){
                res += `L${floor}${room} `;
            } else if (floor % 2 === 0){
                res += `O${floor}${room} `;
            } else {
                res += `A${floor}${room} `;
            }
        } 
        console.log(res);
    }
}
buildings(["6","4"]);
/* buildings(["9","5"]);  */
