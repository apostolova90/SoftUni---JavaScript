
// Another

// мой коментари


function malrahShake(arr){
    let text = arr[0]; // 'astalavista baby'
    let pattern = arr[1] // 'sta'

    let array = text.split(pattern); // разделя масив text по израза, който търсим и остава масив  =>   ['a', 'lavi', ' baby'] (махаме дума от текста)

    while (pattern.length > 0){
        if (array.length <= 2) {
            break;
        }

        // Трябва да махнем само първото и последно появяване на pattern-а при всяко завъртане. 
        // В примерите са дадени два патерна, но ако има трети (напр: 'astalastavista baby'), средния трябва да остане.
        // Ако пък намери само един трябва да прекъсне цикъла без да го премахва.
        // Ето защо пишем следните редове:

        let end = array.pop();  // отделя последния елемент от масива
        text = array.shift() + array.join(pattern) + end   // след това съединяваме обратно всичко като стринг  =>  'alavi baby', 
        // NB - ако сме махнали повече от 2 пъти patter-a (не само по един в началото и края),
        // горната команда, ще върне този, който е бил оригинално в средата на масива
        console.log("Shaked it.");

        // t.e ако имахме този стринг 'astalastavista baby'
        // той щеше да стане първо това: ['a', 'la', 'vi', ' baby']
        // а след гордните три реда това: 'alastavi baby' (sta, който е бил в средата, се е върнал където си е бил)

    

        pattern = pattern.split('') // сплитваме елементите, защото ще ни трябва броя на елементите в масива - ['s', 't', 'a']
        let indexForDelition = Math.floor(pattern.length / 2) // след това ще разделим дължината на масива, на 2 - и това е индекса, който трябва да изтрием от pattern-a
        pattern.splice(indexForDelition, 1); // махаме буквата на съответния индекс - ['s', 'a']
        pattern = pattern.join('') // събираме елемнтите обратни в стринг - 'sa'
        array = text.split(pattern); // това го пишем пак, за да завъртим наново while цикъла
    }

    console.log("No shake.")
    console.log(text)
}
malrahShake([
'astalavista baby',
'sta'])

malrahShake([
'##mtm!!mm.mm*mtm.#',
'mtm'])