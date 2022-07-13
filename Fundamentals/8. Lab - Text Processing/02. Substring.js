function substring(string, start, count){

    // тук имаме count, а не end of
    //  а какво знаем за .substring() ни трябват страт и енд, 
    // затова ще изчислим end, като съберем start и count
    
let endIndex = start + count;
    console.log(string.substring(start, endIndex));

}
substring('ASentence', 1, 8)
substring('SkipWord', 4, 7)