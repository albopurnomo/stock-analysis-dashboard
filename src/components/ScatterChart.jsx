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
                <p className="label"><strong>{data.ticker}</strong></p>
                <p className="desc">{data.businessModel}</p>
                <p className="metric">Upside: {data.upside}%</p>
                <p className="metric">Fundamental Score: {data.fundamentalScore}</p>
                <p className="metric">Avg 5y DY: {data.dividendYield || 0}%</p>
            </div>
        );
    }
    return null;
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
                    <ReferenceArea x1={0} x2={250} y1={5.5} y2={7.5} fill="rgba(234, 179, 8, 0.05)" fillOpacity={getAreaOpacity(2)} stroke="none" />
                    {/* Quadrant 4: Good Company + High Premium */}
                    <ReferenceArea x1={-100} x2={0} y1={5.5} y2={7.5} fill="rgba(239, 68, 68, 0.05)" fillOpacity={getAreaOpacity(4)} stroke="none" />

                    <ReferenceLine x={0} stroke="#666" strokeWidth={2} label={{ value: '0%', fill: '#666', position: 'insideBottomLeft' }} />
                    <ReferenceLine y={7.5} stroke="#666" strokeWidth={2} label={{ value: '7.5', fill: '#666', position: 'insideLeft' }} />

                    <XAxis
                        type="number"
                        dataKey="upside"
                        name="Potential"
                        label={{ value: 'Potential (Upside %)', position: 'bottom', fill: '#ccc', offset: 0 }}
                        stroke="#ccc"
                        domain={[-100, 250]}
                        ticks={[-100, 0, 250]}
                        tickFormatter={(value) => {
                            if (value === -100) return 'Min';
                            if (value === 0) return '0%';
                            if (value === 250) return 'Max';
                            return '';
                        }}
                    />
                    <YAxis
                        type="number"
                        dataKey="fundamentalScore"
                        name="Quality"
                        label={{ value: 'Quality (Score)', angle: -90, position: 'left', fill: '#ccc', offset: 10 }}
                        stroke="#ccc"
                        domain={[5.5, 9]}
                        ticks={[5.5, 7.5]}
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
                                    fill={isHovered ? '#0ea5e9' : '#38bdf8'} 
                                    fillOpacity={isDimmed ? 0.15 : 1}
                                    stroke={isHovered ? '#fff' : 'none'}
                                    strokeWidth={isHovered ? 2 : 0}
                                    style={{ 
                                        transition: 'fill-opacity 0.15s ease, fill 0.15s ease',
                                        filter: isHovered ? 'drop-shadow(0 0 8px rgba(14, 165, 233, 0.8))' : 'none',
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
            </div>
        </div>
    );
};

export default ScatterChart;
