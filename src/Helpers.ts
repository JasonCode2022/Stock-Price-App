export const sortStockByDividendYield = (stocks: any) => {
    const stocksCopy = [...stocks];
    const year = getCurrentYear();


    const sorted = stocksCopy.sort((stockA, stockB) => {
        return stockB.dividends[year] - stockA.dividends[year];
    });
    // console.log(sorted);
    return sorted;
};

export const sortStockByCompoundedYiled = (stocks: any) => {
    const stocksCopy = [...stocks];

    const sortedByCompoundedYield = stocksCopy.sort((stockA, stockB) => {
        const stockACompoundedDividends = calculateTotalDividens(stockA);
        const stockBCompoundedDividends = calculateTotalDividens(stockB);

        if (stockBCompoundedDividends > stockACompoundedDividends) {
            return 1;
        } else if (stockBCompoundedDividends < stockACompoundedDividends) {
            return -1;
        }
        return 0;
    });
    return sortedByCompoundedYield;
};

export const getCurrentYear = () => {

    const date = new Date();
    const year = date.getFullYear();

    return year;
};


export const calculateTotalDividens = (stock: { dividends: { [x: string]: number; }; }) => {
    let total = 0;
    Object.keys(stock.dividends).forEach((key) => {
        total += stock.dividends[key];
    })
    // console.log(stock.name, total)
    return total;
};


