const tmdbKey = '63b1842c5d5e843b7a652969c9624020';
const tmdbBaseUrl = 'https://api.themoviedb.org/3';
const playBtn = document.getElementById('playBtn');

const getGenres = async () => {
  const genreRequestEndpoint = '/genre/movie/list';
  // query parameters to add specificity to our request
  const requestParams = `?api_key=${tmdbKey}`;
  // the URL where we’ll send our fetch request
  const urlToFetch = `tmdbBaseUrl${genreRequestEndpoint}${requestParams}`;

    try {
      const response = await fetch(urlToFetch);
      if (response.ok) {
        // capture data needed to populate and convert response object to a JSON object
        const jsonResponse = await response.json();
        const genres = jsonResponse.genres;
        return genres;
      }
    } catch (error) {
      console.log(error);
    };
};
// fetch a list of movies based on the genre selected from the list of genres we returned in getGenres()
const getMovies = async () => {
  const selectedGenre = getSelectedGenre();
  const discoverMovieEndpoint = '/discover/movie';
  const requestParams = `?api_key=${tmdbKey}&with_genre=${selectedGenre}`;
  const urlToFetch = `${tmdbBaseUrl}${discoverMovieEndpoint}${requestParams}`;

  try {
    const response = await fetch(urlToFetch); 
    if(response.ok) {
      const jsonResponse = await response.json();
      const movies = jsonResponse.results;
      return movies;
    }
  } catch (error) {
    console.log(error)
  }
};

const getMovieInfo = async (movie) => {
  const movieId = movie.id;
  const movieEndpoint = `/movie/${movieId}`;
  const requestParams = `?api_key=${tmdbKey}`;
  const urlToFetch = `${tmdbBaseUrl}${movieEndpoint}${requestParams}`;

  try {
    const response = await fetch(urlToFetch);
    if(response.ok) {
      const jsonResponse = await response.json();
      const movieInfo = jsonResponse;
      return movieInfo;
      } 
    } catch (error){
      console.log(error);
    }
};
// Gets a list of movies and ultimately displays the info of a random movie from the list
const showRandomMovie = async () => {
  const movieInfo = document.getElementById('movieInfo');
  if (movieInfo.childNodes.length > 0) {
    clearCurrentMovie();
  };

  const movies = await getMovies(); 
  const randomMovie = getRandomMovie(movies);
  const info = await getMovieInfo(randomMovie)
  displayMovie(info)

};

getGenres().then(populateGenreDropdown);
playBtn.onclick = showRandomMovie;