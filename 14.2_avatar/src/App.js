import Card from './components/Card'
import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css'
import React from 'react'
function App() {

  const [avatars, setAvatars] = useState([]);
  const [filteredAvatars, setFilteredAvatars] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [inputColor, setInputColor] = useState('red');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await axios.get("https://randomuser.me/api/?results=10");
      setAvatars(res.data.results);
      setFilteredAvatars(res.data.results);
    } catch (err) {
      console.error(err);
    }
  };

  const handleSearch = (event) => {
    const input = event.target.value.toLowerCase();
    setInputValue(input);
    const result = avatars.filter(avatar =>
      avatar.name.first.toLowerCase().includes(input) || avatar.name.last.toLowerCase().includes(input)
    );

    if (result.length > 0) {
      setInputColor('rgb(0, 0, 151)');
    } else {
      setInputColor('rgb(196, 0, 20)')
    }

    setFilteredAvatars(result);
  };

  return (
    <div className="input-container">
      <input
        autoFocus="true"
        type="text"
        value={inputValue}
        onChange={handleSearch}
        style={{ backgroundColor: inputColor }} // set background color dynamically
      />
      <div className="container">
        {filteredAvatars.map((avatar, idx) => (
          <div className={`ohMyCard ${avatar.gender === 'male' ? 'male' : 'female'}`}>          <Card
            key={idx}
            image={avatar.picture.medium}
            name={avatar.name.first + " " + avatar.name.last}
          />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;