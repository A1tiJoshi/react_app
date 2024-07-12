// src/pages/IndexPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchComponent from '../components/SearchComponent';
import { companies } from '../mockData'; // Import mock data
import '../styles/styles.css'; // Update the path to the new location

const IndexPage = () => {
  const navigate = useNavigate();
  const [results, setResults] = useState([]);
  const [selectedCompany, setSelectedCompany] = useState(null);

  const handleSearch = (searchTerm) => {
    if (!searchTerm) {
      setResults([]);
      setSelectedCompany(null);
      return;
    }

    const filteredResults = companies.filter(
      (company) =>
        company.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        company.industry.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setResults(filteredResults);
    setSelectedCompany(null);
  };

  const handleSelectCompany = (company) => {
    setSelectedCompany(company);
  };

  const handleLoginClick = () => {
    navigate('/login');
  };

  return (
    <div className="index-page container">
      <header className="header row">
        <h1 className="col">Welcome </h1>
        <button onClick={handleLoginClick} className="login-icon col-auto">
          Login
        </button>
      </header>
      <SearchComponent onSearch={handleSearch} />
      <div className="results-container row">
        {selectedCompany ? (
          <div className="company-details col-12">
            <h2>{selectedCompany.name}</h2>
            <p><strong>Industry:</strong> {selectedCompany.industry}</p>
            <p><strong>Description:</strong> {selectedCompany.description}</p>
            <p><strong>Location:</strong> {selectedCompany.location}</p>
            <p><strong>Website:</strong> <a href={selectedCompany.website} target="_blank" rel="noopener noreferrer">{selectedCompany.website}</a></p>
            <p><strong>Employees:</strong> {selectedCompany.employees}</p>
          </div>
        ) : (
          results.map((result) => (
            <div key={result.id} className="result-item col-12" onClick={() => handleSelectCompany(result)}>
              <h3>{result.name}</h3>
              <p>{result.industry}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default IndexPage;
