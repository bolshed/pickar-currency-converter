import React, { useState, useEffect } from 'react';
import './App.css';
import Converter from './Components/Converter';
import logo from './Assets/pickar_logo_white.png';


export default function App() {
  const [rates, setRates] = useState([]);
  const [errorMessage, setErrorMessage] = useState('')

  const getRates = async () => {
    await fetch('http://apilayer.net/api/live?access_key=10341aeef48bf3d1650185b1435d93ba&currencies=EUR,USD,%20CHF&source=USD&format=1')
      .then(res => res.json())
      .then(data => {
        setRates(data)
        console.log(data);
      })
      .catch(err => setErrorMessage(err.message));
  }

  // useEffect(() => { 
  //   getRates()
  // }, [])

  return (
    <div className="App">
      <img className='pickar-logo-white' src={logo} alt='logo'/>
      <Converter 
        getRates={getRates}
      />

          {/* <div className='background-upper-half'>
            <img className='pickar-logo-white' src={logo} alt='logo'/>
            <h1 > Convert acurrencies in real time </h1>      
          </div>    

          <div className='background-lower-half'>

          </div> */}
    </div>
  );
}

