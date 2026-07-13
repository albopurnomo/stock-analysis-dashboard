import React, { useState } from 'react';

const StockTable = ({ data, selectedQuadrant = null, searchTerm: propSearchTerm, setSearchTerm: propSetSearchTerm }) => {
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
                <h2>Stock List</h2>
                <input
                    type="text"
                    placeholder="Search ticker or business model..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="search-input"
                />
            </div>
            <div className="table-wrapper">
                <table className="stock-table">
                    <thead>
                        <tr>
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
                        {filteredData.map((stock, index) => (
                            <tr key={index}>
                                <td>{stock.ticker}</td>
                                <td>{stock.businessModel}</td>
                                <td className="score">{stock.fundamentalScore}</td>
                                <td>{stock.price || '-'}</td>
                                <td>{stock.fairValue || '-'}</td>
                                <td className={stock.upside > 0 ? 'positive' : 'negative'}>
                                    {stock.upside}%
                                </td>
                                <td>{stock.latestDividendYield || '-'}</td>
                                <td>{stock.liquidityScore !== null && !isNaN(stock.liquidityScore) ? stock.liquidityScore : '-'}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default StockTable;
