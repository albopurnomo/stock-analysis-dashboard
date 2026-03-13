import React, { useState } from 'react';

const StockTable = ({ data }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredData = data.filter(stock =>
        stock.ticker.toLowerCase().includes(searchTerm.toLowerCase()) ||
        stock.businessModel.toLowerCase().includes(searchTerm.toLowerCase())
    );

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
            <table className="stock-table">
                <thead>
                    <tr>
                        <th>Ticker</th>
                        <th>Business Model</th>
                        <th>Upside (%)</th>
                        <th>Fundamental Score</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredData.map((stock, index) => (
                        <tr key={index} className={stock.upside > 20 && stock.fundamentalScore > 7 ? 'highlight-row' : ''}>
                            <td>{stock.ticker}</td>
                            <td>{stock.businessModel}</td>
                            <td className={stock.upside > 0 ? 'positive' : 'negative'}>
                                {stock.upside}%
                            </td>
                            <td className="score">{stock.fundamentalScore}</td>
                            <td>{stock.price}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default StockTable;
