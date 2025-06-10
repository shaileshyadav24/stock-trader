import React from 'react';
import { HistoricalData } from '@/types/stock';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

const StockChart: React.FC<{ data: HistoricalData[] }> = ({ data }) => {
  console.log('Chart Data:', data);
  return (
    <div className="h-80">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis 
            dataKey="date" 
            tick={{ fontSize: 12 }}
            tickFormatter={(value) => value.split('-').slice(1).join('/')}
          />
          <YAxis 
            domain={['auto', 'auto']} 
            tickFormatter={(value) => `$${value}`}
          />
          <Tooltip 
            formatter={(value) => [`$${value}`, 'Price']}
            labelFormatter={(value) => `Date: ${value}`}
          />
          <Line
            type="monotone"
            dataKey="price"
            stroke="#3b82f6"
            strokeWidth={2}
            dot={{ r: 2 }}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default StockChart;