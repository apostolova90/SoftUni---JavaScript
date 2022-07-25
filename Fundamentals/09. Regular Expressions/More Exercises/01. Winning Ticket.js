// AZ 
//       30/100

function winningTicket(input){

  let regex = /[#|$|^|@]{6,10}/g;
  let tickets = input.trim().split(/\s*,\s*/)

  let message = ""

  for (let el of tickets){

          let elementLength = el.length

        if (elementLength < 20){
            console.log(`invalid ticket`)
          } else {
      
          let firstPart = el.substring(0, (el.length / 2))
          let secondPart = el.substring((el.length / 2), el.length)

          let symbolsFirstPart = firstPart.match(regex);
          let symbolsSecondPart = secondPart.match(regex);

          if(symbolsFirstPart === null && symbolsSecondPart === null){
            console.log(`ticket "${el}" - no match`)
            break;
          }


          let arrSymbolsFirstPart = symbolsFirstPart.shift().split("")
          let char = arrSymbolsFirstPart[0]
          let length = arrSymbolsFirstPart.length
          let repeats = length * 2
          symbolsFirstPart = arrSymbolsFirstPart.join("").toString()
          symbolsSecondPart = arrSymbolsFirstPart.join("").toString()
          

    if (symbolsFirstPart === symbolsSecondPart){
    
      if (repeats >= 12 && repeats < 18) {
        message = `ticket "${el}" - ${length}${char}`;
    } else if (repeats >= 20){
        message = `ticket "${el}" - ${length}${char} Jackpot!`;
    } 
    console.log(message);
      }
    }   
  } 

}
/* winningTicket(`Cash$$$$$$Ca$$$$$$sh`);
console.log("____________")
winningTicket(`$$$$$$$$$$$$$$$$$$$$, aabb  , th@@@@@@eemo@@@@@@ey`);
console.log("____________")
winningTicket(`validticketnomatch:(`);
console.log("____________") */
winningTicket(`сс@@@@@@@@@@@@dddddf`)




//Another

100/100

//function winningTicket(str) {
//    const VALID_TICKET_LENGTH = 20;
//    const tickets = str.trim().split(/\s*,\s*/);
//    const pattern = /(?=.{20}).*?(?=(?<char>[@#$^]))(?<match>\k<char>{6,}).*(?<=.{10})\k<match>.*/;
 /*  
    for (const ticket of tickets) {
      const validTicket = pattern.exec(ticket);
  
      if (validTicket) {
        const len = validTicket.groups.match.length;
        const char = validTicket.groups.char;
  
        if (len >= 6) {
          let message = `ticket "${ticket}" - ${len}${char}`;
  
          if (len === 10) {
            message += ' Jackpot!';
          }
  
          console.log(message);
        }
      } else if (ticket.length !== VALID_TICKET_LENGTH) {
        console.log('invalid ticket');
      } else {
        console.log(`ticket "${ticket}" - no match`);
      }
    }
  }
  
  console.log('----------------------Test 1----------------------');
  winningTicket('Cash$$$$$$Ca$$$$$$sh ');

  
  console.log('----------------------Test 2----------------------');
  winningTicket('$$$$$$$$$$$$$$$$$$$$, aabb  , th@@@@@@eemo@@@@@@ey');
  
  
  console.log('----------------------Test 3----------------------');
  winningTicket('validticketnomatch:(');
   */