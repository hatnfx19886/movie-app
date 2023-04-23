const apiKey = "c5f618b4f7e595ff4e83d24690387a7a";

const requestConfig = {
  original: `/discover/tv?api_key=${apiKey}&with_network=123`,
  action: `/discover/movie?api_key=${apiKey}&with_genres=28`,
  comedy: `/discover/movie?api_key=${apiKey}&with_genres=35`,
  document: `/discover/movie?api_key=${apiKey}&with_genres=99`,
  horror: `/discover/movie?api_key=${apiKey}&with_genres=27`,
  romance: `/discover/movie?api_key=${apiKey}&with_genres=10749`,
  toprated: `/movie/top_rated?api_key=${apiKey}&language=en-US`,
  trending: `/trending/all/week?api_key=${apiKey}&language=en-US`,
};

export default requestConfig