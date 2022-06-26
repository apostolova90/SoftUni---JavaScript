function schoolLibrary(arr) {
 
    let allBooks = arr.shift().split('&');
 
    for (let line of arr) { 
        let lineInfo = line.split(" | "); 
        let command = lineInfo.shift()
        let book = lineInfo[0]
 
        if (command === "Done"){
            break;
        }
 
        if (command === "Add Book"){
            if (!allBooks.includes(book)) {
                allBooks.unshift(book)
            }
 
        } 
        
        if (command === "Take Book"){
            if (allBooks.includes(book)) {
                allBooks = allBooks.filter(x => x !== book)
            }
        } 
        
        if (command === "Swap Books"){
            let book1 = lineInfo.shift();
            let book2 = lineInfo.shift();
            if (allBooks.includes(book1) && allBooks.includes(book2)) {
                firstIndex = allBooks.findIndex(x => x === book1)
                secondIndex = allBooks.findIndex(x => x === book2)
                allBooks[firstIndex] = book2
                allBooks[secondIndex] = book1
            }
        }
 
        if (command === "Insert Book"){
            allBooks.push(book)
        }
        
        if (command === "Check Book"){
            let index = Number(book)
            if (index > 0 && index <= allBooks.length) {
                console.log(allBooks[index])
            }
        }
 
 
 
    }
    console.log(allBooks.join(", "))
 
}
 
 
schoolLibrary(["Don Quixote&The Great Gatsby&Moby Dick",
"Add Book | Ulysses",
"Take Book | Don Quixote",
"Insert Book | Alice's Adventures in Wonderland",
"Done"])
 
console.log("________________")
 
schoolLibrary(["Anna Karenina&Heart of Darkness&Catch-22&The Stranger",
"Add Book | Catch-22",
"Swap Books | Anna Karenina | Catch-22",
"Take Book | David Copperfield",
"Done"]) 
 
console.log("________________")
 
schoolLibrary(["War and Peace&Hamlet&Ulysses&Madame Bovary",
"Check Book | 2",
"Swap Books | Don Quixote | Ulysses",
"Done"])
 
console.log("________________")
 
schoolLibrary(["War and Peace&Hamlet&Ulysses&Madame Bovary",
"Done", "Check Book | 2", 
"Swap Books | Don Quixote | Ulysses",
])


/* arr = arr.filter(x => x !== "")
    let shelf = arr.shift().split("&") || []
    const actions = {
        "Add Book": addBook,
        "Take Book": takeBook,
        "Swap Books": swapBooks,
        "Insert Book": insertBook,
        "Check Book": checkBook,
    }

    function addBook(book) {
        if (!shelf.includes(book)) {
            shelf.unshift(book)
        }
    }

    function takeBook(book) {
        if (shelf.includes(book)) {
            shelf = shelf.filter(x => x !== book)
        }
    }

    function swapBooks(book1, book2) {
        if (shelf.includes(book1) && shelf.includes(book2)) {
            firstIndex = shelf.findIndex(x => x === book1)
            secondIndex = shelf.findIndex(x => x === book2)
            shelf[firstIndex] = book2
            shelf[secondIndex] = book1
        }
    }

    function insertBook(book) {
        shelf.push(book)
    }

    function checkBook(index) {
        if (shelf[index] !== undefined) {
            console.log(shelf[index])
        }
    }

    for (let i = 0; i < arr.length; i++) {
        const [action, parameter1, parameter2] = arr[i].split(" | ")
        if (action === "Done") break

        try {
            actions[action](parameter1, parameter2)
        } catch (e) {
            continue
        }
    }

    console.log(shelf.join(", ")) 
}
schoolLibrary(["Don Quixote&The Great Gatsby&Moby Dick",
"Add Book | Ulysses",
"Take Book | Don Quixote",
"Insert Book | Alice's Adventures in Wonderland",
"Done"])
schoolLibrary(["Anna Karenina&Heart of Darkness&Catch-22&The Stranger",
"Add Book | Catch-22",
"Swap Books | Anna Karenina | Catch-22",
"Take Book | David Copperfield",
"Done"])

schoolLibrary(["War and Peace&Hamlet&Ulysses&Madame Bovary",
"Check Book | 2",
"Swap Books | Don Quixote | Ulysses",
"Done"])


входове (нещо не о с тях)

Don Quixote&The Great Gatsby&Moby Dick&Hamlet
Add Book | The Odyssey
Take Book | Don Quixote
Insert Book | Alice's Adventures in Wonderland
Check Book | 3
Done

Anna Karenina&Heart of Darkness&Catch-22& The Stranger
Add Book | David Copperfield
Add Book | One Thousand and One Nights
Swap Books | One Thousand and One Nights | Catch-22
Take Book | David Copperfield
Insert Book | The Stories of Anton Chekhov
Check Book | 17
Done
 


  */