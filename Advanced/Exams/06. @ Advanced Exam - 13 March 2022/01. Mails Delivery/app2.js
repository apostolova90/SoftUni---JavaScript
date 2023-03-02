function solve() {
    
    // getting the input data
   let name = document.getElementById("recipientName");
   let title = document.getElementById("title");
   let message = document.getElementById("message");
    // getting the differenet sections
   let listSection = document.getElementById("list");
   let sendSection = document.querySelector('.sent-list');
   let deleteSection = document.querySelector(".delete-list");

   // getting the buttons and adding event listeners
   document.getElementById("add").addEventListener('click', addEntry);
   document.getElementById("reset").addEventListener('click', clearForm);

   function addEntry(e) {
       e.preventDefault();
       let nameValue = name.value;
       let titleValue = title.value;
       let messageValue = message.value;

       //validating the input data
       if (!nameValue || !titleValue || !messageValue) {
           return;
       }
       let li = createEntry(nameValue, titleValue, messageValue);
       listSection.appendChild(li);
       name.value = '';
       title.value = '';
       message.value = '';
   }

   function createEntry(nameValue, titleValue, messageValue) {
       let li = document.createElement('li');

       let titleH = document.createElement('h4');
       titleH.textContent = `Title: ${titleValue}`;
       li.appendChild(titleH);

       let nameH = document.createElement('h4');
       nameH.textContent = `Recipient Name: ${nameValue}`;
       li.appendChild(nameH);

       let span = document.createElement('span');
       span.textContent = messageValue;
       li.appendChild(span);

       let div = document.createElement('div');
       div.id = 'list-action';

       let sendBtn = document.createElement('button');
       sendBtn.type = 'submit';
       sendBtn.id = 'send';
       sendBtn.textContent = 'Send';
       sendBtn.addEventListener('click', sendEntry);
       div.appendChild(sendBtn);

       let deleteBtn = document.createElement('button');
       deleteBtn.type = 'submit';
       deleteBtn.id = 'delete';
       deleteBtn.textContent = 'Delete';
       deleteBtn.addEventListener('click', deleteEntry);
       div.appendChild(deleteBtn);

       li.appendChild(div);
       return li;
   }

   function sendEntry(e) {

       let currentEntry = e.target.parentElement.parentElement;

       nameValue = currentEntry.children[1].textContent.split(': ')[1];
       titleValue = currentEntry.children[0].textContent.split(': ')[1];

       let li = document.createElement('li');

       let spanTo = document.createElement('span');
       spanTo.textContent = `To: ${nameValue}`;
       li.appendChild(spanTo);

       let spanTitle = document.createElement('span');
       spanTitle.textContent = `Title: ${titleValue}`;
       li.appendChild(spanTitle);

       let div = document.createElement('div');
       div.classList.add('btn');

       let btn = document.createElement('button');
       btn.type = 'submit';
       btn.classList.add('delete');
       btn.textContent = 'Delete';
       btn.addEventListener('click', deleteEntry);
       div.appendChild(btn);

       li.appendChild(div);

       sendSection.appendChild(li);

       currentEntry.remove();
   }

   function deleteEntry(e) {

       let currentEntry = e.target.parentElement.parentElement;

       nameValue = currentEntry.children[1].textContent.split(': ')[1];
       titleValue = currentEntry.children[0].textContent.split(': ')[1];

       let li = document.createElement('li');

       let spanTo = document.createElement('span');
       spanTo.textContent = `To: ${nameValue}`;
       li.appendChild(spanTo);

       let spanTitle = document.createElement('span');
       spanTitle.textContent = `Title: ${titleValue}`;
       li.appendChild(spanTitle);

       deleteSection.appendChild(li);

       currentEntry.remove();
   }

   function clearForm(e) {
       e.preventDefault();
       let nameValue = name.value;
       let titleValue = title.value;
       let messageValue = message.value;
       if (!nameValue || !titleValue || !messageValue) {
           return;
       }
       name.value = '';
       title.value = '';
       message.value = '';
   }
}
solve()

