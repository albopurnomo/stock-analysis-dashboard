import axios from 'axios';

export default async function handler(req, res) {
    const STOCKS_URL = process.env.STOCKS_SHEET_URL || 'https://docs.google.com/spreadsheets/d/187j6lXH42kH2kq-T2k5c4SdKDxMTYB6u/export?format=csv&gid=508838081';
    
    try {
        const response = await axios.get(STOCKS_URL);
        res.status(200).send(response.data);
    } catch (error) {
        console.error('Error fetching stocks:', error.message);
        res.status(500).json({ error: 'Error fetching stock data' });
    }
}
