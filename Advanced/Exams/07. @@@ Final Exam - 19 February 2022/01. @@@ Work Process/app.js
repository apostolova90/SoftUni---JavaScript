function solve() {
    
    // getting the input data
    let fNameElement = document.getElementById("fname");
    let lNameElement = document.getElementById("lname");
    let emailElement = document.getElementById("email");
    let birthElement = document.getElementById("birth");
    let positionElement = document.getElementById("position");
    let salaryElement = document.getElementById("salary");

    // getting the body elements
    let tbodyElement = document.getElementById("tbody"); // the section wich will hold the entire right side
    let totalSalaryElement = document.getElementById("sum");// the section wich will hold the total salary

    // getting the button and adding event listener
    let hireButton = document.getElementById("add-worker");
    hireButton.addEventListener("click", hireWorker);

    // the function for the hireButton
    function hireWorker(e){
        e.preventDefault();

        // getting the values of the elements
        let fName = fNameElement.value;
        let lName = lNameElement.value;
        let email = emailElement.value;
        let birth = birthElement.value;
        let position = positionElement.value;
        let salary = salaryElement.value;

        //validating the input data
        if (fName.length != 0 && lName.length != 0 && email.length != 0 && birth.length != 0 && position.length != 0 && salary.length != 0){
        //creating and appending elements in the NEW tr SECTION ("Work process")
/* @ */     let newTRElement = document.createElement("tr"); // the parent element which holds all the information, including the buttons which we will append later
            let newTdFNameElement = document.createElement("td");
            newTdFNameElement.textContent = fName;
            let newTdLNameElement = document.createElement("td");
            newTdLNameElement.textContent = lName;
            let newTdEmailElement = document.createElement("td");
            newTdEmailElement.textContent = email;
            let newTdBirthElement = document.createElement("td");
            newTdBirthElement.textContent = birth;
            let newTdPositionElement = document.createElement("td");
            newTdPositionElement.textContent = position;
            let newTdSalaryElement = document.createElement("td");
            newTdSalaryElement.textContent = salary;
            // creating the new buttons in this section and adding classes and event listeners
/* @ */     let newTdButtonsElement = document.createElement("td"); // the parent element which holds the buttons (we will attach the buttons to it later)
            // the fire button
            let newFiredButton = document.createElement("button");
            newFiredButton.classList.add("fired");
            newFiredButton.textContent = "Fired";
            newFiredButton.addEventListener("click", fireWorker);
            // the edit button
            let newEditButton = document.createElement("button");
            newEditButton.classList.add("edit");
            newEditButton.textContent = "Edit";
            newEditButton.addEventListener("click", editInfo);
            // appending/attaching the buttons to the parent element created for them ("newTdButtonsElement")
            newTdButtonsElement.appendChild(newFiredButton);
            newTdButtonsElement.appendChild(newEditButton);

            // appending/attaching all info we have to the parent element created for this section ("newTRElement")
            newTRElement.appendChild(newTdFNameElement);
            newTRElement.appendChild(newTdLNameElement);
            newTRElement.appendChild(newTdEmailElement);
            newTRElement.appendChild(newTdBirthElement);
            newTRElement.appendChild(newTdPositionElement);
            newTRElement.appendChild(newTdSalaryElement);
            // appending/attaching the section with the buttons
            newTRElement.appendChild(newTdButtonsElement);
            // appending/attaching the section with all the workers to the main parent which holds the entire right side
            tbodyElement.appendChild(newTRElement);

            //add salary to totalSalary
            let currentTotalSalary = Number(totalSalaryElement.textContent);
            let newTotalSalary = currentTotalSalary + Number(salary);
            totalSalaryElement.textContent = newTotalSalary.toFixed(2);

            // creatting the functions for the buttons "Fired" and "Edit"
            function editInfo(e){

                e.preventDefault();
                fNameElement.value = fName;
                lNameElement.value = lName;
                emailElement.value = email;
                birthElement.value = birth;
                positionElement.value = position;
                salaryElement.value = salary;

                //remove salary from total salary and delete whole row
                let currentTotalSalary = Number(totalSalaryElement.textContent);
                let newTotalSalary = currentTotalSalary - Number(salary);
                totalSalaryElement.textContent = newTotalSalary.toFixed(2);

                let btn = e.currentTarget; // с този ред посочваме, че това, което ще правим по-долу се отнася само за текущия елемент, в който се намираме (дадения служител, който искаме да едитваме)
                btn.parentNode.parentNode.remove(); // removing the parent (the worker who we want to edit) element entirely
            }

            function fireWorker(event){

                event.preventDefault();
                let btn = event.currentTarget; // с този ред посочваме, че това, което ще правим по-долу се отнася само за текущия елемент, в който се намираме (дадения служител, който искаме да едитваме)
                let currentTotalSalary = Number(totalSalaryElement.textContent);
                let newTotalSalary = currentTotalSalary - Number(salary);
                totalSalaryElement.textContent = newTotalSalary.toFixed(2);

                btn.parentNode.parentNode.remove(); // removing the worker who we whant to edit 
            }
            //clearing the input
            fNameElement.value = "";
            lNameElement.value = "";
            emailElement.value = "";
            birthElement.value = "";
            positionElement.value = "";
            salaryElement.value = "";
        }
    }
}
solve()