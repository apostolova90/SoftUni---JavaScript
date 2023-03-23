

// exam preperation with IVO

window.addEventListener('load', solution);

function solution() {
  // взимаме всички бутони
  const submitButton = document.getElementById('submitBTN');
  const editButton = document.getElementById('editBTN');
  const continueButton = document.getElementById('continueBTN');
  
  const block = document.getElementById('block'); // взимаме целия блок, където ще се въвежда информацията на потребителя
  const preview = document.getElementById('infoPreview') // взимаме preview полето

  // сетваме какво да бъде състоянието на бутоните в началото ("submit" да може да се натиска, а останалите НЕ), за да можем после при натискане на бутон, да казваме какво да се случва с останалите (да стават например неактивни)
  submitButton.disabled = false;
  editButton.disabled = true;
  continueButton.disabled = true;

  // взимаме едновременно всички input values (name, email, phone number) като масив от данни
  const inputValues = Array.from(document.getElementById('form').querySelectorAll('input'));
  
    // взимаме всички label values - "Full Name", "Email", "Phone  Number".......
  const labelValues = Array.from(document.getElementById('form').querySelectorAll('label'));
  inputValues.pop();


  //при натискане на бутон "submit"
  submitButton.addEventListener('click',(ev)=>{
    const fullName = inputValues[0]; // взимаме първото поле с въведени данни (first name)
    const email = inputValues[1]; // взимаме второто поле с въведени данни (email)
    
    if(fullName.value && email.value !== ''){ // правим проверка дали някой от първите две полета (наме, емаил) е празно
      
      for(let i = 0; i < inputValues.length; i++) {
        // правим лист елемент от тип ЛИСТ ('li'), в който наливаме едновременно информацията която запазихме в масив labelValues и информацията която идва от inputValues
        const liElement = document.createElement('li');
        liElement.textContent = `${labelValues[i].textContent} ${inputValues[i].value}`;
        preview.appendChild(liElement); // закачаме листа в ПОЛЕ "preview"
      }

      // изчистваме input полетата
      for(let input of inputValues){
        input.value = '';
      }

      // оправяме останалите бутони
      ev.target.disabled = true;
      editButton.disabled = false;
      continueButton.disabled = false;
    }
      
  });


  //при натискане на бутон "edit"
  editButton.addEventListener('click',(ev)=>{
    // минаваме през всички list items (<li>Full Name: Петя Апостолова</li>), сплитваме по ": " и прехвърляме данните отдясно като input value
    const listItems = Array.from(preview.childNodes);
    for(let i=0; i < inputValues.length; i++){
      inputValues[i].value = listItems[i].textContent.split(': ')[1];
      listItems[i].remove(); // махаме list item-а
    }
    submitButton.disabled = false;
    editButton.disabled = true;
    continueButton.disabled = true;
  });

  
  //при натискане на бутон "continue"
  continueButton.addEventListener('click',(ev)=>{
    block.innerHTML = ''; // изтриваме целия информацията в preview полето

    let h3 = document.createElement('h3'); // създаваме нов елемнент, който ще съдържа текста
    h3.textContent = 'Thank you for your reservation!'; // слагаме му съдържанието
    block.appendChild(h3) // добавяме елемента към block-а
  });
}
