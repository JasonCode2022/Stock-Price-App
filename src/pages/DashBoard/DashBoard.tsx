import Header from '../../components/Header/Header';
import SubHeader from '../../components/SubHeader/SubHeader';
import ExchangeList from '../../components/ExchangeList/ExchangeList';
import TopFiveDividendStockList from '../../components/TopFiveDividendStockList/TopFiveDividendStockList';
import InfoCard from '../../components/InfoCard/InfoCard';
import StockList from '../../components/StockList/StockList';
import styles from './DashBoard.module.css';
import { getTopFiveDividendStocks, getInfoCardData } from './Helpers';
import { useSelector } from 'react-redux';
import { AppState } from '../../redux/types';



const DashBoardWrapped = () => {

    const exchanges = useSelector((state: AppState) => state.exchanges);
    const stocks = useSelector((state: AppState) => state.stocks);
    // console.log(stocks);
    

    return (
        <>
            <Header />
            <SubHeader>
                <ExchangeList exchanges={exchanges} />
                <TopFiveDividendStockList stocks={getTopFiveDividendStocks(stocks)} />

                <div className={styles.infoCardContainer}>
                    <InfoCard
                        title="Highest Dividend Yield In Current Year"
                        stock={getInfoCardData("yieldCurrent", stocks)}
                    />

                    <InfoCard
                        title="Highest Dividend Yield All Time"
                        stock={getInfoCardData("yieldCompounded", stocks)}
                    />

                    <InfoCard
                        title="Highest Dividend Yield Growth The Past 3 Years"
                        stock={getInfoCardData("growth", stocks)}
                        darkmode
                    />
                </div>
            </SubHeader>

            <div className={styles.dashBoardContent}>
                <div className={styles.dashBoardContentContainer}>
                    {stocks && <StockList />}
                </div>
            </div>
        </>
    )
}


const DashBoard = () => (
    <DashBoardWrapped />
);

export default DashBoard;