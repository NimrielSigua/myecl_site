import React from 'react';

const Card = ({ title, description }) => {
  return (
    <div
      data-theme="abyss"
      className="rounded-lg bg-base-100 shadow transition-all duration-200 cursor-pointer
                 hover:scale-105 hover:shadow-2xl hover:bg-base-200 hover:border-primary border border-transparent"
      style={{ willChange: 'transform' }}
    >
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  );
};

export default Card;
