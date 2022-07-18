// Another

function comments(arr) {

    let users = [];
    let articles = [];
    let comments = {};

    for (let i = 0; i < arr.length; i++) {
        if (arr[i].includes("user") || arr[i].includes("article")) {
            let tokens = arr[i].split(' ');
            let type = tokens[0];
            let value = tokens[1];
            if (type === "user") {
                users.push(value);
            } else if (type === "article") {
                articles.push(value);
            }
        } else {
            let tokens = arr[i].split(': ');
            let userArticle = tokens[0].split(' ');
            let user = userArticle.shift();
            let article = userArticle.pop();
            let commnetTitle = tokens[1].split(', ');
            let title = commnetTitle[0];
            let comment = commnetTitle[1];
            if (users.includes(user) && articles.includes(article) && comments.hasOwnProperty(article)) {
                comments[article][user] = `${title} - ${comment}`;
            } else if (users.includes(user) && articles.includes(article) && !comments.hasOwnProperty(article)) {
                comments[article] = {};
                comments[article][user] = `${title} - ${comment}`;
            }
        }
    }

    let sortedArticles = Object.entries(comments).sort(([keyA, valueA], [keyB, valueB]) => Object.keys(comments[keyB]).length - Object.keys(comments[keyA]).length);

    for (let el of sortedArticles) {
        let article = el.shift();
        let comments = el.shift();
        console.log(`Comments on ${article}`);
        let sortedUsers = Object.entries(comments).sort(([keyA, valueA], [keyB, valueB]) => keyA.localeCompare(keyB));
        for (let el of sortedUsers) {
            let user = el.shift();
            let comment = el.shift();
            console.log(`--- From user ${user}: ${comment}`);
        }
    }
}

comments(['user aUser123', 'someUser posts on someArticle: NoTitle, stupidComment', 'article Books', 'article Movies', 'article Shopping', 'user someUser', 'user uSeR4', 'user lastUser', 'uSeR4 posts on Books: I like books, I do really like them', 'uSeR4 posts on Movies: I also like movies, I really do', 'someUser posts on Shopping: title, I go shopping every day', 'someUser posts on Movies: Like, I also like movies very much'])