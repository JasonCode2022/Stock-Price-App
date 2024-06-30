import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Stock {
  name: string;
  ticker: string;
  bid: number;
  ask: number;
  pe: number;
  sector: string;
  dividends: {
    2024: number;
    2023: number;
    2022: number;
    2021: number;
    2020: number;
  };
  homepage: string;
  investorpage: string;
}

interface StocksState {
  stocks: Stock[];
  selectedOption: string | null;
}

const initialState: StocksState = {
  stocks: [],
  selectedOption: null,
};

const stocksSlice = createSlice({
  name: 'stocks',
  initialState,
  reducers: {
    setStocks(state, action: PayloadAction<Stock[]>) {
      state.stocks = action.payload;
    },
    setSelectedOption(state, action: PayloadAction<string>) {
      state.selectedOption = action.payload;
    }
  }
});

export const { setStocks, setSelectedOption } = stocksSlice.actions;
export default stocksSlice.reducer;
