import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import SoloCard from "../components/SoloCard";
const Country = (e) => {
  const [countries, setCountries] = useState([]);
  const { name } = useParams();
  const [filterCountries, setFilterCountries] = useState("");
  const [debouncedFilter, setDebouncedFilter] = useState(filterCountries)
  useEffect(() => {
    const timerid = setTimeout(() => {
      setDebouncedFilter(filterCountries)
    }, 1500)
    return () => {
      clearTimeout(timerid)
    }
  }, [filterCountries])
  useEffect(() => {
    const fetchCountryData = async () => {
      const {data} = await axios.get(`https://restcountries.com/v2/name/${name}`);
      console.log(data)
      setCountries(data);
    };
    fetchCountryData();
  }, [name, debouncedFilter]);

  return (
    <div className="Country">
      <Link to="/"><button className="back-home">Back Home</button></Link>
     <SoloCard countries={countries} filterCountries={filterCountries} />
    </div>
  );
};

export default Country;
