window.addEventListener('load', solve);

function solve() {
    // getting the input data
    let genreInputElement = document.getElementById("genre");
    let nameInputElement = document.getElementById("name");
    let authorInputElement = document.getElementById("author");
    let dateInputElement = document.getElementById("date");
    // getting the body elements
    let allHitsDivElement = document.querySelector("div .all-hits-container"); // this one holds the section "Collection of songs"
    let savedSongsDivElement = document.querySelector("div .saved-container"); // this one holds the section "Saved songs"
    // getting the button and adding event listener
    let addButton = document.getElementById("add-btn");
    addButton.addEventListener("click", addSong);

    function addSong(e){ // the function for the addSong
        e.preventDefault();
        // getting the values of the elements
        let genre = genreInputElement.value;
        let name = nameInputElement.value;
        let author = authorInputElement.value;
        let date = dateInputElement.value;

        //validating the input data
        if(genre.trim().length != 0 && name.trim().length != 0 && author.trim().length != 0 && date.trim().length != 0){
            //creating and appending new elements
/* @ */     let newDivElement = document.createElement("div"); // the parent element which holds all the information, including the buttons 
            newDivElement.classList.add("hits-info");

            let newImgElement = document.createElement("img");
            newImgElement.src = "./static/img/img.png";
            let newGenreH2Element = document.createElement("h2");
            newGenreH2Element.textContent = `Genre: ${genre}`;
            let newNameH2Element = document.createElement("h2");
            newNameH2Element.textContent = `Name: ${name}`;
            let newAuthorH2Element = document.createElement("h2");
            newAuthorH2Element.textContent = `Author: ${author}`;
            let newDateH3Element = document.createElement("h3");
            newDateH3Element.textContent = `Date: ${date}`;
            // creating the new buttons in this section and adding classes and event listeners
            let newSaveButton = document.createElement("button"); // the "Save song" button
            newSaveButton.classList.add("save-btn");
            newSaveButton.textContent = "Save song";
            newSaveButton.addEventListener("click", saveSong);
            let newLikeButtonElement = document.createElement("button"); // the "Like song" button
            newLikeButtonElement.classList.add("like-btn");
            newLikeButtonElement.textContent = "Like song";
            newLikeButtonElement.addEventListener("click", increaseLikes);
            let newDeleteButtonElement = document.createElement("button"); // the "Delete" button
            newDeleteButtonElement.classList.add("delete-btn");
            newDeleteButtonElement.textContent = "Delete";
            newDeleteButtonElement.addEventListener("click", deleteSong);
            
            // appending/attaching all info we have to the parent element created for them ("newDivElement")
            newDivElement.appendChild(newImgElement);
            newDivElement.appendChild(newGenreH2Element);
            newDivElement.appendChild(newNameH2Element);
            newDivElement.appendChild(newAuthorH2Element);
            newDivElement.appendChild(newDateH3Element);
            newDivElement.appendChild(newSaveButton);
            newDivElement.appendChild(newLikeButtonElement);
            newDivElement.appendChild(newDeleteButtonElement);
            // appending/attaching the section with all the songs to the main parent which holds the entire right side
            allHitsDivElement.appendChild(newDivElement);
            
            // creatting the functions for the buttons "Delete", "Like song" and "Save song"
            function deleteSong(event){
                let btn = event.currentTarget;
                btn.parentNode.remove(); // we delete the entire song from this section
            }

            function increaseLikes(e){
                // getting the section where we count the number of likes songs and we change it
                let currentText = document.querySelector("div .likes>p").textContent; 
                let likesAsString = currentText.replace("Total Likes: ", ""); // changing the text, so we have a place for a number
                let totalLikes = Number(likesAsString); // string to number
                totalLikes++;
                document.querySelector("div .likes>p").textContent = `Total Likes: ${totalLikes}`;
                let btn = e.currentTarget;
                btn.disabled = true;
            }

            function saveSong(e){
                let btn = e.currentTarget;
                let wholeDiv = btn.parentNode; // апендваме данните от поле "Collection of songs"
                wholeDiv.querySelector("button.like-btn").remove(); // deleting the Like button
                wholeDiv.querySelector("button.save-btn").remove(); // deleting the Save button
                savedSongsDivElement.appendChild(wholeDiv); // преместваме данните в поле "Saved songs"
            }
            //clear input
            genreInputElement.value = "";
            nameInputElement.value = "";
            authorInputElement.value = "";
            dateInputElement.value = "";

        }
    }
}