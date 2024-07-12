// src/pages/CandidateHome.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchComponent from '../components/SearchComponent';
import '../styles/styles.css'; // Import your CSS

const mockReferrals = [
  { id: 'r1', company: 'Company A', position: 'Developer' },
  { id: 'r2', company: 'Company B', position: 'Designer' },
  // Add more mock referrals
];

const mockServices = [
  { id: 's1', service: 'Resume Review' },
  { id: 's2', service: 'Mock Interview' },
  // Add more mock services
];

const CandidateHome = () => {
  const navigate = useNavigate();
  const [referrals] = useState(mockReferrals);
  const [services] = useState(mockServices);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Check if user is logged in; if not, redirect to login
    const isLoggedIn = true; // Replace with actual login check
    if (!isLoggedIn) {
      navigate('/login');
    }
  }, [navigate]);

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const filteredReferrals = referrals.filter(
    (referral) =>
      referral.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      referral.position.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredServices = services.filter((service) =>
    service.service.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleLogout = () => {
    // Implement your logout logic here
    navigate('/login');
  };

  return (
    <div className="candidate-home container">
      <header className="header row">
        <h1 className="col">Candidate Home</h1>
        <button onClick={handleLogout} className="logout-button col-auto">
          Logout
        </button>
      </header>
      <SearchComponent onSearch={handleSearch} />
      <div className="results-container row">
        <div className="referrals col-6">
          <h2>Referrals</h2>
          {filteredReferrals.length > 0 ? (
            filteredReferrals.map((referral) => (
              <div key={referral.id} className="card">
                <h3>{referral.company}</h3>
                <p>{referral.position}</p>
              </div>
            ))
          ) : (
            <p>No referrals found</p>
          )}
        </div>
        <div className="services col-6">
          <h2>Services</h2>
          {filteredServices.length > 0 ? (
            filteredServices.map((service) => (
              <div key={service.id} className="card">
                <h3>{service.service}</h3>
              </div>
            ))
          ) : (
            <p>No services found</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CandidateHome;
