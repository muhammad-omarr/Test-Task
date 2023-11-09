// CardDisplay.js
import React from "react";
import Chatbot from "./Chatbot";

const CardDisplay = ({ cards, loading, loadMore }) => {
  return (
    <div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {cards.map((card) => (
          <div key={card.id} className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="w-full h-48">
              <img
                src={card.imageUrl}
                alt={card.name}
                onError={(e) => {
                  e.target.src = 'placeholder-image-url.jpg'; // Replace with a placeholder image URL
                }}
                className="w-full h-full object-contain"
              />
            </div>
            
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{card.name}</h3>
              <hr></hr>
              <h4>{card.artist}</h4>
              <hr></hr>
              <p className="text-sm text-gray-700 dark:text-gray-400">
                {card.text}
              </p>
            </div>
          </div>
        ))}
      </div>

      {loading && <p className="text-center my-4">Loading...</p>}
      <button
        onClick={loadMore}
        disabled={loading}
        className="block mx-auto bg-blue-500 text-white py-2 px-4 rounded-lg text-center mt-4 hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:outline-none"
      >
        Load More
      </button>
      <Chatbot/>
    </div>
  );
};

export default CardDisplay;
