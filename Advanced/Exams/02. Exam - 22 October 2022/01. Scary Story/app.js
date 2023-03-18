

// Another



window.addEventListener("load", solve);

function solve() {
  //input
  let firstName = document.getElementById('first-name');
  let lastName = document.getElementById('last-name');
  let age = document.getElementById('age');
  let title = document.getElementById('story-title');
  let genre = document.getElementById('genre');
  let story = document.getElementById('story');
  let arr = [firstName, lastName, age, title, genre, story];
  //let arrValues=[firstName.value,lastName.value,age.value,title.value,genre.value,story.value];


  //let arrValues=[firstNameValue,lastNameValue,ageValue,titleValue,genreValue,storyValue];
  let previewSection = document.getElementById('preview-list');



  let btnPublish = document.getElementById('form-btn')
  btnPublish.addEventListener('click', onPublish)


  function onPublish(event) {

    if (arr.every(x => x.value.length > 0) && Number(age.value)>0) {

      //console.log(genre.value);

      //console.log(previewSection);
      previewSection.innerHTML += `
      <li class="story-info">
      <article>
          <h4>Name: ${firstName.value} ${lastName.value}</h4>
          <p>Age: ${age.value}</p>
          <p>Title: ${title.value}</p>
          <p>Genre: ${genre.value}</p>
          <p>${story.value}</p>
      </article>
      <button class="save-btn">Save Story</button>
      <button class="edit-btn">Edit Story</button>
      <button class="delete-btn">Delete Story</button>
  </li>
      `

      arr.map(x => x.value = '');
      btnPublish.disabled = true;

      let btnSave = document.getElementsByClassName('save-btn')[0];
      let btnEdit = document.getElementsByClassName('edit-btn')[0];
      let btnDelete = document.getElementsByClassName('delete-btn')[0];

            btnSave.addEventListener('click', onSave);
      btnEdit.addEventListener('click', onEdit);
       btnDelete.addEventListener('click', onDelete);


    }
  }


  function onEdit(event) {
    let myStory = document.getElementsByClassName('story-info')[0];
    myStory.remove();

    let article = Array.from(event.target.parentElement.querySelector('article').children);
    let names = article[0].textContent.split(': ');
    let [firstName, lastName] = names[1].split(' ')
    let age = article[1].textContent.split(': ')[1];
    let title = article[2].textContent.split(': ')[1];
    let genre = article[3].textContent.split(': ')[1];
    let story = article[4].textContent;

    let arrValues = [firstName, lastName, age, title, genre, story];
    for (let i = 0; i < arr.length; i++) {
      arr[i].value = arrValues[i]
    }

    btnPublish.disabled = false;
  }

  function onSave(event){
    let mainDiv=document.getElementById('main');
    mainDiv.innerHTML='';
    mainDiv.innerHTML+=`<h1>Your scary story is saved!</h1>`
  }

  function onDelete(event){
    let myStory = document.getElementsByClassName('story-info')[0];
    myStory.remove();
    btnPublish.disabled = false;
  }
}