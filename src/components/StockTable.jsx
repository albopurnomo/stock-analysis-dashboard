import React, { useState } from 'react';

const StockTable = ({ data, selectedQuadrant = null, searchTerm: propSearchTerm, setSearchTerm: propSetSearchTerm, selectedTickers = new Set(), setSelectedTickers = null, toggleTickerSelection = null, showRowNumbers = false, title = 'Stock List', description = null }) => {
    const [localSearchTerm, localSetSearchTerm] = useState('');

    const isControlled = propSearchTerm !== undefined && propSetSearchTerm !== undefined;
    const searchTerm = isControlled ? propSearchTerm : localSearchTerm;
    const setSearchTerm = isControlled ? propSetSearchTerm : localSetSearchTerm;
    const getStockQuadrant = (stock) => {
        if (stock.fundamentalScore < 5) return 5;
        const isQualityHigh = stock.fundamentalScore >= 7.5;
        const isUpsidePositive = stock.upside >= 0;
        if (isQualityHigh && isUpsidePositive) return 1;
        if (!isQualityHigh && isUpsidePositive) return 2;
        if (isQualityHigh && !isUpsidePositive) return 3;
        return 4;
    };

    const filteredData = data.filter(stock => {
        const matchesSearch = stock.ticker.toLowerCase().includes(searchTerm.toLowerCase()) ||
            stock.businessModel.toLowerCase().includes(searchTerm.toLowerCase());

        if (selectedQuadrant !== null) {
            return matchesSearch && getStockQuadrant(stock) === selectedQuadrant;
        }
        return matchesSearch;
    });

    return (
        <div className="table-container">
            <div className="table-header">
                <div className="table-title-group">
                    <div className="table-title-row">
                        <h2>{title}</h2>
                        {setSelectedTickers && selectedTickers.size > 0 && (
                            <button 
                                className="clear-selection-btn"
                                onClick={() => setSelectedTickers(new Set())}
                            >
                                Clear Selection
                            </button>
                        )}
                    </div>
                    {description && <p className="table-subtitle">{description}</p>}
                </div>
                <div className="search-wrapper">
                    <input
                        type="text"
                        placeholder="Search ticker or business model..."
                        value={searchTerm}
                        onChange={(e) => {
                            setSearchTerm(e.target.value);
                            if (setSelectedTickers) {
                                setSelectedTickers(new Set());
                            }
                        }}
                        className="search-input"
                    />
                    {searchTerm && (
                        <button 
                            className="search-clear-btn"
                            onClick={() => {
                                setSearchTerm('');
                                if (setSelectedTickers) {
                                    setSelectedTickers(new Set());
                                }
                            }}
                            aria-label="Clear search"
                        >
                            &times;
                        </button>
                    )}
                </div>
            </div>
            <div className="table-wrapper">
                <table className="stock-table">
                    <thead>
                        <tr>
                            {showRowNumbers && <th className="row-number-col">No.</th>}
                            <th>Ticker</th>
                            <th>Business Model</th>
                            <th>F-Score</th>
                            <th>Last Price</th>
                            <th>Fair Value</th>
                            <th>Upside</th>
                            <th>Dividend Yield</th>
                            <th>Liquidity</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredData.map((stock, index) => {
                            const isSelected = selectedTickers.has(stock.ticker);
                            return (
                                <tr 
                                    key={index}
                                    onClick={() => {
                                        if (toggleTickerSelection) {
                                            toggleTickerSelection(stock.ticker);
                                        }
                                    }}
                                    className={isSelected ? 'highlight-row' : ''}
                                >
                                    {showRowNumbers && <td className="row-number-cell">{index + 1}</td>}
                                    <td>{stock.ticker}</td>
                                    <td className="business-model-cell">{stock.businessModel}</td>
                                    <td className="score">{stock.fundamentalScore}</td>
                                    <td>{stock.price || '-'}</td>
                                    <td>{stock.fairValue || '-'}</td>
                                    <td className={stock.upside > 0 ? 'positive' : 'negative'}>
                                        {stock.upside}%
                                    </td>
                                    <td>{stock.latestDividendYield || '-'}</td>
                                    <td>{stock.liquidityScore !== null && !isNaN(stock.liquidityScore) ? stock.liquidityScore : '-'}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default StockTable;
