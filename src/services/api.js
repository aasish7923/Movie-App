const API_KEY = "60638b2555bd14c2c84b033e85435c09"
const BASE_URL = "https://api.themoviedb.org/3" // /3=spopular , /search=search

export const getPopularMovies = async () => {
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
    const data = await response.json();
    return data.results

};

export const searchMovies = async (query) => {
    const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${
        encodeURIComponent(query)}`); 
                            //removes anything from query that we cant pass
    const data = await response.json();
    return data.results
};
