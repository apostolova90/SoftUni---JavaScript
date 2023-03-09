window.addEventListener('load', solve);

function solve() {
    // getting the input data
    let productTypeElement = document.querySelector('#type-product')
    let descriptionTextEelemnt = document.querySelector('#description')
    let clientNameElement = document.querySelector('#client-name')
    let clientPhoneElement = document.querySelector('#client-phone')
    
    // getting the body elements
    let recivedOrdersElement = document.querySelector('#received-orders') // this is for the section "Received orders"
    let completedOrdersElement = document.querySelector('#completed-orders') // this is for the section "Completed orders" 
    
    // getting the buttons and adding event listeners
    let sendBtnElement = document.querySelector('#right form button') // tag button, which in tag form, which is in tag right
    sendBtnElement.addEventListener('click', send)
    let clearBtnElement = document.querySelector('#completed-orders button')
    clearBtnElement.addEventListener('click', clear)

    // the function for the sendBtnElement
    function send(e) {
        e.preventDefault()
        // getting the values of the elements
        let productType = productTypeElement.value
        let description = descriptionTextEelemnt.value
        let clientName = clientNameElement.value
        let clientPhone = clientPhoneElement.value
        //validating the input data
        if (description == '' || clientName == '' || clientPhone == '') {
            return;
        }
        //clearing the input
        productTypeElement.value = ''
        descriptionTextEelemnt.value = ''
        clientNameElement.value = ''
        clientPhoneElement.value = ''

        //creating and appending elements in the NEW div SECTION ("Received orders")
/* @ */ let containerDivElement = document.createElement('div') // the parent element which holds all the information, including the buttons, which we will append later
        containerDivElement.classList.add('container') // we add the class (style)

        let h2Element = document.createElement('h2')
        h2Element.textContent = `Product type for repair: ${productType}`
        let h3Element = document.createElement('h3')
        h3Element.textContent = `Client information: ${clientName}, ${clientPhone}`
        let h4Element = document.createElement('h4')
        h4Element.textContent = `Description of the problem: ${description}`
        // creating the new buttons in this section and adding classes and event listeners
        let startBtn = document.createElement('button') // the start button
        startBtn.classList.add('start-btn')
        startBtn.textContent = 'Start Repair'
        startBtn.addEventListener('click', startEvent)
        let finishBtn = document.createElement('button') // the finish button
        finishBtn.classList.add('finish-btn')
        finishBtn.textContent = 'Finish Repair'
        finishBtn.disabled = true;
        finishBtn.addEventListener('click', finishEvent)
        
        // appending/attaching the info and the buttons to the parent element created for ("containerDivElement")
        containerDivElement.appendChild(h2Element)
        containerDivElement.appendChild(h3Element)
        containerDivElement.appendChild(h4Element)
        containerDivElement.appendChild(startBtn)
        containerDivElement.appendChild(finishBtn)
        // appending/attaching all info we have to the main parent element for this section ("recivedOrdersElement")
        recivedOrdersElement.appendChild(containerDivElement)    
    }

    // creatting the functions for the buttons "start" and "finish"
    function startEvent(e) {
        e.currentTarget.disabled = true; // when start is clicked, the button is disabled
        e.currentTarget.parentNode.querySelector('.finish-btn').disabled = false; // and the other button is active
    }

    function finishEvent(e) {
        let containerDiv = e.currentTarget.parentNode // присвояваме данните от цялото поле "Received orders", включително бутона "start repair", който по-долу ще премахнем отделно
        completedOrdersElement.appendChild(containerDiv) // преместваме данните в поле "Completed orders"
        e.currentTarget.remove() // изтриваме данните за поръчката (включително "finish repair")
        containerDiv.querySelector('.start-btn').remove() // изтриваме бутон "start repair"
    }

     // creatting the functions for the button "clear"
    function clear(e) {
        // we create an array with all orders, than we delete all of them with for cycle
        let allContainer = Array.from(e.currentTarget.parentNode.querySelectorAll('.container'))
        for (const containers of allContainer) {
            containers.remove()
        }
    }
}