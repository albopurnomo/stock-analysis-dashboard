import React from 'react';

const CategoryPage = ({ categories, onSelectCategory }) => {
    const categoryNames = Object.keys(categories);

    return (
        <div className="category-page">
            <div className="category-header">
                <h2>Browse by Category</h2>
                <p>Select a category to view fundamental analysis of its stocks</p>
            </div>
            
            <div className="category-list">
                {categoryNames.map((name) => {
                    const count = categories[name]?.length || 0;
                    return (
                        <div 
                            key={name} 
                            className="category-card animate-card"
                            onClick={() => onSelectCategory(name)}
                        >
                            <div className="category-card-glow"></div>
                            <div className="category-card-content-horizontal">
                                <div className="category-info-left">
                                    <span className="category-icon">📁</span>
                                    <div className="category-title-desc">
                                        <h3>{name}</h3>
                                        <span className="ticker-count">{count} {count === 1 ? 'Ticker' : 'Tickers'}</span>
                                    </div>
                                </div>
                                <span className="view-link">View Stocks →</span>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default CategoryPage;
