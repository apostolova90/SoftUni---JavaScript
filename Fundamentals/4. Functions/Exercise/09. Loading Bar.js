function loadingBar(number){

    let compleate = '%'.repeat(number / 10);
    let incomplete = '.'.repeat(10 - compleate.length);

    if (incomplete.length === 0){
        console.log('100% Complete!')
    } else {
        console.log(`${number}% [${compleate}${incomplete}]`)
        console.log('Still loading...')
    }
}
loadingBar(30)
loadingBar(50)
loadingBar(100)
