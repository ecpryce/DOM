var movieObject = {
    title: "Star Wars: A New Hope",
    genre: "Science Fiction",
    releaseDate: "May 25, 1977"
  }

//   Use document.querySelector() to grab a reference to each element in your HTML. Use the .innerHTML property to set the text of each element to the matching value in your object. (For example, the h1 with the id of "title" should contain the title property of your movieObject, etc).

var htmlString = `
  <h1 class="title">${movieObject.title}</h1>
  <h2 class="genre">
    ${movieObject.genre}
  </h2>
  <h3 class= "release-date">${movieObject.releaseDate}</h3>
`
document.querySelector("#movie-poster").innerHTML = htmlString;

// 

var downtownRestaurants = ["Backyard Pizza and Raw Bar", "The Bodega", "Surin of Thailand", "Bahnhof", "Jim's Steak and Spaghetti House", "The Peddler", "Jewel City Seafood Market", "Black Sheep Burritos & Brews", "La Famiglia", "Le Bistro", "Charlie Graingers", "The Cellar Door"];

// Loop over the downtownRestaurants array.
// Use the loop to create an <li> element for each item in the array.
// Use document.querySelector and .innerHTML to add each new <li> element to the #restaurants-list container.
// You should see a bulleted list of restaurants in the DOM.

for(var i = 0; i < downtownRestaurants.length; i++){
    document.querySelector("#restaurants-list").innerHTML += `<ul>${downtownRestaurants[i]}</ul>`
  }

//   

  var sandwichToppings = ["pickles", "extra cheese", "lettuce", "tomatoes", "avocado", "bacon", "mayo", "mustard"];

// //   Write a function that does the following things:
// Loop through sandwichToppings
// Build an <li> element for each item in the array.
// Use document.querySelector and .innerHTML to print your HTML string to the "#sandwich-container".
// Call the function. You should see a bulleted list of all the sandwich toppings in the DOM.

for(var i = 0; i < sandwichToppings.length; i++){
    document.querySelector("#sandwich-container").innerHTML += `<ul>${sandwichToppings[i]}</ul>`
}

// 

var movieSchedule = [
    {
      title: "Ralph Breaks the Internet",
      rating: "PG",
      currentlyPlaying: true,
      poster: "https://lumiere-a.akamaihd.net/v1/images/r_ralphbreakstheinternet_header_ddt-17403_08ef6d92.jpeg?region=0,0,1024,1274&optimize=true"
    }, 
    {
      title: "The Grinch",
      rating: "G",
      currentlyPlaying: true,
      poster: "https://images-na.ssl-images-amazon.com/images/I/71vgX4VFdiL._SY679_.jpg"
    },
    {
      title: "A Star is Born",
      rating: "R",
      currentlyPlaying: false,
      poster: "https://images-na.ssl-images-amazon.com/images/I/718zWbDKmvL._SY606_.jpg"
    },
     {
      title: "Bohemian Rhapsody",
      rating: "PG-13",
      currentlyPlaying: true
    },
    {
      title: "Fantastic Beasts: The Crimes of Grindlewald",
      rating: "PG-13",
      currentlyPlaying: true,
      poster: "https://images-na.ssl-images-amazon.com/images/I/716fk%2BBZ-NL._SY606_.jpg"
    },
    {
      title: "Robin Hood",
      rating: "PG-13",
      currentlyPlaying: false,
      poster: "https://images-na.ssl-images-amazon.com/images/I/61K%2BTyGjsCL.jpg"
    },
    {
      title: "Spider-Man: Into the Spider-Verse",
      rating: "PG-13",
      currentlyPlaying: true,
    }
  ]

// //   Use a for loop to loop through the movies, build an HTML representation of each movie, and insert it into the #movie-schedule container in the DOM.
// You can use any elements you like in your HTML string as long as all the data in the movieSchedule object is included.

var htmlString = `
  <h1 class="title">${movieSchedule.title}</h1>
  <h2 class="rating">${movieSchedule.rating}</h2>
  <h3 class="currentlyPlaying">${movieSchedule.currentlyPlaying}</h3>
  <img class="poster" src="${movieSchedule.poster}"</img>
  `
for(var i = 0; i < movieSchedule.length; i++){
    document.querySelector("#movie-schedule").innerHTML += `<h1>${movieSchedule[i].title}</h1>` + `<h2>${movieSchedule[i].rating}</h2>` + `<h3>Now Playing: ${movieSchedule[i].currentlyPlaying}</h3>` + `<img src="${movieSchedule[i].poster}"></img>`
}

