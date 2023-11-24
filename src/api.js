//api.js
import axios from "axios";

const apikey = process.env.REACT_APP_APIKEY;
const baseurl = process.env.REACT_APP_BASEURL;

export const getMovieList = async () => {
  try {
    const movieResponse = await axios.get(
      `${baseurl}/movie/popular?&page=1&api_key=${apikey}`
    );
    console.log("Movie Response:", movieResponse.data); // Log the response

    return movieResponse.data.results; // Assuming the movies are in the 'results' property
  } catch (error) {
    console.error("Error fetching movie list:", error);
    return []; // Return an empty array in case of an error
  }
};

export const getMovieList2 = async () => {
  try {
    const movieResponse = await axios.get(
      `${baseurl}/movie/top_rated?&page=1&api_key=${apikey}`
    );
    console.log("Movie Response:", movieResponse.data); // Log the response

    return movieResponse.data.results; // Assuming the movies are in the 'results' property
  } catch (error) {
    console.error("Error fetching movie list:", error);
    return []; // Return an empty array in case of an error
  }
};

export const getMovieList3 = async () => {
  try {
    const movieResponse = await axios.get(
      `${baseurl}/movie/now_playing?&page=1&api_key=${apikey}`
    );
    console.log("Movie Response:", movieResponse.data); // Log the response

    return movieResponse.data.results; // Assuming the movies are in the 'results' property
  } catch (error) {
    console.error("Error fetching movie list:", error);
    return []; // Return an empty array in case of an error
  }
};


// export const searchMovie = async (q) => {
//   try {
//     const searchResponse = await axios.get(
//       `${baseurl}/search/movie?query=${q}&page=1&api_key=${apikey}`
//     );
//     console.log("Search Response:", searchResponse.data);
//     return searchResponse.data;
//   } catch (error) {
//     console.error("Error fetching search results:", error);
//     return []; // Return an empty array in case of an error
//   }
// };
