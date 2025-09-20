import React, { useState } from 'react';

const Searchbar = ({ onSubmit }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(searchTerm);
    setSearchTerm('');
  };

  return (
    <header className="searchbar">
      <form className="searchform" onSubmit={handleSubmit}>
        <input
          type="text"
          className="searchform-input"
          value={searchTerm}
          onChange={handleChange}
          placeholder="Search images..."
        />
        <button type="submit" className="searchform-button">
          Search
        </button>
      </form>
    </header>
  );
};

export default Searchbar;