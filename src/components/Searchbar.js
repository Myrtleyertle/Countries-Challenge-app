import React from "react";
import "../App.css"
const Searchbar = ({setFilterCountries}) => {
  return (
    <div>
      <div className="filter--search">
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <input
            className="search"
            onChange={(event) => {
              setFilterCountries(event.target.value);
            }}
            type="text"
            name="filter"
            placeholder="Search Country"
          />
        </form>
        <div>
          <select
            onChange={(event) => {
              setFilterCountries(event.target.value);
            }}
          >
            <option className="filterregion" value="">
              Filter by Region
            </option>
            <option className="africa" value="Africa">
              Africa
            </option>
            <option className="americas" value="Americas">
              Americas
            </option>
            <option className="asia" value="Asia">
              Asia
            </option>
            <option className="europe" value="Europe">
              Europe
            </option>
            <option className="oceania" value="Oceania">
              Oceania
            </option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Searchbar;
