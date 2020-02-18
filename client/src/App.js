import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [api] = useState(`http://localhost:4000/api/cars`);
  const [cars, setCars] = useState([]);

  useEffect(() => {
    axios.get(api)
      .then(res => {
        setCars(res.data)
      })
      .catch(err => {
        console.log('error: ', err)
      })
  }, [])

  return (
    <div className="App">
    <h3>Cars in stock</h3>
      {
        cars.map(car => {
          return <p key={car.id} >{car.make} {car.modle}, Odometer: {car.mileage}</p>
        })
      }
    </div>
  );
}

export default App;
