import React from 'react';
import StockTable from './StockTable';

const CategoryDetailPage = ({ categoryName, categoryTickers, categoryDescription, allStocks, onBack }) => {
    const upperTickers = (categoryTickers || []).map(t => t.toUpperCase());
    
    // Filter stocks that are in this category, preserving the sequence from the google sheet
    const filteredStocks = upperTickers
        .map(ticker => allStocks.find(stock => stock.ticker && stock.ticker.toUpperCase() === ticker))
        .filter(Boolean);

    return (
        <div className="category-detail-page">
            <div className="detail-header">
                <button className="back-btn" onClick={onBack}>
                    ← Back to Categories
                </button>
            </div>
            
            <div className="table-section">
                {filteredStocks.length > 0 ? (
                    <StockTable 
                        data={filteredStocks} 
                        showRowNumbers={true} 
                        title={categoryName}
                        description={categoryDescription}
                    />
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
