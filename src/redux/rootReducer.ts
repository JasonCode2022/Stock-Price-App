import { AppState } from './types';
import { SET_EXCHANGES, SET_STOCKS, SET_SELECTED_OPTION } from './actions';
import { stocks as Stocks, exchanges as Exchanges } from '../Data';

const initState: AppState = {
  stocks: Stocks,
  exchanges: Exchanges,
  selectedOption: '',
};

const rootReducer = (state = initState, action: any): AppState => {
  switch (action.type) {
    case SET_EXCHANGES:
      return {
        ...state,
        exchanges: action.payload,
      };
    case SET_STOCKS:
      return {
        ...state,
        stocks: action.payload,
      };
    case SET_SELECTED_OPTION:
      return {
        ...state,
        selectedOption: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;