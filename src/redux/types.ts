export interface Stock {
  name: string;
  ticker: string;
  bid: number;
  ask: number;
  pe: number;
  sector: string;
  dividends: {
    [year: number]: number;
  };
  homepage: string;
  investorpage: string;
}

export interface Exchange {
  name: string;
  index: number;
  change: number;
}

export interface AppState {
  stocks: Stock[];
  exchanges: Exchange[];
  selectedOption: string;
}

