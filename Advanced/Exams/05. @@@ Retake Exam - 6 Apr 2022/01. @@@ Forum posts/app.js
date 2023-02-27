window.addEventListener("load", solve);

function solve() {

  // getting the input data
  let titleInput = document.getElementById('post-title');
  let categoryInput = document.getElementById('post-category');
  let contentInput = document.getElementById('post-content');

  // getting the two body elements
  let reviewList = document.getElementById('review-list');
  let publishedList = document.getElementById('published-list');

  // getting the buttons and adding event listeners
  let publishBtn = document.getElementById('publish-btn');
  let clearBtn = document.getElementById('clear-btn');
  publishBtn.addEventListener('click', onPublish);
  clearBtn.addEventListener('click', onClear);

  // the function for the onPublish
  function onPublish(ev) {
    // getting the values of the elements
    let title = titleInput.value;
    let category = categoryInput.value;
    let content = contentInput.value;
      //validating the input data
      if (title !== '' && category !== '' && content !== '') {
          //creating elements
          let newLi = document.createElement('li'); // new li element
          newLi.classList.add('rpost');
          let newArticle = document.createElement('article'); //new article element
          let newH4 = document.createElement('h4');
          newH4.textContent = title;
          let newP1 = document.createElement('p');
          newP1.textContent = `Category: ${category}`;
          let newP2 = document.createElement('p');
          newP2.textContent = `Content: ${content}`;

          //creating buttons and adding event listeners
          let newEditBtn = document.createElement('button');
          newEditBtn.textContent = 'Edit';
          newEditBtn.classList.add('action-btn', 'edit');
          newEditBtn.addEventListener('click', onEdit);
          let newApproveBtn = document.createElement('button');
          newApproveBtn.textContent = 'Approve';
          newApproveBtn.classList.add('action-btn', 'approve');
          newApproveBtn.addEventListener('click', onApprove);

          // appending elements and buttons
          newArticle.appendChild(newH4);
          newArticle.appendChild(newP1);
          newArticle.appendChild(newP2);
          newLi.appendChild(newArticle);
          newLi.appendChild(newEditBtn);
          newLi.appendChild(newApproveBtn);
          reviewList.appendChild(newLi);

          //clearing the input
          titleInput.value = '';
          categoryInput.value = '';
          contentInput.value = '';
      }
  }
  function onEdit(ev) {
    let title = ev.target.parentElement.getElementsByTagName('h4')[0]; 
    let category = ev.target.parentElement.getElementsByTagName('p')[0];
    let content = ev.target.parentElement.getElementsByTagName('p')[1];
    titleInput.value = title.textContent;
    categoryInput.value = category.textContent.slice(10); // .slice(10), because we need the text after the 10 sign ----- Category: ${category};
    contentInput.value = content.textContent.slice(9); // .slice(9), because we need the text after the 10 sign ----- Content: ${content}`
    ev.target.parentElement.remove(); // removing the text, we want to edit, from "Posts for review:" section
}

  function onApprove(e) {
    let containerDiv = e.currentTarget.parentNode // присвояваме данните от цялото поле "Posts for review", включително бутоните, които по-долу ще премахнем отделно
    publishedList.appendChild(containerDiv) // преместваме данните в поле "Completed orders"
    e.currentTarget.remove() // изтриваме данните от поле "Posts for review:"
    containerDiv.getElementsByTagName('button')[0].remove() // изтриваме бутон "approve"
    containerDiv.getElementsByTagName('button')[1].remove() // изтриваме бутон "edit"
}

  function onClear(ev) {
    let listElements = publishedList.children; // .children property returns a live HTMLCollection which contains all of the child elements of the element upon which it was called.
    while (listElements.length > 0) {
        listElements[0].remove();
    }
  }
}