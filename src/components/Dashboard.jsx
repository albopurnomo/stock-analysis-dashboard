import React, { useState, useEffect } from 'react';
import { fetchStockData, fetchCategoryData, checkAuthorization, checkPhoneAuthorization, logAccessAttempt } from '../utils/dataFetcher';
import ScatterChart from './ScatterChart';
import StockTable from './StockTable';
import CategoryPage from './CategoryPage';
import CategoryDetailPage from './CategoryDetailPage';

const Dashboard = () => {
    const [data, setData] = useState([]);
    const [categories, setCategories] = useState({});
    const [loading, setLoading] = useState(true);
    const [isAuthorized, setIsAuthorized] = useState(null); // null = validating, true = authorized, false = denied
    const [personName, setPersonName] = useState('');
    const [clientId, setClientId] = useState('');
    const [error, setError] = useState(null);
    const [page, setPage] = useState('home'); // 'home', 'categories', 'category-detail'
    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedQuadrant, setSelectedQuadrant] = useState(null);

    useEffect(() => {
        const validate = async () => {
            const params = new URLSearchParams(window.location.search);
            const email = params.get('email');
            const phone = params.get('phone');
            
            let authorized = false;
            let name = '';
            let logPhone = 'UNKNOWN';
            let logName = 'UNKNOWN';
            
            if (phone) {
                logPhone = phone;
                const phoneAuth = await checkPhoneAuthorization(phone);
                authorized = phoneAuth.isAuthorized;
                if (authorized) {
                    name = phoneAuth.name;
                    logName = phoneAuth.name;
                } else {
                    logName = 'UNKNOWN';
                }
            } else {
                logPhone = 'UNKNOWN';
                logName = 'UNKNOWN';
                if (email) {
                    authorized = await checkAuthorization(email);
                }
            }

            // Log access attempt asynchronously
            logAccessAttempt(logPhone, logName);

            setIsAuthorized(authorized);
            setPersonName(name);
            if (phone && authorized) {
                setClientId(phone);
            }
            
            if (authorized) {
                getData();
            } else {
                setLoading(false);
            }
        };

        const getData = async () => {
            try {
                setLoading(true);
                const [stockData, categoriesData] = await Promise.all([
                    fetchStockData(),
                    fetchCategoryData()
                ]);
                setData(stockData);
                setCategories(categoriesData);
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
                <div className="header-brand">
                    <h1>GaleriSaham Universe</h1>
                    <span className="header-tagline">Smart Money Investment Strategies</span>
                </div>

                <nav className="dashboard-nav">
                    <button 
                        className={`nav-tab ${page === 'home' ? 'active' : ''}`}
                        onClick={() => setPage('home')}
                    >
                        Home
                    </button>
                    <button 
                        className={`nav-tab ${(page === 'categories' || page === 'category-detail') ? 'active' : ''}`}
                        onClick={() => setPage('categories')}
                    >
                        Category
                    </button>
                </nav>

                <div className="header-user">
                    {personName && (
                        <p className="greeting">
                            <span className="greeting-text">{getGreeting()}</span>
                            {clientId && <span className="greeting-phone"> (HP No. {clientId})</span>}
                        </p>
                    )}
                </div>
            </header>

            {page === 'home' && (
                <>
                    <section className="chart-section animate-fade-in">
                        <ScatterChart 
                            data={data} 
                            selectedQuadrant={selectedQuadrant}
                            setSelectedQuadrant={setSelectedQuadrant}
                        />
                    </section>

                    <section className="table-section animate-fade-in">
                        <StockTable 
                            data={data} 
                            selectedQuadrant={selectedQuadrant}
                        />
                    </section>
                </>
            )}

            {page === 'categories' && (
                <section className="categories-section animate-fade-in">
                    <CategoryPage 
                        categories={categories} 
                        onSelectCategory={(catName) => {
                            setSelectedCategory(catName);
                            setPage('category-detail');
                        }}
                    />
                </section>
            )}

            {page === 'category-detail' && (
                <section className="category-detail-section animate-fade-in">
                    <CategoryDetailPage 
                        categoryName={selectedCategory}
                        categoryTickers={categories[selectedCategory]}
                        allStocks={data}
                        onBack={() => setPage('categories')}
                    />
                </section>
            )}
        </div>
    );
};

export default Dashboard;
