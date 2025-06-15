import { data } from "react-router-dom";

const API_KEY = "38ce8ce0c316593e1c60c68fea8a5be2";
const BASE_URL = "https://api.themoviedb.org/3";

export const getPopularMovies = async () => {
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);

    const date = await response.json()
    return data.results
};

export const searchMovies = async (query) => {
    const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`);

    const date = await response.json()
    return data.results
};