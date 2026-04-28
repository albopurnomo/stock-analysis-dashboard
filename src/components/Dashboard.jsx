import React, { useState, useEffect } from 'react';
import { fetchStockData, checkAuthorization, checkPhoneAuthorization } from '../utils/dataFetcher';
import ScatterChart from './ScatterChart';
import StockTable from './StockTable';

const Dashboard = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isAuthorized, setIsAuthorized] = useState(null); // null = validating, true = authorized, false = denied
    const [personName, setPersonName] = useState('');
    const [error, setError] = useState(null);

    useEffect(() => {
        const validate = async () => {
            const params = new URLSearchParams(window.location.search);
            const email = params.get('email');
            const phone = params.get('phone');
            
            if (!email && !phone) {
                setIsAuthorized(false);
                setLoading(false);
                return;
            }

            let authorized = false;
            let name = '';
            
            if (email) {
                authorized = await checkAuthorization(email);
            }
            
            if (!authorized && phone) {
                const phoneAuth = await checkPhoneAuthorization(phone);
                authorized = phoneAuth.isAuthorized;
                name = phoneAuth.name;
            }

            setIsAuthorized(authorized);
            setPersonName(name);
            
            if (authorized) {
                getData();
            } else {
                setLoading(false);
            }
        };

        const getData = async () => {
            try {
                setLoading(true);
                const stockData = await fetchStockData();
                setData(stockData);
                setLoading(false);
            } catch (err) {
                console.error('Failed to load data:', err);
                setError('Failed to fetch data from Google Sheets. Ensure the sheet is public.');
                setLoading(false);
            }
        };

        validate();
    }, []);

    const getGreeting = () => {
        const date = new Date(new Date().toLocaleString("en-US", {timeZone: "Asia/Jakarta"}));
        const hour = date.getHours();
        
        let timeOfDay = 'morning';
        if (hour >= 12 && hour < 18) {
            timeOfDay = 'afternoon';
        } else if (hour >= 18) {
            timeOfDay = 'evening';
        }

        if (personName) {
            return `Good ${timeOfDay}, ${personName}`;
        }
        return '';
    };

    if (loading) return (
        <div className="loading-container">
            <div className="loader"></div>
            <p>Validating Access...</p>
        </div>
    );

    if (isAuthorized === false) {
        return (
            <div className="unauthorized-container">
                <div className="unauthorized-card">
                    <div className="lock-icon">🔒</div>
                    <h1>Access Denied</h1>
                    <p>This dashboard is private. Please ensure you are using an authorized phone number parameter in the URL.</p>
                    <div className="url-hint">
                        Example: <code>?phone=08123456789</code>
                    </div>
                </div>
            </div>
        );
    }

    if (error) return <div className="error">{error}</div>;

    return (
        <div className="dashboard">
            <header className="dashboard-header">
                <h1>Fundamental Analysis Dashboard</h1>
                <p>Analyzing company quality vs market potential</p>
                {personName && <p className="greeting">{getGreeting()}</p>}
            </header>

            <section className="chart-section">
                <ScatterChart data={data} />
            </section>

            <section className="table-section">
                <StockTable data={data} />
            </section>
        </div>
    );
};

export default Dashboard;
