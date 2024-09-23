// console.log(fetch(`https://pokeapi.co/api/v2/pokemon/`));

// const refs = {
//   form: document.querySelector('.js-search-form'),
//     container: document.querySelector('.js-card-container'),
//     btn: document.querySelector('.js-search-btn'),
//   search: document.querySelector('.js-search')
// }

// refs.btn.addEventListener('click', () => {
//     console.log(refs.search.value);
//     fetchPokemonById(refs.search.value)
//         .then(pokemon => {
//             const pokemonCard = ` <div class="card">
//   <div class="card-img-top">
//     <img src="${pokemon.sprites.front_default}" alt="">
//   </div>
//   <div class="card-body">
//     <h2 class="card-title">Ім'я:${pokemon.name} </h2>
//     <p class="card-text">Вага:${pokemon.weight} </p>
//     <p class="card-text">Зріст:${pokemon.height} </p>

//     <p class="card-text"><b>Вміння</b></p>
//     <ul class="list-group"></ul>   
//       <li class="list-group-item"></li>    
//     </ul>
//   </div>
// </div>
//      `
            
//             refs.container.innerHTML = pokemonCard
    

//         })
// })

// function fetchPokemonById(pokemonId) {
//    return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
//     .then(res => res.json())
// } 



    