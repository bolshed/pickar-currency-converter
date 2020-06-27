import React from 'react';
import './Converter.css';
import switcher from '../Assets/switcher.png'

export default function Converter (props) {
  const getRates = (e) => {
    e.preventDefault()
    props.getRates()
  }
    return (
        <div className='converter'>
          <h1 className='headline'> Convert currencies in real time </h1>
          <div >
            <div className='box-background'>
              <form>
              <label className='input-field' htmlFor='amount' > Amount </label>  
              <input type='text' name='amount' defaultValue='1.00'/>
              <label className="dropdown-from" htmlFor='dropdown-from'> From </label>  
              <select name="dropdown-from" >
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="CHF">CHF</option>
              </select>       
              <button><img src={switcher} alt='switcher'/></button> 
              <label className="dropdown-to" htmlFor='dropdown-to' > To </label>  
              <select name="dropdown-to" >
                <option value="EUR">EUR</option>
                <option value="USD">USD</option>
                <option value="CHF">CHF</option>
              </select>
              <input type="submit" value="Convert" onClick={getRates}/>

              </form>
            </div>
          </div>
          <div className='result'>
            <h1> RESULT</h1>
          </div>
        </div>
    )
}