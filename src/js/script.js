let pokemonRepository = (function() {
  // Declares our list of pokemon
  let pokemonList = [];
  let apiUrl = "https://pokeapi.co/api/v2/pokemon/?limit=898";

  // Displays Status Messages
  let status = document.querySelector(".status");
  function showLoadingMessage() {
    status.classList.remove("ready");
    status.classList.add("loading");
    status.innerHTML = "Loading...";
  }

  function showReadyMessage() {
    status.classList.remove("loading");
    status.classList.add("ready");
    status.innerHTML = "Ready";
  }

  // Creates a button for each pokemon in the pokemon list
  function addListItem(pokemon) {
    let selectList = document.querySelector(".pokemon-list");
    let button = document.createElement("button");
    button.innerText = pokemon.name;
    button.classList.add("list-group-item");
    button.classList.add("text-capitalize");
    button.setAttribute("type", "button");
    button.classList.add("btn");
    button.classList.add("btn-primary");
    button.setAttribute("data-target", "#pokemon-info");
    button.setAttribute("data-toggle", "modal");
    button.setAttribute("data-bs-name", pokemon.name);
    selectList.appendChild(button);
    button.addEventListener("click", function() {
      showDetails(pokemon);
    });
  }

  function showModal(pokemon) {
    let modalHeader = $(".modal-header");
    let modalTitle = $(".modal-title");
    let modalBody = $(".modal-body");
    let modalId = $("#pokemon-id");
    modalTitle.empty();
    modalBody.empty();
    modalId.empty();
    let pokemonId = document.createElement("p");
    let pokemonImage = document.createElement("img");
    pokemonImage.setAttribute("src", pokemon.imageUrl);
    pokemonImage.classList.add("img-fluid");
    pokemonImage.classList.add("mb-2");
    pokemonImage.classList.add("pokepic");
    let pokemonHeight = document.createElement("p");
    pokemonHeight.innerText = "Height: " + pokemon.height / 0.1 + " cm";
    let pokemonWeight = document.createElement("p");
    pokemonWeight.innerText = "Weight: " + pokemon.weight / 10 + " kg";

    modalTitle.append(pokemon.name);
    modalBody.append(pokemonId);
    modalBody.append(pokemonImage);
    modalBody.append(pokemonHeight);
    modalBody.append(pokemonWeight);

    pokemon.types.forEach(function(pokemon) {

    });
  }

  // Shows the pokemon's name in the console
  function showDetails(pokemon) {
    loadDetails(pokemon).then(function() {
      showReadyMessage();
      showModal(pokemon);
    });
  }

  // Retrieves the full pokemon list
  function getAll() {
    return pokemonList;
  }

  // Adds a pokemon to the list only if the passed argument is an object
  function add(pokemon) {
    if (typeof pokemon === "object") {
      pokemonList.push(pokemon);
    } else {
      return "Sorry, Pokemon must have an Id, Name, Type, and Height.";
    }
  }

  // Loads the list of Pokemon from the API
  function loadList() {
    showLoadingMessage();
    return fetch(apiUrl)
      .then(function(response) {
        return response.json();
      })
      .then(function(json) {
        showReadyMessage();
        json.results.forEach(function(item) {
          let pokemon = {
            name: item.name,
            detailsUrl: item.url
          };
          add(pokemon);
        });
      })
      .catch(function(error) {
        showReadyMessage();
        console.log(error);
      });
  }

  // Loads the details for each pokemon
  function loadDetails(item) {
    showLoadingMessage();
    let url = item.detailsUrl;
    return fetch(url)
      .then(function(response) {
        return response.json();
      })
      .then(function(details) {
        item.id = details.id;
        item.imageUrl = details.sprites.other.dream_world.front_default;
        item.height = details.height;
        item.weight = details.weight;
        item.types = details.types;
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  // Returns to functions from IIFE
  return {
    getAll: getAll,
    add: add,
    loadList: loadList,
    loadDetails: loadDetails,
    addListItem: addListItem
  };
})();

// Loops through Pokemon List and displays each pokemon's name
pokemonRepository.loadList().then(function() {
  pokemonRepository.getAll().forEach(function(pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});

function searchPokemon() {
  let searchText = document.querySelector("#pokemon-search").value;
  let x = searchText.toLowerCase();
  let pokes = document.querySelectorAll(".list-group-item");
  for (let i = 0; i < pokes.length; i++) {
    let y = pokes[i].innerText;
    if (y.toLowerCase().indexOf(x) > -1) {
      pokes[i].style.display = "";
    } else {
      pokes[i].style.display = "none";
    }
  }
}

window.addEventListener("keydown", function(e) {
  if (e.keyCode == "13") {
    e.preventDefault();
  }
});
