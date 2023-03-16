
// exam preperation with IVO

window.addEventListener('load', solve);

function solve() {
    
    let addButton = document.getElementById('add'); // взимаме бутона "add"
    
    //взимаме данните от всички input полета (model, year, discription, price)
    const modelInputElement = document.getElementById('model');
    const yearInputElement = document.getElementById('year');
    const descriptionInputElement = document.getElementById('description');
    const priceInputElement = document.getElementById('price');

    // getting the body where we will save all the furnitures
    const furnitureListElement = document.getElementById('furniture-list');

    addButton.addEventListener('click', (e) =>{ // при натискане на бутона
        e.preventDefault(); // спираме презареждането на страницата
        
        let model = modelInputElement.value;
        modelInputElement.value = '';
        let description = descriptionInputElement.value
        descriptionInputElement.value = '';
        let year = Number(yearInputElement.value);
        yearInputElement.value = ''; // обръщаме в число, защото value връща стринг
        let price = Number(priceInputElement.value); // обръщаме в число, защото value връща стринг
        priceInputElement.value = '';
        
        // правим всички проверки по условие
        if(!model || !description){
            return;
        }
        if (year <= 0 || price <= 0){
            return;
        }

        let rowElement = document.createElement('tr'); // създаваме parent елемент, в който да добавим после всичката под елементи с данни от инпута
        rowElement.classList.add('info'); // добавяме класа даден по условиe
        
        // започваме да създаваме отделен елемент за всеки тип дата (model, year...) и добавяме самите данни към елемента
        let modelCellElement = document.createElement('td');
        modelCellElement.textContent = model;
        let priceCellElement = document.createElement('td');
        priceCellElement.textContent = price.toFixed(2);

        // създаваме и елемент за самите бутони, който ще създадем и закачим по-долу
        let actionCellElement = document.createElement('td');

        // след това създаваме новите бутони, който ще трябва да се появят в новото поле след натуискане на 'Add'
        let infoButtonElement = document.createElement('button');
        infoButtonElement.textContent = 'More Info';
        infoButtonElement.classList.add('moreBtn') // добавяме класа даден по условиe
        
        let buyButtonElement = document.createElement('button');
        buyButtonElement.textContent = 'Buy it';
        buyButtonElement.classList.add('buyBtn') // добавяме класа даден по условиe
        
        // закрепяме бутоните към елемента "actionCellElement"
        actionCellElement.appendChild(infoButtonElement);
        actionCellElement.appendChild(buyButtonElement);
        
        // добавям всички под елементи (Model, Year, Actions) към parent-a:
        rowElement.appendChild(modelCellElement); 
        rowElement.appendChild(priceCellElement);
        rowElement.appendChild(actionCellElement);
        // добавяме parent-a към главното дърво
        furnitureListElement.appendChild(rowElement);

        // създаваме нов елемент, който да съдържа допълнителната информация, която да се крие или показва при натискане на бутон "MOre Info"
        let contentsRowElement = document.createElement('tr')
        contentsRowElement.classList.add('hide'); // добавяме му класа
        contentsRowElement.style.display = 'none'; // добавяме му и стил
        
        // създаваме допълнителни елементи за двата вида информация, която ще се съдържа в contentsRowElement И наливаме информацията в нея
        let yearContentElement = document.createElement('td');
        yearContentElement.textContent = `Year: ${year}`
        
        let descriptionContentElement = document.createElement('td');
        descriptionContentElement.setAttribute('colspan', 3)
        descriptionContentElement.textContent = `Description: ${description}`

        // закачаме елементите към parent-a contentsRowElement
        contentsRowElement.appendChild(yearContentElement);
        contentsRowElement.appendChild(descriptionContentElement);

        // добавяме и contentsRowElement към главното дърво furnitureListElement
        furnitureListElement.appendChild(contentsRowElement);
        
        // добавяме условие какво да стане ако се натисне бутон "More info"
        infoButtonElement.addEventListener('click', (e) => {
            // първо правим настройка за смяна на текста на бутона и показване на скрит текст
            if (e.currentTarget.textContent == 'More Info') { // при клик, първо заменяме "More Info" с "Less Info"
                contentsRowElement.style.display = 'contents'; // показваме скрития текст
                e.currentTarget.textContent = 'Less Info';
            } else { // ако е "Less Info" става "More Info"
                contentsRowElement.style.display = 'none'; // скриваме скрития текст  
                e.currentTarget.textContent = 'More Info';
            }
        });

        let totalPriceElement = document.querySelector('.total-price');
        // добавяме условие какво да стане ако се натисне бутон "Buy"
        buyButtonElement.addEventListener('click', (e) => {
            let currentTotalPrice = Number(totalPriceElement.textContent);
            let totalPrice = currentTotalPrice + price
            totalPriceElement.textContent = totalPrice.toFixed(2);
            
            rowElement.remove();
            contentsRowElement.remove();
        });
    });
}
