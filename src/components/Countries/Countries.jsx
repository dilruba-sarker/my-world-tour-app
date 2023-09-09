import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = () => {
    const [countries,setCountries] = useState([])
    const [countriesVisited,setCountriesVisited] = useState([])
useEffect(()=>{
    fetch("https://restcountries.com/v3.1/all")
    .then(res=> res.json())
    .then(data=>setCountries(data))
},[])

const handleVisitedCountry=country=>{
    console.log(country);
}
    return (
        <>
            <h3>All Countries:{countries.length}</h3>
            <div>
                <h5>Visited Countries</h5>
                <ul></ul>
            </div>
            <div className='country-container' >
            {countries.map(count=><Country key={count.name}
            handleVisitedCountry={handleVisitedCountry}
            country={count}></Country>
            )}
        </div> </>
    );
};

export default Countries;