import axios from 'axios';

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        res.setHeader('Allow', ['POST']);
        return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
    }

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
}
