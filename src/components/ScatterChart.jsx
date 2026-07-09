import React from 'react';
import {
    ScatterChart as ReChartsScatterChart,
    Scatter,
    XAxis,
    YAxis,
    ZAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    LabelList,
    ReferenceLine,
    ReferenceArea,
    Cell
} from 'recharts';

const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
        const data = payload[0].payload;
        return (
            <div className="custom-tooltip">
                <p className="label"><strong>{data.ticker}: Score {data.fundamentalScore}</strong></p>
                <p className="desc">Description: {data.businessModel || '-'}</p>
                <p className="metric">Current Price: {data.price || '-'}</p>
                <p className="metric">Fair Value: {data.fairValue || '-'}</p>
                <p className="metric">Dividend Yield: {data.latestDividendYield || '-'}</p>
                <p className="metric">Liquidity Score: {data.liquidityScore !== null && !isNaN(data.liquidityScore) ? data.liquidityScore : '-'}</p>
            </div>
        );
    }
    return null;
};

const getLiquidityColor = (score) => {
    if (score === null || score === undefined || isNaN(score)) return '#38bdf8'; // fallback
    if (score > 100) return '#ef4444'; // Red
    if (score >= 61) return '#f59e0b'; // Amber/Orange
    if (score >= 21) return '#eab308'; // Yellow
    if (score >= 6) return '#22c55e'; // Green
    return '#0ea5e9'; // Blue (< 6)
};

