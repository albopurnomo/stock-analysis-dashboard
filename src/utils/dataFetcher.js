import Papa from 'papaparse';

const STOCKS_API = '/api/stocks';
const EMAILS_API = '/api/auth/emails';
const PHONES_API = '/api/auth/phones';

export const checkPhoneAuthorization = async (phone) => {
    if (!phone) return { isAuthorized: false, name: '' };
    try {
        const response = await fetch(PHONES_API);
        const csvString = await response.text();
        
        return new Promise((resolve) => {
            Papa.parse(csvString, {
                header: false,
                skipEmptyLines: true,
                complete: (results) => {
                    const inputPhone = phone.toString().replace(/\\D/g, '');
                    let isAuthorized = false;
                    let name = '';

                    for (const row of results.data) {
                        const rowPhone = row[0]?.toString().replace(/\\D/g, '');
                        if (rowPhone === inputPhone) {
                            isAuthorized = true;
                            name = row[1]?.toString().trim() || '';
                            break;
                        }
                    }
                    resolve({ isAuthorized, name });
                },
                error: () => resolve({ isAuthorized: false, name: '' })
            });
        });
    } catch (err) {
        console.error('Phone auth check failed:', err);
        return { isAuthorized: false, name: '' };
    }
};

export const checkAuthorization = async (email) => {
    if (!email) return false;
    try {
        const response = await fetch(EMAILS_API);
        const csvString = await response.text();
        
        return new Promise((resolve) => {
            Papa.parse(csvString, {
                header: false,
                skipEmptyLines: true,
                complete: (results) => {
                    // Normalize all emails to lower case for insensitive comparison
                    const authorizedEmails = results.data.flat().map(e => e.toString().toLowerCase().trim());
                    const isAuthorized = authorizedEmails.includes(email.toLowerCase().trim());
                    resolve(isAuthorized);
                },
                error: () => resolve(false)
            });
        });
    } catch (err) {
        console.error('Auth check failed:', err);
        return false;
    }
};

export const fetchStockData = async () => {
    try {
        const response = await fetch(STOCKS_API);
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
