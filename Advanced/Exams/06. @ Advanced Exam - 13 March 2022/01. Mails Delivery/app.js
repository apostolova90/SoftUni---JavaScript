function solve() {
    // getting the input data
    let recipientNameElement = document.getElementById('recipientName');
    let titleElement = document.getElementById('title');
    let messageElement = document.getElementById('message');
    // getting the body elements
    let listEmailsElement = document.getElementById('list');
    let sentListElement = document.querySelector('.sent-list');
    let deleteListElement = document.querySelector('.delete-list')
    // getting the button and adding event listener
    let addButtonElement = document.getElementById('add');
    let resetButtonElement = document.getElementById('reset');

    resetButtonElement.addEventListener('click', (e) => {
        e.preventDefault();

        recipientNameElement.value = '';
        titleElement.value = '';
        messageElement.value = '';
    })

    addButtonElement.addEventListener('click', (e) => {
        e.preventDefault();
        // getting the values of the elements
        let recipientName = recipientNameElement.value;
        let title = titleElement.value;
        let message = messageElement.value;
        //validating the input data
        if (recipientName !== '' && title !== '' && message !== '') {
            //creating elements in the NEW li SECTION ("List of Mails")
/* @ */     let newLiElement = document.createElement('li'); // section holding all info

            let newh4TitleElement = document.createElement('h4');
            newh4TitleElement.textContent = `Title: ${title}`;
            let newh4RecipientElement = document.createElement('h4');
            newh4RecipientElement.textContent = `Recipient Name: ${recipientName}`
            let newMessageElement = document.createElement('span');
            newMessageElement.textContent = message;
            // creating the new buttons in this section and adding event listeners
/* @ */     let buttonDivElement = document.createElement('div'); // section holding the buttons
            let sendButtonElement = document.createElement('button');
            let deleteButtonElement = document.createElement('button');
            
            buttonDivElement.id = 'list-action'

            sendButtonElement.addEventListener('click', (e) => {
                //creating elements in the NEW li SECTION ("List of Mails")
/* @ */         let newLiTag = document.createElement('li'); // section holding all info

                let newTitleSpanTag = document.createElement('span');
                newTitleSpanTag.textContent = `Title: ${title}`;
                let newRecipeSpanTag = document.createElement('span');
                newRecipeSpanTag.textContent = `To: ${recipientName} `;
                // creating the new buttons in this section and adding event listeners
/* @ */         let newButtonDivTag = document.createElement('div'); // section holding the buttons
                newButtonDivTag.classList.add('btn');
                let newButtonTag = document.createElement('button');
                newButtonTag.type = 'submit';
                newButtonTag.classList.add('delete');
                newButtonTag.textContent = 'Delete';

                newButtonTag.addEventListener('click', (e) => {
                    let deletedLiTag = document.createElement('li');
                    let deletedSpanTitle = document.createElement('span');
                    let deletedSpanRecipient = document.createElement('span');

                    deletedSpanRecipient.textContent = `To: ${recipientName} `;
                    deletedSpanTitle.textContent = `Title: ${title}`;

                    deletedLiTag.appendChild(deletedSpanRecipient);
                    deletedLiTag.appendChild(deletedSpanTitle);

                    deleteListElement.appendChild(deletedLiTag);
                    sentListElement.removeChild(newLiTag);
                })
                
                newButtonDivTag.appendChild(newButtonTag);

                newLiTag.appendChild(newRecipeSpanTag);
                newLiTag.appendChild(newTitleSpanTag);
                newLiTag.appendChild(newButtonDivTag);

                sentListElement.appendChild(newLiTag);

                // removing the text from the first section after we press "add"
                listEmailsElement.removeChild(newLiElement);
            })

            deleteButtonElement.addEventListener('click', (e) => {
                let deletedLiTag = document.createElement('li');
                let deletedSpanTitle = document.createElement('span');
                let deletedSpanRecipient = document.createElement('span');

                deletedSpanRecipient.textContent = `To: ${recipientName} `;
                deletedSpanTitle.textContent = `Title: ${title}`;

                deletedLiTag.appendChild(deletedSpanRecipient);
                deletedLiTag.appendChild(deletedSpanTitle);

                deleteListElement.appendChild(deletedLiTag);
                listEmailsElement.removeChild(newLiElement);
            })


            sendButtonElement.id = 'send';
            sendButtonElement.type = 'submit'
            sendButtonElement.textContent = 'Send';
            deleteButtonElement.id = 'delete';
            deleteButtonElement.type = 'submit'
            deleteButtonElement.textContent = 'Delete';
            buttonDivElement.appendChild(sendButtonElement);
            buttonDivElement.appendChild(deleteButtonElement);

            newLiElement.classList.add('list-mails');
            newLiElement.appendChild(newh4TitleElement);
            newLiElement.appendChild(newh4RecipientElement);
            newLiElement.appendChild(newMessageElement);
            newLiElement.appendChild(buttonDivElement);
            listEmailsElement.appendChild(newLiElement);
        };

        recipientNameElement.value = '';
        titleElement.value = '';
        messageElement.value = '';
    })
}
solve()