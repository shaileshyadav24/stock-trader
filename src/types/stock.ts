export interface StockData {
  symbol: string;
  name: string;
  price: number;
  change: number;
  changePercent: string;
  currency: string;
}

export interface HistoricalData {
  date: string;
  price: number;
}
