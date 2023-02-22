function getArticleGenerator(input) {

    let articles = input;

    return()=>{
        if (articles.length > 0){
            let container = document.getElementById('content'); 
            let article = document.createElement('article');
            let currentText = articles.shift(); // режем първото изречение
            article.innerText = currentText // и го наливаме в article
            container.appendChild(article) // закачаме container, към parent-a (container)
        }
    };
}
