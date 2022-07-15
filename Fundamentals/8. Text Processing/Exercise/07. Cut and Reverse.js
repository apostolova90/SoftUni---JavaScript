function cutAndReverse(input){

    let reversed = input.split('').reverse().join(''); // разделяме, обръщаме стринга, събираме 
    let sliceOne = reversed.slice(reversed.length / 2); // взимаме частта от средата до КРАЯ
    let sliceTwo = reversed.slice(0, reversed.length / 2) // взимаме частта от НАЧАЛОТО до КРАЯ
    console.log(`${sliceOne}\n${sliceTwo}`)
    
}
cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT');
cutAndReverse('sihToDtnaCuoYteBIboJsihTtAdooGoSmI');