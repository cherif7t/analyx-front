import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './App.css'

function App() {
  const [header, setHeader] = useState([]);

  const [body, setBody] = useState([]);

  useEffect(() => {
    fetchHeader();
  }, []);

  const fetchHeader = async () => {
    try {
      const response = await axios.get('http://localhost:3000/unit');
      setHeader(response.data);
      console.log(header);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchBody();
  }, []);

  const fetchBody = async () => {
    try {
      const response = await axios.get('http://localhost:3000/account');
      setBody(response.data);
      console.log(body);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <>
      <table border="1" className="w-full border-collapse border border-gray-500">
        <thead>

          <tr className="bg-gray-200">
            <th colSpan="1" className="ville">N° Comptes</th>
            <th colSpan="1" className="ville">Libelles</th>
            {header && header.map((head, index) => (
              <th key={index} className={`${head.parentUnitId == null ? 'border border-gray-500 px-4 py-2' : 'ville'}`}>{head.name}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {body && body.map((region, index) => (
            <tr key={index} className="bg-gray-200">
              <td className="border border-gray-500 px-4 py-2">{body.code}</td>
              <td className="border border-gray-500 px-4 py-2">60110000000</td>
              <td className="border border-gray-500 px-4 py-2">INT OPERS INTERBANCAIRE</td>
              {region.villes && region.villes.map((city, cityIndex) => (
                <td key={cityIndex} className="border border-gray-500 px-4 py-2" border border-gray-500 px-4 py-2>{city.montant}</td>
              ))}
            </tr>
          ))}

        </tbody>
      </table>
    </>
  )
}

export default App
