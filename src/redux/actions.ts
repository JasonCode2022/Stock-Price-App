import { Stock, Exchange } from "./types";


// Define action type constants
export const SET_EXCHANGES = 'SET_EXCHANGES';
export const SET_STOCKS = 'SET_STOCKS';
export const SET_SELECTED_OPTION = 'SET_SELECTED_OPTION';

// Define action creators
export const setExchanges = (exchanges: Exchange[]) => ({
  type: SET_EXCHANGES,
  payload: exchanges,
});

export const setStocks = (stocks: Stock[]) => ({
  type: SET_STOCKS,
  payload: stocks,
});

export const setSelectedOption = (option: string) => ({
  type: SET_SELECTED_OPTION,
  payload: option,
});
