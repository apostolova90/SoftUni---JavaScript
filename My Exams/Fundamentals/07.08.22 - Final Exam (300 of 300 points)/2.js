function encryptPassword(arr){
 
    let num = arr.shift();
    let pattern = /(\S+)>(?<numbers>[0-9]{3})\|(?<lowerCase>[a-z]{3})\|(?<upperCase>[A-Z]{3})\|(?<symbols>[^\<\>]{3})<\1/g;
 
    let encriptedPassword = ""
    for (let i = 0; i < num; i++) {
        
        let isValid = pattern.exec(arr[i]);
 
        if (!isValid){
            console.log('Try another password!')
        } 
        
        while (isValid !== null){
 
            let numbers = isValid.groups['numbers'];
            let lowerCase = isValid.groups['lowerCase'];
            let upperCase = isValid.groups['upperCase'];
            let symbols = isValid.groups['symbols'];
            encriptedPassword = numbers + lowerCase + upperCase + symbols
            console.log(`Password: ${encriptedPassword}`)
            isValid = pattern.exec(arr[i])
        }
    }
}
encryptPassword(["3",
"##>00|no|NO|!!!?<###",
"##>123|yes|YES|!!!<##",
"$$<111|noo|NOPE|<<>$$"])
;
console.log('-------------')
encryptPassword(["5",
"aa>111|mqu|BAU|mqu<aa",
"()>111!aaa!AAA!^&*<()",
"o>088|abc|AAA|***<o",
"asd>asd|asd|ASD|asd<asd",
"*>088|zzzz|ZzZ|123<*"])
; 