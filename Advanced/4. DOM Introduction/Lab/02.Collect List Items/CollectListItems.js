function extractText() {

    let ulElemnt = document.getElementById('items')
    console.log(ulElemnt.textContent);

    let textAreaElemnt = document.getElementById('result');
    textAreaElemnt.textContent = ulElemnt.textContent;
}