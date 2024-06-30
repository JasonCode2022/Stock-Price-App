import { useEffect } from 'react';
import DashBoard from './pages/DashBoard/DashBoard';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { sortStockByDividendYield } from './Helpers';
import { useDispatch, useSelector } from 'react-redux';
import { AppState, Stock } from './redux/types';
import { setStocks } from './redux/actions';




function AppWrapped() {

  const dispatch = useDispatch();
  const stocks = useSelector((state: AppState) => state.stocks);
  //Or do the below but can generate an error!!!!!
  // const { exchanges, stocks, selectedOption } = useSelector((state: AppState) => ({
  //   exchanges: state.exchanges,
  //   stocks: state.stocks,
  //   selectedOption: state.selectedOption,
  // }));
  

  
  useEffect(() => {
    const sortedStocks: Stock[] = sortStockByDividendYield(stocks);
    dispatch(setStocks(sortedStocks));
    //check the stocks passed
    // console.log(sortedStocks);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);


  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <DashBoard
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

const App = () => (
    <AppWrapped />
);

export default App;