const ScatterChart = ({ data, selectedQuadrant, setSelectedQuadrant }) => {
    const [hoveredTicker, setHoveredTicker] = React.useState(null);
    const hoverTimeoutRef = React.useRef(null);

    const handleMouseEnter = (node) => {
        if (hoverTimeoutRef.current) {
            clearTimeout(hoverTimeoutRef.current);
            hoverTimeoutRef.current = null;
        }
        if (node && node.ticker) {
            if (selectedQuadrant !== null) {
                const stockQuad = getStockQuadrant(node);
                if (stockQuad !== selectedQuadrant) {
                    return; // Ignore hover on dots outside selected quadrant
                }
            }
            setHoveredTicker(node.ticker);
        }
    };

    const handleMouseLeave = () => {
        // Clear any existing timeout
        if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
        
        // Set a small delay before clearing the hover state
        // This prevents flickering when moving between dots
        hoverTimeoutRef.current = setTimeout(() => {
            setHoveredTicker(null);
            hoverTimeoutRef.current = null;
        }, 100);
    };

    const renderCustomLabel = (props) => {
        const { x, y, value } = props;
        const isHovered = hoveredTicker === value;

        if (!isHovered) return null;

        return (
            <text 
                x={x} 
                y={y - 15} 
                fill="#0ea5e9" 
                fontSize={12} 
                fontWeight="bold" 
                textAnchor="middle" 
                style={{ pointerEvents: 'none' }}
            >
                {value}
            </text>
        );
    };

    const getStockQuadrant = (stock) => {
        if (stock.fundamentalScore < 5) return 5;
        const isQualityHigh = stock.fundamentalScore >= 7.5;
        const isUpsidePositive = stock.upside >= 0;
        if (isQualityHigh && isUpsidePositive) return 1;
        if (!isQualityHigh && isUpsidePositive) return 2;
        if (isQualityHigh && !isUpsidePositive) return 3;
        return 4;
    };

    // Opacity helpers for ReferenceArea based on selection
    const getAreaOpacity = (quadrantNum) => {
        if (selectedQuadrant === null) return 0.05;
        return selectedQuadrant === quadrantNum ? 0.22 : 0.01;
    };

    return (
        <div className="chart-wrapper" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', width: '100%' }}>
            {/* Liquidity Score Legend */}
            <div className="liquidity-legend-container" style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '1rem',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '0.75rem 1.5rem',
                background: 'rgba(15, 23, 42, 0.4)',
                borderRadius: '16px',
                border: '1px solid rgba(255, 255, 255, 0.05)',
                margin: '0 auto'
            }}>
                <span style={{ fontSize: '0.85rem', color: '#94a3b8', fontWeight: '600', marginRight: '0.5rem' }}>
                    Liquidity Score Legend:
                </span>
                {[
                    { label: '> 100 (Very Low)', color: '#ef4444' },
                    { label: '61 - 100 (Low)', color: '#f59e0b' },
                    { label: '21 - 60 (Moderate)', color: '#eab308' },
                    { label: '6 - 20 (High)', color: '#22c55e' },
                    { label: '< 6 (Very High)', color: '#0ea5e9' },
                ].map((item, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8rem' }}>
                        <span style={{
                            width: '10px',
                            height: '10px',
                            borderRadius: '50%',
                            backgroundColor: item.color,
                            boxShadow: `0 0 6px ${item.color}`
                        }} />
                        <span style={{ color: '#f8fafc', fontWeight: '500' }}>{item.label}</span>
                    </div>
                ))}
            </div>

            <div className="chart-container" style={{ position: 'relative' }}>
                <ResponsiveContainer width="100%" height={500}>
                <ReChartsScatterChart
                    margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
                    onMouseLeave={() => setHoveredTicker(null)}
                >
                    <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                    
                    {/* Quadrant Areas */}
                    {/* Quadrant 1: Excellent Company + Attractive Price */}
                    <ReferenceArea x1={0} x2={250} y1={7.5} y2={9} fill="rgba(34, 197, 94, 0.05)" fillOpacity={getAreaOpacity(1)} stroke="none" />
                    {/* Quadrant 3: Excellent Company + High Premium */}
                    <ReferenceArea x1={-100} x2={0} y1={7.5} y2={9} fill="rgba(56, 189, 248, 0.05)" fillOpacity={getAreaOpacity(3)} stroke="none" />
                    {/* Quadrant 2: Good Company + Attractive Price */}
                    <ReferenceArea x1={0} x2={250} y1={5} y2={7.5} fill="rgba(234, 179, 8, 0.05)" fillOpacity={getAreaOpacity(2)} stroke="none" />
                    {/* Quadrant 4: Good Company + High Premium */}
                    <ReferenceArea x1={-100} x2={0} y1={5} y2={7.5} fill="rgba(239, 68, 68, 0.05)" fillOpacity={getAreaOpacity(4)} stroke="none" />
                    {/* Quadrant X: Need more convictions */}
                    <ReferenceArea x1={-100} x2={250} y1={2} y2={5} fill="rgba(59, 130, 246, 0.05)" fillOpacity={getAreaOpacity(5)} stroke="none" />

                    <ReferenceLine x={0} stroke="#666" strokeWidth={2} />
                    <ReferenceLine y={7.5} stroke="#666" strokeWidth={2} />
                    <ReferenceLine y={5} stroke="#666" strokeWidth={2} />

                    <XAxis
                        type="number"
                        dataKey="upside"
                        name="Potential"
                        label={{ value: 'Potential (Upside %)', position: 'bottom', fill: '#ccc', offset: 0 }}
                        stroke="#ccc"
                        domain={[-100, 250]}
                        ticks={[-100, 0, 250]}
                        tickFormatter={(value) => {
                            if (value === 0) return '0%';
                            return '';
                        }}
                    />
                    <YAxis
                        type="number"
                        dataKey="fundamentalScore"
                        name="Quality"
                        label={{ value: 'Quality (Score)', angle: -90, position: 'left', fill: '#ccc', offset: 10 }}
                        stroke="#ccc"
                        domain={[2, 9]}
                        ticks={[2, 5, 7.5]}
                    />
                    {/* ZAxis controls the dot size based on Dividend Yield */}
                    <ZAxis 
                        type="number" 
                        dataKey="dividendYield" 
                        range={[60, 600]} // Minimum size of 60 to ensure 0% DY is visible, max 600
                        domain={[0, 25]} // Strict scale fixing 0 to min and 25 to max
                        name="Avg 5y DY"
                    />
                    <Tooltip content={<CustomTooltip />} cursor={{ strokeDasharray: '3 3' }} />
                    
                    <Scatter 
                        name="Stocks" 
                        data={data} 
                        fill="#38bdf8"
                        style={{ cursor: 'pointer' }}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        isAnimationActive={false}
                    >
                        {data.map((entry, index) => {
                            const isHovered = hoveredTicker === entry.ticker;
                            const stockQuad = getStockQuadrant(entry);
                            const baseColor = getLiquidityColor(entry.liquidityScore);
                            
                            // Dimming logic
                            let isDimmed = false;
                            if (hoveredTicker !== null) {
                                isDimmed = !isHovered;
                            } else if (selectedQuadrant !== null) {
                                isDimmed = stockQuad !== selectedQuadrant;
                            }

                            return (
                                <Cell 
                                    key={`cell-${index}`} 
                                    fill={baseColor} 
                                    fillOpacity={isDimmed ? 0.15 : 1}
                                    stroke={isHovered ? '#fff' : 'none'}
                                    strokeWidth={isHovered ? 2 : 0}
                                    style={{ 
                                        transition: 'fill-opacity 0.15s ease, fill 0.15s ease',
                                        filter: isHovered ? `drop-shadow(0 0 8px ${baseColor})` : 'none',
                                        pointerEvents: (selectedQuadrant !== null && stockQuad !== selectedQuadrant) ? 'none' : 'auto',
                                        cursor: (selectedQuadrant !== null && stockQuad !== selectedQuadrant) ? 'default' : 'pointer'
                                    }} 
                                />
                            );
                        })}
                        <LabelList dataKey="ticker" content={renderCustomLabel} />
                    </Scatter>
                </ReChartsScatterChart>
            </ResponsiveContainer>
            </div>

            {/* Quadrant buttons replacing static labels */}
            <div className="quadrant-buttons-container">
                <button 
                    className={`quadrant-btn q1-btn ${selectedQuadrant === 1 ? 'active' : ''}`}
                    onClick={() => setSelectedQuadrant(selectedQuadrant === 1 ? null : 1)}
                >
                    <span className="btn-quadrant-title">Quadrant 1</span>
                    <span className="btn-quadrant-desc">Excellent Company + Attractive Price</span>
                </button>
                <button 
                    className={`quadrant-btn q2-btn ${selectedQuadrant === 2 ? 'active' : ''}`}
                    onClick={() => setSelectedQuadrant(selectedQuadrant === 2 ? null : 2)}
                >
                    <span className="btn-quadrant-title">Quadrant 2</span>
                    <span className="btn-quadrant-desc">Good Company + Attractive Price</span>
                </button>
                <button 
                    className={`quadrant-btn q3-btn ${selectedQuadrant === 3 ? 'active' : ''}`}
                    onClick={() => setSelectedQuadrant(selectedQuadrant === 3 ? null : 3)}
                >
                    <span className="btn-quadrant-title">Quadrant 3</span>
                    <span className="btn-quadrant-desc">Excellent Company + High Premium</span>
                </button>
                <button 
                    className={`quadrant-btn q4-btn ${selectedQuadrant === 4 ? 'active' : ''}`}
                    onClick={() => setSelectedQuadrant(selectedQuadrant === 4 ? null : 4)}
                >
                    <span className="btn-quadrant-title">Quadrant 4</span>
                    <span className="btn-quadrant-desc">Good Company + High Premium</span>
                </button>
                <button 
                    className={`quadrant-btn qx-btn ${selectedQuadrant === 5 ? 'active' : ''}`}
                    onClick={() => setSelectedQuadrant(selectedQuadrant === 5 ? null : 5)}
                >
                    <span className="btn-quadrant-title">Quadrant X</span>
                    <span className="btn-quadrant-desc">Need more convictions</span>
                </button>
            </div>
        </div>
    );
};

export default ScatterChart;
