/*alert('Hello world');

let favoriteFood  = 'Fried Chicken';
document.write(favoriteFood );*/

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

for (let i=0; i < pokemonList.length; i++){
  if (pokemonList[i].height <1 && pokemonList[i].height >.5){
    document.write(pokemonList[i].name + "  (Height .7) <br /> ");
  }else if (pokemonList[i].height <.5){
    document.write(pokemonList[i].name + " (Height .5) <br /> ");
  }else if (pokemonList[i].height <.5){
    document.write(pokemonList[i].name + " (Height 1.5) <br /> ");
  }else if (pokemonList[i].height <.6){
      document.write(pokemonList[i].name + " (Height .5) <br /> ");
  }else {
    document.write(pokemonList[i].name + " (Height 1.5) - Wow, that's a big pokemon <br /> ");
  }
}
