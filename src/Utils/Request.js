// const Api_key = process.env.VITE_API_KEY;
const Api_key = import.meta.env.VITE_API_KEY;

const requests = {
  getTrendingMv: `/trending/all/week?api_key=${Api_key}&language=en-US`,
  getNetflixAllMovies: `/discover/tv?api_key=${Api_key}&with_networks=213`,
  getTopRatedMv: `/movie/top_rated?api_key=${Api_key}&language=en-US`,
  getComedy: `/discover/movie?api_key=${Api_key}&with_genres=35`,
  getAction: `/discover/movie?api_key=${Api_key}&with_genres=28`,
  getHoror: `/discover/movie?api_key=${Api_key}&with_genres=27`,
  getRomance: `/discover/movie?api_key=${Api_key}&with_genres=10749`,
  getDocumentaries: `/discover/movie?api_key=${Api_key}&with_genres=99`,
  getPopularTVSeries: `/tv/popular?api_key=${Api_key}&language=en-US&page=1`,
};

export default requests;

