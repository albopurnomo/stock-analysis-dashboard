import React, { useState, useEffect } from 'react';
import { fetchStockData, checkAuthorization } from '../utils/dataFetcher';
import ScatterChart from './ScatterChart';
import StockTable from './StockTable';

const Dashboard = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isAuthorized, setIsAuthorized] = useState(null); // null = validating, true = authorized, false = denied
    const [error, setError] = useState(null);

    useEffect(() => {
        const validate = async () => {
            const params = new URLSearchParams(window.location.search);
            const email = params.get('email');
            
            if (!email) {
                setIsAuthorized(false);
                setLoading(false);
                return;
            }

            const authorized = await checkAuthorization(email);
            setIsAuthorized(authorized);
            
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
                    <p>This dashboard is private. Please ensure you are using an authorized email parameter in the URL.</p>
                    <div className="url-hint">
                        Example: <code>?email=your.email@example.com</code>
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
