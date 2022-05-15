import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Card } from "react-bootstrap";

const Cards = ({ countries, filterCountries }) => {
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
      const { numericCode, name, capital, population, region, flag } = country;
      return (
        <div className="ui card" style={{width: '490px',backgroundColor: 'var(--gridbackgroundcolor)'}} key={numericCode}>
          <img src={flag} className="flag--img card-img-top" alt={name} />
          <div className="card-body">
            <div className="card-title">{name}</div>
            <div className="card-text">Capital: {capital}</div>
            <div className="card-text">
              Population: {parseFloat(population).toLocaleString()}
            </div>
            <div className="card-text">region: {region}</div>
            <div>
            <Link to={`/Countries/${name}`} className="btn">
              <Button variant="primary">Learn More</Button>
            </Link>
            </div>
          </div>
        </div>
      );
    });
    
  return <div className="Cards">{card}</div>;
};

export default Cards;
