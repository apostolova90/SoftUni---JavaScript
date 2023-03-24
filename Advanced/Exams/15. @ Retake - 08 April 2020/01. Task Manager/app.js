function solve() {

    // getting the input data
    let taskInputElement = document.getElementById("task");
    let descriptionTextareaElement = document.getElementById("description");
    let dateInputElement = document.getElementById("date");
    // getting the body elements
    let sectionElements = document.getElementsByTagName("section"); // *** getting ALL the elements in the HTML file, havingthe name "section"
    // getting the button and adding event listener
    let addButton = document.getElementById("add");
    addButton.addEventListener("click", add);

    function add(e){ // the function for the sendBtnElement
        e.preventDefault();
        //validating the input data
        if (taskInputElement.value == null || taskInputElement.value.length == 0 || dateInputElement.value == null || dateInputElement.value.length == 0){
            return;
        }
        // getting the values of the elements
        let task = taskInputElement.value;
        let date = dateInputElement.value;
        let description = descriptionTextareaElement.value;
        
        //creating and appending elements in the NEW article SECTION ("Received orders")
/* @ */ let newArticleElement = document.createElement("article"); // the parent element which holds all the information, including the buttons 
        
        let newH3Element = document.createElement("h3");
        newH3Element.textContent = task;
        let newPForDescriptionElement = document.createElement("p");
        newPForDescriptionElement.textContent = `Description: ` + description;
        let newPForDateElement = document.createElement("p");
        newPForDateElement.textContent = `Due Date: ${date}`;
        // creating the new buttons in this section and adding classes and event listeners
/* @ */ let newDivForButtonsElement = document.createElement("div"); // the parent element which holds the buttons (we will attach the buttons to it later)
        newDivForButtonsElement.classList.add("flex");
        // the Start button
        let newStartButton = document.createElement("button");
        newStartButton.classList.add("green");
        newStartButton.textContent = "Start";
        newStartButton.addEventListener("click", start);
        // the Delete button
        let newDeleteButton = document.createElement("button");
        newDeleteButton.classList.add("red");
        newDeleteButton.textContent = "Delete";
        newDeleteButton.addEventListener("click", deleteTask);

        // appending/attaching all buttons to the parent div element created for them ("newDivForButtonsElement")
        newDivForButtonsElement.appendChild(newStartButton);
        newDivForButtonsElement.appendChild(newDeleteButton);
        
        // appending/attaching all info we have to the parent element created for them ("newArticleElement")
        newArticleElement.appendChild(newH3Element);
        newArticleElement.appendChild(newPForDescriptionElement);
        newArticleElement.appendChild(newPForDateElement);
        // appending/attaching the buttons section to the main parent element ("newArticleElement")
        newArticleElement.appendChild(newDivForButtonsElement);

        // апендваме всички данни, във втория подред div елемент ([1]), намиращ се във втория подред section елемент ([1])
        sectionElements[1].getElementsByTagName("div")[1].appendChild(newArticleElement); 
        
            /* <section>
                <div>
                
                    <h1 class="orange">Open</h1>
                </div>
                <div>
!!!here!!!              
                </div>
            </section> */

        // creatting the functions for the buttons "Delete" and "Start"
        function deleteTask(e){
            e.preventDefault();
            let button = e.currentTarget;
            button.parentNode.parentNode.remove();
        }

        function start(e){
            e.preventDefault();
            let button = e.currentTarget;
            let wholeArticleElement = button.parentNode.parentNode;
            // слагаме информацията от  "In progres" section and appending all the info there
            document.getElementById("in-progress").appendChild(wholeArticleElement);   
            button.parentNode.firstChild.remove(); // махаме старт бутона (първия елемент, във втория parent element)
            // creating the new button in this section
            let newFinishButton = document.createElement("button");
            newFinishButton.classList.add("orange");
            newFinishButton.textContent = "Finish";
            newFinishButton.addEventListener("click", finish);
            //appending the new button
            wholeArticleElement.getElementsByTagName("div")[0].appendChild(newFinishButton);

            function finish(e){
                e.preventDefault();
                let bttn = e.currentTarget;
                let articleElement = bttn.parentNode.parentNode;
                // апендваме всички данни, във втория подред div елемент ([1]), намиращ се във 4тия подред section елемент ([3])
                sectionElements[3].getElementsByTagName("div")[1].appendChild(articleElement);
                articleElement.getElementsByTagName("div")[0].remove(); // removing the info from the other section
            }
        }  
        
        taskInputElement.value = "";
        dateInputElement.value = "";
        descriptionTextareaElement.value = "";
    }
}