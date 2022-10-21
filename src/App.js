import './App.css';
import React from 'react';

const url = (city) =>
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;

const apikey = "3265874a2c77ae4a04bb96236a642d2f";

function App() {

async function getWeatherByLocation(city) {

  const resp = await fetch(url(city));
  const data = await resp.json()

  const search = document.getElementById("search")

  const data1 = data.main.temp;
  const formattedData = format(data1);

  const result = capitalizeFirstLetter(search.value);

  const list = document.createElement("ul");
  list.id = "list";
  const listItem = document.createElement("li");
  listItem.innerHTML = `
  <p>${result}: ${formattedData}°C</p>
  `;
  list.appendChild(listItem);
  document.body.appendChild(list);
}

function capitalizeFirstLetter(str) {

  // converting first letter to uppercase
  const capitalized = str.replace(/^./, str[0].toUpperCase());

  return capitalized;
}

function format(k) {
  return Math.floor(k - 273.15);
}


  return (
    <div className="app">
       <form id="form" onSubmit={(evt) => {
        evt.preventDefault();
        let cityValue = evt.target.elements.search.value;
        if(cityValue) {
          getWeatherByLocation(cityValue);
        }
        cityValue = '';
       }}>
        <input type="text" id="search" placeholder="Search by location"/>
        <button type='submit'>Search</button>
    </form>
    </div>
  );
}

export default App;
