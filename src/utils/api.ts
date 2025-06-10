import { StockData, HistoricalData } from '@/types/stock';
import axios from 'axios';

const API_KEY = process.env.NEXT_PUBLIC_ALPHA_VANTAGE_API_KEY;
const BASE_URL = 'https://www.alphavantage.co/query';

export const fetchStockData = async (symbol: string): Promise<StockData> => {
  const response = await axios.get(BASE_URL, {
    params: {
      function: 'GLOBAL_QUOTE',
      symbol,
      apikey: API_KEY,
    },
  });
  
  const data = response.data['Global Quote'];
  return {
    symbol: data['01. symbol'],
    name: data['01. symbol'], // Name not available in this endpoint
    price: parseFloat(data['05. price']),
    change: parseFloat(data['09. change']),
    changePercent: data['10. change percent'],
    currency: data['08. currency'] || 'USD',
  };
};

export const fetchHistoricalData = async (symbol: string): Promise<HistoricalData[]> => {
  const response = await axios.get(BASE_URL, {
    params: {
      function: 'TIME_SERIES_DAILY',
      symbol,
      outputsize: 'compact',
      apikey: API_KEY,
    },
  });

  const timeSeries = response.data['Time Series (Daily)'];
  return (Object.entries(timeSeries) as [string, { [key: string]: string }][]).map(([date, values]) => ({
    date,
    price: parseFloat(values['4. close']),
  })).slice(0, 30); // Last 30 days
};