import React from "react";
import searchIcon from "../../images/search.svg";
import { useContext } from "react";
import { SearchContext } from "../../contexts/search-context.jsx";
import "./search-bar.scss";

const SearchBar = () => {
  const { setGuest, setCity } = useContext(SearchContext);
  const setCityInput = (event) => {
    let cityInput = event.target.value;
    setCity(cityInput);
  };
  const setGuestInput = (event) => {
    let guestInput = event.target.value;
    setGuest(guestInput);
  };
  return (
    <div className="search-bar">
      <form action="">
        <input
          onChange={(event) => setCityInput(event)}
          type="text"
          name=""
          id=""
          placeholder="Location"
        />
        <input
          onChange={(event) => setGuestInput(event)}
          type="text"
          name=""
          id=""
          placeholder="Add guests"
        />
        <div className="search-icon">
          <img src={searchIcon} alt="" />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
