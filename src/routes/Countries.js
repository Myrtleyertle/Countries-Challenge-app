import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Searchbar from "../components/Searchbar";
import Cards from "../components/Cards";
import { Container } from "react-bootstrap";
const url = "https://restcountries.com/v2/all";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [filterCountries, setFilterCountries] = useState("");
  const [debouncedText, setDebouncedText] = useState(filterCountries)
  useEffect(() => {
    const timerid = setTimeout(() => {
      setDebouncedText(filterCountries)
  
    }, 1000)
    return () => {
      clearTimeout(timerid)
    }

  }, [filterCountries])
  useEffect(() => {
    const fetchCountriesData = async () => {
      const {data} = await axios(url);
      console.log(data)
      setCountries(data);
    };
    fetchCountriesData();
  }, [debouncedText]);

  return (
    <div >
      <Searchbar setFilterCountries={setFilterCountries} />
      <Cards countries={countries} filterCountries={filterCountries}/>
    </div>
  );
};

export default Countries;
