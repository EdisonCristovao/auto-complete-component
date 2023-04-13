import React, { useCallback, useEffect, useState } from "react";
import "./App.css";
import AutoComplete from "./components/AutoComplete/AutoComplete";
import { search } from "./service/service";

function App() {
  const [options, setOptions] = useState<any[]>([]);
  const [query, setQuery] = useState<string>("");

  const getMovies = async (query: string) => {
    const movies = await search(query);
    setOptions(movies);
  };

  const handleQueryChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setQuery(e.target.value);
    },
    []
  );

  const handleItemClick = useCallback(
    (item: any) => () => {
      setQuery(item.title);
      setOptions([]);
    },
    []
  );

  useEffect(() => {
    const delay = setTimeout(async () => {
      if (query.trim().length > 0) {
        await getMovies(query);
      } else {
        setOptions([]);
      }
    }, 800); // delay time in milliseconds

    // cleanup function to clear timeout if input changes again before delay is up
    return () => clearTimeout(delay);
  }, [query]);

  return (
    <div className="App">


      <h1>Auto complete</h1>
      <AutoComplete
        inputProps={{className: 'input'}}
        optionProps={{className: 'option'}}
        isDynamicOption
        options={options}
        getOptionLabel={(option: any) => option.title}
        inputValue={query}
        onInputChange={handleQueryChange}
        onOptionClick={handleItemClick}
      />
    </div>
  );
}

export default App;
