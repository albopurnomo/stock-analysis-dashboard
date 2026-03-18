import Papa from 'papaparse';

const GOOGLE_SHEET_URL = 'https://docs.google.com/spreadsheets/d/187j6lXH42kH2kq-T2k5c4SdKDxMTYB6u/export?format=csv&gid=508838081';

export const fetchStockData = async () => {
    try {
        const response = await fetch(GOOGLE_SHEET_URL);
        const csvString = await response.text();

        return new Promise((resolve, reject) => {
            Papa.parse(csvString, {
                header: false, // Don't assume first row is header because of empty rows
                skipEmptyLines: true,
                complete: (results) => {
                    // Find the header row (the one containing 'Ticker')
                    const headerIndex = results.data.findIndex(row => row.includes('Ticker'));
                    if (headerIndex === -1) {
                        resolve([]);
                        return;
                    }

                    const headers = results.data[headerIndex];
                    const stockDataRows = results.data.slice(headerIndex + 1);

                    const getCol = (row, name) => {
                        const index = headers.indexOf(name);
                        return index !== -1 ? row[index] : null;
                    };

                    const data = stockDataRows.map((row) => ({
                        ticker: getCol(row, 'Ticker'),
                        businessModel: getCol(row, 'Model bisnis'),
                        upside: parseFloat((getCol(row, 'Upside') || '0').replace('%', '')),
                        fundamentalScore: parseFloat(getCol(row, 'Fundamental Score') || '0'),
                        price: getCol(row, 'Harga'),
                        fairValue: getCol(row, 'Fair Value'),
                        dividendYield: parseFloat((getCol(row, 'Avg 5y DY') || '0').replace('%', '').replace(',', '.')),
                    })).filter(item => item.ticker && !isNaN(item.upside));

                    resolve(data);
                },
                error: (error) => {
                    reject(error);
                }
            });
        });
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};
