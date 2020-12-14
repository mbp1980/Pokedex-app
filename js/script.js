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

  function getAll() {
    return pokemonList;
  }

  function add (pokemon) {
    pokemonList.push(pokemon);
  }

  return {
    getAll: getAll,
    add: add
  };

})();
console.log( pokemonRepository.getAll() );

pokemonRepository.getAll().forEach(function(pokemon) {
    document.write(pokemon.name + ' is ' + pokemon.height + ' tall ' + '<br />');
  })
