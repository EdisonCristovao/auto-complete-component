import { SuggestionType } from "../components/AutoComplete/types";

// Method to search on the Movies Mini Database
const search = async (query: string): Promise<SuggestionType[]> => {
  const options = {
    headers: {
      "X-RapidAPI-Key": "966bfe68d1msh9bccf2d4796aad6p174e54jsn364e27f250ab",
      "X-RapidAPI-Host": "moviesminidatabase.p.rapidapi.com",
    },
  };
  const result = await fetch(
    `https://moviesminidatabase.p.rapidapi.com/movie/imdb_id/byTitle/${query}`,
    options
  );
  const json = await result.json();
  return json.results;
};

export { search };
