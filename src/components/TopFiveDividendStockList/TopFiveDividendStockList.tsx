import React from 'react';
import styles from './TopFiveDividendStockList.module.css';



const TopFiveDividendStockList = (props: any) => {
    const renderListItems = () => {
        return props.stocks.map((stock: any) => {
          return (

            <li className={styles.listItem} key={stock.ticker}>
              <div>{stock.ticker}</div>
              <div>{stock.amount}NOK</div>
            </li>

          );
        });
      };
    
      return (
        <div className={styles.container}>
    
          <h1 className={styles.header}>
            Top Five Dividend Yield Stocks
          </h1>
    
          <ul className={styles.dividendList}>
            {renderListItems()}
          </ul>
    
        </div>
      );
};





export default TopFiveDividendStockList;