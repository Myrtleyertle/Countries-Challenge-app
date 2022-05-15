import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
const SoloCard = ({ countries, filterCountries }) => {
  const card = countries
    .filter((countries) => {
      //Search by name or region
      if (filterCountries === "") {
        return countries;
      } else if (
        countries.name.toLowerCase().includes(filterCountries.toLowerCase()) ||
        countries.region.toLowerCase().includes(filterCountries.toLowerCase())
      ) {
        return countries;
      }
    })
    .slice(0, 8)
    .map((country) => {
      const { numericCode, name, capital, population, region, flag, borders } =
        country;
      return (
        <div className="solo-card" key={numericCode}>
          <img src={flag} style={{ margin: "20px 50px" }} alt={name} />
          <div className="card-body">
            <div className="card-title" style={{ fontSize: "70px" }}>
              {name}
            </div>
            <div className="card-text" style={{ fontSize: "50px" }}>
              Capital: {capital}
            </div>
            <div className="card-text" style={{ fontSize: "50px" }}>
              Population: {parseFloat(population).toLocaleString()}
            </div>
            <div className="card-text" style={{ fontSize: "50px" }}>
              region: {region}
            </div>
            <div className="card-text" style={{ fontSize: "50px" }}>
              Borders: {borders.toLocaleString()}
            </div>
            <div></div>
          </div>
        </div>
      );
    });

  return <div className="Cards">{card}</div>;
};

export default SoloCard;
