// STEP 2: displayList function will eventually append our movie list in the page. We first use console log. one step at a time before really appending it using the DOM elements via Jquery.
// response is refering to the returned chunk of DATA. to access just the movie title, we need to access it via this syntax: movies["Search"][0]["Title"];
//response in this case is:
// {
//     "Search": [
//         {
//             "Title": "Jaws",
//             "Year": "1975",
//             "imdbID": "tt0073195",
//             "Type": "movie",
//             "Poster": "http://ia.media-imdb.com/images/M/MV5BNDcxODkyMjY4MF5BMl5BanBnXkFtZTgwOTk5NTc5MDE@._V1_SX300.jpg"
//         },
// and etc..
// for each object append the movie Title

var displayList = function(response) {
  var movies = response["Search"];

  movies.forEach(function(movie){
  console.log(movie["Title"]);
  $('.displayList').append(movie["Title"]);
  });
  // console.log(response["Search"][0]["Title"]);
};

// Step 1: Tie an onclick event listener to the submit button
// add event.preventDefault in order to fight the nature of a form to submit the value somewhere because we would want to hold onto the value.
//next we want to pass the params/ value of the input text and assign it to a variable (searchTerm) using.val()
//next we set the settings to ajax. URL and Method is defined. DOT DONE is what you do when your done, in our case Run the Display List function. refer to Step 2 NOW! defined above.
$('.submitBtn').on('click', function(event){
  event.preventDefault(); //to prevent submission of form. we wanna hold onto the value

  //Step 3 is to clear the page after every search to prevent results from stacking.
  $(".displayList").empty()
  //
  var searchTerm = $("#movie-title").val();
  var settings = {
    url: "http://www.omdbapi.com/?s=" + searchTerm ,
    method: 'get'
  };
  $.ajax(settings).done(displayList)
  // console.log(settings.url);
});
