function palindromeIntegers(input){

    for(let el of input){
        let current = String(el)
        let reversed = String(el).split('').reverse().join('') 
        //.split('') - сплитваме string 123 и го превръщаме в масив, 
        // reverse() - обръщаме реда на значите => 123 - 321
        // join('') - съединяваме отделни елемнти и ги записваме отново като string

        if (current === reversed){
            console.log(true)
        }else{
            console.log(false)
        }
    }

}
palindromeIntegers([123,323,421,121])
palindromeIntegers([32,2,232,1010])
