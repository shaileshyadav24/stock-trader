import { useQuery } from '@tanstack/react-query';
import { fetchStockData, fetchHistoricalData } from '@/utils/api';
import { StockData, HistoricalData } from '@/types/stock';

export const useStockData = (symbol: string) => {
  return useQuery<StockData, Error>({
    queryKey: ['stock', symbol],
    queryFn: () => fetchStockData(symbol),
    enabled: !!symbol,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
};

export const useHistoricalData = (symbol: string) => {
  return useQuery<HistoricalData[], Error>({
    queryKey: ['historical', symbol],
    queryFn: () => fetchHistoricalData(symbol),
    enabled: !!symbol,
  });
};