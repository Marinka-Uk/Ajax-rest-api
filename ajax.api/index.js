import { NewsApiService } from "./api-service";

const formRef = document.querySelector('.js-search-form');
const articlesContainerRef = document.querySelector('.js-articles-container');
const loagMoreBtnRef = document.querySelector('[data-action="load-more"]')


const newsApiService = new NewsApiService()
console.log(newsApiService);

formRef.addEventListener('submit', onSearch)
loagMoreBtnRef.addEventListener('click', onLoadMore)



let page = 1;
let searchQuery;


console.log('page до сабміту', page);


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
   newsApiService.searchQuery = event.currentTarget.elements.query.value
       newsApiService.searchArticles()
    .then(res => res.articles)
    .then(articles => {
        const markup = createArticleCards(articles)
        articlesContainerRef.insertAdjacentHTML('beforeend', markup)
        newsApiService.page += 1;
        console.log('page до сабміту', page);
    })
    form.reset()
}


function onLoadMore() {
    newsApiService.searchArticles()
        .then(res => res.articles)
        .then(articles => {
            const markup = createArticleCards(articles)
            articlesContainerRef.insertAdjacentHTML('beforeend', markup)
            newsApiService.page += 1;
            console.log('page до сабміту', page);
        })
}