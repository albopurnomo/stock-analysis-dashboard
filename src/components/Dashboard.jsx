import React, { useState, useEffect } from 'react';
import { fetchStockData } from '../utils/dataFetcher';
import ScatterChart from './ScatterChart';
import StockTable from './StockTable';

const Dashboard = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
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

        getData();
    }, []);

    if (loading) return <div className="loading">Loading dashboard data...</div>;
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
