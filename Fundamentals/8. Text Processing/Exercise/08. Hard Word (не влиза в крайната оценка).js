function hardWorks(input){

    let text = input[0];
    let missingWords = input[1];
    let underscores = [];

    for (const el of missingWords) { // въртим през думите, които трябва да сложим на празните места
        let underscore = '_'; // смалагме долна черта
        underscore = underscore.repeat(el.length); // и я повтаряме толкова пъти, колкото е дълга думата на която сме
        underscores.push(underscore); // пушваме получената дължина от _ в масив underscores
    }
    missingWords.sort((a,b) => b.length - a.length); // сортираме от къса към дълга
    underscores.sort((a,b) => b.length - a.length); // сортираме от къса към дълга


    for(let i = 0; i < underscores.length; i++){ // минаваме през елемнтите в underscores
        text = text.replace(underscores[i], missingWords[i]); // и заменяме празните места на дадения индекс от underscores, с думата на същия индекс в missingWords
    }

    console.log(text)
}
hardWorks(['Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.',
['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']])