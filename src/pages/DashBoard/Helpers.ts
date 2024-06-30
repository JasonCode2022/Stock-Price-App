import { sortStockByDividendYield, getCurrentYear, sortStockByCompoundedYiled, calculateTotalDividens } from '../../Helpers';



export const getTopFiveDividendStocks = (stocks: any) => {

    const sorted = sortStockByDividendYield(stocks);
    const year = getCurrentYear();

    if (sorted.length === 0) return [];

    return sorted.slice(0, 5).map(stock => {
        return {
            ticker: stock.ticker,
            name: stock.name,
            amount: stock.dividends[year],

        };
    });

};


export const getInfoCardData = (descriptor: any, stocks: any) => {
    if (descriptor === "growth") {
        return calculateDividendGrowthStock(stocks);
    } else if (descriptor === "yieldCurrent") {
        return calculateDividendStockCurrentYear(stocks);
    } else if (descriptor === "yieldCompounded") {
        return calculateDividendStockCompounded(stocks);
    }

};


const calculateDividendStockCurrentYear = (stocks: any) => {
    const sorted = sortStockByDividendYield(stocks);
    const year = getCurrentYear();

    if (sorted.length === 0) return [];

    return {
        ticker: sorted[0].ticker,
        amount: sorted[0].dividends[year],
    }
};
export const calculateDividendStockCompounded = (stocks: any) => {
    const sortedByCompoundedYield = sortStockByCompoundedYiled(stocks);

    if (sortedByCompoundedYield.length === 0) return [];

    return {
        ticker: sortedByCompoundedYield[0].ticker,
        amount: calculateTotalDividens(sortedByCompoundedYield[0]),
    };
};



const calculateDividendGrowthStock = (stocks: any) => {
    const sortedByGrowth = stocks.map((stock: any) => {
        return calculateGrowth(stock);
    }).sort((stockA: any, stockB: any) => {
        return stockB.growth - stockA.growth;
    });

    if (sortedByGrowth.length === 0) return [];

    return {
        ticker: sortedByGrowth[0].ticker,
        amount: sortedByGrowth[0].growth,
    }
}

const calculateGrowth = (stock: any) => {
    const year = getCurrentYear();
        const comparisonYear = year - 3;

        const total = stock.dividends[year] - stock.dividends[comparisonYear];
        stock.growth = total;
        return stock;
}


