// src/components/SearchComponent.js
import React, { useState, useEffect } from 'react';

const SearchComponent = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [debouncedTerm, setDebouncedTerm] = useState(searchTerm);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedTerm(searchTerm);
    }, 300);

    return () => {
      clearTimeout(timerId);
    };
  }, [searchTerm]);

  useEffect(() => {
    onSearch(debouncedTerm);
  }, [debouncedTerm, onSearch]);

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="search-container mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="Search by company name or industry"
        value={searchTerm}
        onChange={handleInputChange}
      />
      <button className="btn btn-primary mt-2" onClick={() => onSearch(searchTerm)}>
        Search
      </button>
    </div>
  );
};

export default SearchComponent;