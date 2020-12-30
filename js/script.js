let pokemonRepository = (function () {
  let pokemonList = [
    {
      name: 'Bulbasaur',
      height: .7,
      type: ['grass', 'poison']
    },
    {
      name: 'Weedle',
      height: .3,
      type: ['bug', 'poison']
    },
    {
      name: 'Pidgeot',
      height: 1.5,
      type: ['flying', 'normal']
    },
    {
      name: 'Squirtle',
      height: .5,
      type: ['water']
    }
];

//pokemonList.forEach(function(pokemon) {
  //document.write(pokemon.name + ' is ' + pokemon.height + ' tall ' + '<br />');
//});

//function myLoopFunction(pokemon) {
  //console.log(pokemon.name +  ' is ' + pokemon.height + 'tall');
//}
//pokemonList.forEach(myLoopFunction);

  function add(pokemon) {
    /*if(
      typeof pokemon ==="object" &&
      "name" in pokemon &&
      "height" in pokemon &&
      "types" in pokemon
    ) {
      pokemonList.push(pokemon);
    } else {
    console.log("pokemon is not correct")
  }*/
  }
  function getAll() {
    return pokemonList;
  }
  function addListItem(pokemon){
    let pokemonList = document.querySelector(".pokemon-list");
    let listPokemon = document.createElement("li");
    let button = document.createElement("button");
    button.addEventListener("click", function (pokemonList) {
      console.log(pokemon.name);
    });
    button.innerText = pokemon.name;
    button.classList.add("button-class");
    listPokemon.appendChild(button);
    pokemonList.appendChild(listPokemon);
  }
  return {
    getAll: getAll,
    add: add,
    addListItem: addListItem
  };

})();
//console.log( pokemonRepository.getAll() );

pokemonRepository.getAll().forEach(function(pokemon) {
  //document.write(pokemon.name + ' is ' + pokemon.height + ' tall ' + '<br />');
  pokemonRepository.addListItem(pokemon);
});

//let container = document.querySelector('.container');

//let button = document.createElement('button');
//button.innerText = 'click me';
//container.appendChild(button)
