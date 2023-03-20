

// Another   ---   88/100

window.addEventListener("load", solve);
 
function solve() {
  let submitBtn = document.getElementById("form-btn");
  submitBtn.addEventListener("click", submit);
  let clearBtn = document.getElementById("clear-btn");
  clearBtn.addEventListener("click", clear);
  let firstName = document.getElementById("first-name");
  let lastName = document.getElementById("last-name");
  let age = document.getElementById("age");
  let gender = document.getElementById("genderSelect");
  let description = document.getElementById("task");
  let counter = document.getElementById("progress-count");
  let finishedList = document.getElementById("finished");
 
  function submit(e) {
    e.preventDefault();
    let firstNameValue = firstName.value;
    let lastNameValue = lastName.value;
    let ageValue = age.value;
    let genderValue = gender.value;
    let descriptionValue = description.value;
    if (!firstNameValue || !lastNameValue || !ageValue || !descriptionValue) {
      return;
    }
 
    firstName.value = "";
    lastName.value = "";
    gender.value = "Male";
    age.value = "";
    description.value = "";
 
    submitDish(
      firstNameValue,
      lastNameValue,
      ageValue,
      genderValue,
      descriptionValue
    );
  }
 
  function submitDish(
    firstNameValue,
    lastNameValue,
    ageValue,
    genderValue,
    descriptionValue
  ) {
    let mother = document.getElementById("in-progress");
    let li = document.createElement("li");
    li.classList.add("each-line");
    let article = document.createElement("article");
    let h4 = document.createElement("h4");
    h4.textContent = `${firstNameValue} ${lastNameValue}`;
    let pGenderAge = document.createElement("p");
    pGenderAge.textContent = `${genderValue}, ${ageValue}`;
    let pDescription = document.createElement("p");
    pDescription.textContent = `Dish description: ${descriptionValue}`;
    mother.appendChild(li);
    li.appendChild(article);
    article.appendChild(h4);
    article.appendChild(pGenderAge);
    article.appendChild(pDescription);
    let editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.classList.add("edit-btn");
    let completeBtn = document.createElement("button");
    completeBtn.textContent = "Mark as complete";
    completeBtn.classList.add("complete-btn");
 
    li.appendChild(editBtn);
    editBtn.addEventListener("click", editDish);
    li.appendChild(completeBtn);
    completeBtn.addEventListener("click", completeDish);
    counter.textContent = Number(counter.textContent) + 1;
  }
 
  function editDish(e) {
    counter.textContent = Number(counter.textContent) - 1;
    let article = e.target.parentElement.children[0];
    let articleContent = article.children;
    let nameValue = articleContent[0].textContent;
    let genderAgeValue = articleContent[1].textContent;
    let descriptionValue = articleContent[2].textContent;
    firstName.value = nameValue.split(" ")[0];
    lastName.value = nameValue.split(" ")[1];
    gender.value = genderAgeValue.split(", ")[0];
    age.value = genderAgeValue.split(", ")[1];
    description.value = descriptionValue.split(": ")[1];
 
    article.parentElement.remove();
  }
 
  function completeDish(e) {
    counter.textContent = Number(counter.textContent) - 1;
    let dish = e.target.parentElement;
    let completed = document.getElementById("finished");
    completed.appendChild(dish);
    Array.from(completed.getElementsByClassName("edit-btn")).forEach((btn) =>
      btn.remove()
    );
    Array.from(completed.getElementsByClassName("complete-btn")).forEach(
      (btn) => btn.remove()
    );
  }
 
  function clear(e) {
    Array.from(finishedList.children).forEach((li) => li.remove());
  }
}