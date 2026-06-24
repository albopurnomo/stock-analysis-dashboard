import React from 'react';
import StockTable from './StockTable';

const CategoryDetailPage = ({ categoryName, categoryTickers, allStocks, onBack }) => {
    const upperTickers = (categoryTickers || []).map(t => t.toUpperCase());
    
    // Filter stocks that are in this category
    const filteredStocks = allStocks.filter(stock => 
        stock.ticker && upperTickers.includes(stock.ticker.toUpperCase())
    );

    return (
        <div className="category-detail-page">
            <div className="detail-header">
                <button className="back-btn" onClick={onBack}>
                    ← Back to Categories
                </button>
                <div className="detail-title-section">
                    <h2>{categoryName}</h2>
                    <p className="subtitle">Displaying stocks in the "{categoryName}" category</p>
                </div>
            </div>
            
            <div className="table-section">
                {filteredStocks.length > 0 ? (
                    <StockTable data={filteredStocks} />
                ) : (
                    <div className="no-data-alert">
                        <p>No stock details found for the tickers in this category.</p>
                        <p className="subtext">Verify that tickers in this category exist in the main Stock List.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CategoryDetailPage;
