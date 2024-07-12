import React from 'react';

const ListCard = ({ title, items }) => {
  return (
    <div className="list-card">
      <h3>{title}</h3>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListCard;
