import React, { useEffect, useState } from "react";
import Search from "./components/Search";
import PopularMovie from "./components/PopularMovie";

import { useDispatch, useSelector } from "react-redux";

import { AppStyledDiv } from "./style";
import { fetchMoviesRequest } from "./store/actions";
import { RootState } from "./store/store";

function App() {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const dispatch = useDispatch();
  const { movies, loading, error } = useSelector(
    (state: RootState) => state.movies
  );

  console.log(movies);

  useEffect(() => {
    if (searchQuery !== "") {
      // @ts-ignore
      dispatch(fetchMoviesRequest(searchQuery));
    }
  }, [searchQuery]);

  const handleMovieSearch = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <AppStyledDiv>
      <Search handleMovieSearch={handleMovieSearch} />
      <PopularMovie movies={movies} />
    </AppStyledDiv>
  );
}

export default App;
