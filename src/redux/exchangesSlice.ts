import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Exchange {
  name: string;
  index: number;
  change: number;
}

interface ExchangesState {
  exchanges: Exchange[];
}

const initialState: ExchangesState = {
  exchanges: []
};

const exchangesSlice = createSlice({
  name: 'exchanges',
  initialState,
  reducers: {
    setExchanges(state, action: PayloadAction<Exchange[]>) {
      state.exchanges = action.payload;
    }
  }
});

export const { setExchanges } = exchangesSlice.actions;
export default exchangesSlice.reducer;
