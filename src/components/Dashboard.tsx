import StockCard from './StockCard';
import StockChart from './StockChart';
import SearchBar from './SearchBar';
import { useStockData, useHistoricalData } from '../hooks/useStocks';
import React, { useState } from 'react';

const Dashboard = () => {
  const [symbol, setSymbol] = useState('AAPL');
  const { data: stock, isLoading, isError } = useStockData(symbol);
  const { data: historicalData } = useHistoricalData(symbol);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Stock Tracker Dashboard</h1>
      
      <SearchBar onSearch={setSymbol} />
      
      {isLoading && <div className="text-center py-10">Loading...</div>}
      {isError && <div className="text-center py-10 text-red-500">Error fetching data</div>}
      
      {stock && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <StockCard stock={stock} />
          </div>
          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-xl font-bold mb-4">Price History</h2>
            {historicalData && <StockChart data={historicalData} />}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;