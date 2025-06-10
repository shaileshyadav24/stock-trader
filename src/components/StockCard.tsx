import React from 'react';
import { StockData } from '@/types/stock';

const StockCard: React.FC<{ stock: StockData }> = ({ stock }) => {
  const isPositive = stock.change >= 0;
  
  return (
    <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-blue-500">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-lg font-bold">{stock.symbol}</h3>
          <p className="text-gray-500 text-sm">{stock.name}</p>
        </div>
        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
          isPositive ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
        }`}>
          {stock.changePercent}
        </span>
      </div>
      
      <div className="mt-4">
        <p className="text-2xl font-bold">
          {stock.price.toFixed(2)} {stock.currency}
        </p>
        <p className={`flex items-center mt-1 ${
          isPositive ? 'text-green-600' : 'text-red-600'
        }`}>
          {isPositive ? '↑' : '↓'} {Math.abs(stock.change).toFixed(2)}
        </p>
      </div>
    </div>
  );
};

export default StockCard;