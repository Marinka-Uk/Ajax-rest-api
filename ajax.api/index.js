const formRef = document.querySelector('.js-search-form');
const articlesContainerRef = document.querySelector('.js-articles-container');
const loagMoreBtnRef = document.querySelector('[data-action="load-more"]')

const BASE_URL = 'https://newsapi.org/v2/everything/'
const API_KEY = '3ce63eea477043d7a470d2b21dc5ab4b'

const options = {
    headers: {
        'Authorization': API_KEY
    },

}


const searchArticles = query => {
    return fetch(`${BASE_URL}?q=${query}&apiKey=${API_KEY}&pageSize=20&page=2`)
    .then(response => response.json())
}
function createArticleCards(articles) {
    return articles.map(article => {
        return `
        <li>
            <a href="${article.url}" target="_blank" rel="noopener noreferrer">
            <article>
                <img src="${article.urlToImage}" alt="" width="480">
                <h2>${article.title}</h2>
                <p>Posted by: ${article.author}</p>
                <p>${article.description}</p>
            </article>
            </a>
        </li>
        `
    })
}


formRef.addEventListener('submit', onSearch)
function onSearch(event){
    event.preventDefault() 
        searchArticles(event.currentTarget.elements.query.value)
    .then(res => res.articles)
    .then(articles => {
        const markup = createArticleCards(articles)
        articlesContainerRef.innerHTML = markup
    })
    }