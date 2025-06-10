import React, { useState } from 'react';

const SearchBar: React.FC<{ onSearch: (symbol: string) => void }> = ({ onSearch }) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      onSearch(input.trim().toUpperCase());
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-8">
      <div className="flex">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Search stock symbol (e.g. AAPL)"
          className="flex-grow px-4 py-2 rounded-l-lg border focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded-r-lg hover:bg-blue-700 transition"
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchBar;