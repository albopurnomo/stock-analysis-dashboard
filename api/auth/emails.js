import axios from 'axios';

export default async function handler(req, res) {
    const EMAILS_URL = process.env.EMAILS_SHEET_URL || 'https://docs.google.com/spreadsheets/d/187j6lXH42kH2kq-T2k5c4SdKDxMTYB6u/export?format=csv&gid=26632243';
    
    try {
        const response = await axios.get(EMAILS_URL);
        res.status(200).send(response.data);
    } catch (error) {
        console.error('Error fetching emails:', error.message);
        res.status(500).json({ error: 'Error fetching authorized emails' });
    }
}
