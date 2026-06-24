import express from 'express';
import axios from 'axios';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 8888;

// Middleware
app.use(cors());
app.use(express.json());

// Google Sheet URLs (Configured via Environment Variables)
const STOCKS_URL = process.env.STOCKS_SHEET_URL || 'https://docs.google.com/spreadsheets/d/187j6lXH42kH2kq-T2k5c4SdKDxMTYB6u/export?format=csv&gid=508838081';
const EMAILS_URL = process.env.EMAILS_SHEET_URL || 'https://docs.google.com/spreadsheets/d/187j6lXH42kH2kq-T2k5c4SdKDxMTYB6u/export?format=csv&gid=26632243';
const PHONES_URL = process.env.PHONES_SHEET_URL || 'https://docs.google.com/spreadsheets/d/187j6lXH42kH2kq-T2k5c4SdKDxMTYB6u/export?format=csv&gid=1896058999';
const CATEGORIES_URL = process.env.CATEGORIES_SHEET_URL || 'https://docs.google.com/spreadsheets/d/187j6lXH42kH2kq-T2k5c4SdKDxMTYB6u/export?format=csv&gid=1641675094';

// API Endpoints
app.get('/api/stocks', async (req, res) => {
    try {
        const response = await axios.get(STOCKS_URL);
        res.send(response.data);
    } catch (error) {
        console.error('Error fetching stocks:', error.message);
        res.status(500).send('Error fetching stock data');
    }
});

app.get('/api/categories', async (req, res) => {
    try {
        const response = await axios.get(CATEGORIES_URL);
        res.send(response.data);
    } catch (error) {
        console.error('Error fetching categories:', error.message);
        res.status(500).send('Error fetching category data');
    }
});

app.get('/api/auth/emails', async (req, res) => {
    try {
        const response = await axios.get(EMAILS_URL);
        res.send(response.data);
    } catch (error) {
        console.error('Error fetching emails:', error.message);
        res.status(500).send('Error fetching authorized emails');
    }
});

app.get('/api/auth/phones', async (req, res) => {
    try {
        const response = await axios.get(PHONES_URL);
        res.send(response.data);
    } catch (error) {
        console.error('Error fetching phones:', error.message);
        res.status(500).send('Error fetching authorized phones');
    }
});

app.post('/api/log-access', async (req, res) => {
    const { phone, name } = req.body;
    const SCRIPT_URL = process.env.ACCESS_LOGS_SCRIPT_URL;

    if (!SCRIPT_URL) {
        console.warn('ACCESS_LOGS_SCRIPT_URL environment variable is not defined.');
        return res.status(200).json({ success: false, message: 'Logging skipped: SCRIPT_URL not configured' });
    }

    try {
        const now = new Date();
        
        // Format Date: e.g. "18 May 2026"
        const dateOptions = {
            timeZone: 'Asia/Jakarta',
            day: 'numeric',
            month: 'short',
            year: 'numeric'
        };
        const dateFormatter = new Intl.DateTimeFormat('en-GB', dateOptions);
        const dateStr = dateFormatter.format(now);

        // Format Time: e.g. "19:14:08"
        const timeOptions = {
            timeZone: 'Asia/Jakarta',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false
        };
        const timeFormatter = new Intl.DateTimeFormat('en-GB', timeOptions);
        const timeStr = timeFormatter.format(now);

        await axios.post(SCRIPT_URL, {
            phone: phone || 'UNKNOWN',
            name: name || 'UNKNOWN',
            date: dateStr,
            time: timeStr
        });

        res.status(200).json({ success: true });
    } catch (error) {
        console.error('Error logging access attempt:', error.message);
        res.status(500).json({ error: 'Error logging access attempt' });
    }
});

// Serve static files from the React build
app.use(express.static(path.join(__dirname, 'dist')));

// For any other request, send back the index.html
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is running on port ${PORT}`);
    console.log(`Proxying data from Google Sheets...`);
});
