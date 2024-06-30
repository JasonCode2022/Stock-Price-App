import React from 'react';
import styles from './StockList.module.css';
import StockListIcon from '../../icons/pie-chartt.png';
import { getCurrentYear, sortStockByCompoundedYiled, sortStockByDividendYield } from '../../Helpers';
import Select from '../Select/Select';
import { connect } from "react-redux";
import { AppState, Stock, Exchange } from '../../redux/types';


const mapStateToProps = (state: AppState) => {
    return {
        stocks: state.stocks,
        selectedOption: state.selectedOption,
        exchanges: state.exchanges
    }
};

const mapDispatchToProps = {
        setStocks: (stocks: Stock[]) => ({ type: 'SET_STOCKS', payload: stocks }),
        setSelectedOption: (option: string) => ({ type: 'SET_SELECTED_OPTION', payload: option }),
        setExchanges: (exchanges: Exchange[]) => ({ type: 'SET_EXCHANGES', payload: exchanges }),
};

interface StockListProps {
    stocks: Stock[];
    setStocks: (stocks: Stock[]) => void;
    selectedOption: string;
    setSelectedOption: (option: string) => void;
    exchanges: Exchange[];
    setExchanges: (exchanges: Exchange[]) => void;
}


const StockList: React.FC<StockListProps> = ({stocks, selectedOption, setStocks, setSelectedOption, }) => {
    const renderListItems = () => {
        return stocks.map((stock: Stock) => (
            <li className={styles.listItems} key={stock.ticker}>
                <div className={styles.iconContainer}>
                    <img src={StockListIcon} alt="Stock list icon" className={styles.icon} />
                </div>
                <div className={styles.listItemName}>{stock.name}</div>
                <div className={styles.listItemTicker}>{stock.ticker}</div>
                <div className={styles.listItemAsk}>{stock.ask}</div>
                <div className={styles.listItemBid}>{stock.bid}</div>
                <div className={styles.listItemDps}>{getDividendPerShare(stock)} NOK</div>
                <div className={styles.listItemDpsSpent}>{getDividendPer1000Spent(stock)} NOK</div>
                <div className={styles.listItemPe}>{stock.pe}</div>
                <div className={styles.listItemSector}>{stock.sector}</div>
            </li>
        ));
    };

    const getDividendPerShare = (stock: Stock) => {
        const year = getCurrentYear();
        return stock.dividends[year];
    };

    const getDividendPer1000Spent = (stock: Stock) => {
        const dividendPerShare = getDividendPerShare(stock);
        const amountOfStocks = 1000 / stock.ask;
        const total = amountOfStocks * dividendPerShare;
        return total.toFixed(2);
    };

    const getOptions = () => [
        {
            displayValue: "Highest Dividend Yield 2024",
            value: "dividendYieldCurrent",
        },
        {
            displayValue: "Highest Dividend Yield Overall",
            value: "dividendYieldOverall",
        }
    ];

    const onSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedValue = e.target.value;
        // const selectedOption = getOptions().find(option => option.value === selectedValue);


        setSelectedOption(selectedValue);
        console.log(selectedValue);

        if (selectedValue === "dividendYieldOverall") {
            setStocksByDividendYieldOverall();
        } else if (selectedValue === "dividendYieldCurrent") {
            setStocksByDividendYieldCurrentYear();
        }
    };

    const setStocksByDividendYieldOverall = () => {
        const sorted = sortStockByCompoundedYiled(stocks);
        setStocks(sorted);
    };

    const setStocksByDividendYieldCurrentYear = () => {
        const sorted = sortStockByDividendYield(stocks);
        setStocks(sorted);
    };

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1 className={styles.heading}>Oslo Exchange</h1>
                <Select
                    className={styles.select}
                    options={getOptions()}
                    value={selectedOption}
                    onChange={onSelectChange}
                />
            </div>
            <div className={styles.listContainer}>
                <div className={styles.listHeaders}>
                    <div className={styles.nameHeader}>Name</div>
                    <div className={styles.tickerHeader}>Ticker</div>
                    <div className={styles.askHeader}>Ask</div>
                    <div className={styles.bidHeader}> Bid</div>
                    <div className={styles.dpsHeader}>Dividend P/S</div>
                    <div className={styles.dpspentHeader}>Dividend Per 1000 Spent</div>
                    <div className={styles.peHeader}>P/E</div>
                    <div className={styles.sectorHeader}>Sector</div>
                </div>
                <ul className={styles.stockList}>{renderListItems()}</ul>
            </div>
        </div>
    );
};


export default connect(mapStateToProps, mapDispatchToProps)(StockList);
