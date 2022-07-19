function deserializeString (input){


    let result = [];

    for (let i = 0; i < input.length; i++) {
        if (input[i] === "end"){
            break;
        }

        let tokens = input[i].split(":")       // (2) ['a', '0/2/4/6']
        let letter = tokens[0]                // 'a'
        let indexes = tokens[1].split("/")   // ['0', '2', '4', '6']
 
        
        for (let index of indexes) {
            result[index] = letter   // ['a', …, 'a', …, 'a', …, 'a']
                                 // ['a', 'b', 'a', 'b', 'a', 'b', 'a']
        }
    }

    console.log(result.join(''));

}
deserializeString([
'a:0/2/4/6',
'b:1/3/5',
'end'])

deserializeString([
'a:0/3/5/11',
'v:1/4',
'j:2',
'm:6/9/15',
's:7/13',
'd:8/14',
'c:10',
'l:12',
'end']) 
