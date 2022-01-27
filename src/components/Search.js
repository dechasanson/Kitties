import React from "react";
import "font-awesome/css/font-awesome.min.css";

const Search = (props) => {
  const { filterTerm, setFilterTerm } = props;

  return (
    <form
      id="search"
      className="search"
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <span className="wrappedFilter">
        <i className="fa fa-search">{"  "}</i>
        <input
          id="keywords"
          type="text"
          className="search"
          value={filterTerm}
          onChange={(event) => {
            setFilterTerm(event.target.value);
          }}
        />
        <button onClick={() => setFilterTerm("")}>x</button>
      </span>
    </form>
  );
};

export default Search;
