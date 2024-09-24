// @ts-nocheck
import React, { useRef } from "react";
import { SearchStyledDiv } from "./style";

interface ISearch {
  handleMovieSearch: (query: string) => void;
}

const Search: React.FC<ISearch> = ({ handleMovieSearch }) => {
  let inputRef = useRef(null);

  const handleSearch = () => {
    handleMovieSearch(inputRef?.current?.value);
    inputRef.current.value = "";
  };
  return (
    <SearchStyledDiv>
      <input type="search" ref={inputRef} placeholder="Search popular movies" />
      <button type="button" onClick={handleSearch}>
        Search
      </button>
    </SearchStyledDiv>
  );
};

export default Search;
