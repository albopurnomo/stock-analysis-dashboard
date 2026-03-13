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
    ReferenceArea
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
            </div>
        );
    }
    return null;
};

const ScatterChart = ({ data }) => {
    return (
        <div className="chart-container">
            <ResponsiveContainer width="100%" height={500}>
                <ReChartsScatterChart
                    margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
                >
                    <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                    
                    {/* Quadrant Areas */}
                    <ReferenceArea x1={0} x2={250} y1={7.5} y2={9} fill="rgba(34, 197, 94, 0.05)" stroke="none" />
                    <ReferenceArea x1={-100} x2={0} y1={7.5} y2={9} fill="rgba(56, 189, 248, 0.05)" stroke="none" />
                    <ReferenceArea x1={0} x2={250} y1={5.5} y2={7.5} fill="rgba(234, 179, 8, 0.05)" stroke="none" />
                    <ReferenceArea x1={-100} x2={0} y1={5.5} y2={7.5} fill="rgba(239, 68, 68, 0.05)" stroke="none" />

                    <ReferenceLine x={0} stroke="#666" strokeWidth={2} label={{ value: '0%', fill: '#666', position: 'insideBottomLeft' }} />
                    <ReferenceLine y={7.5} stroke="#666" strokeWidth={2} label={{ value: '7.5', fill: '#666', position: 'insideLeft' }} />

                    <XAxis
                        type="number"
                        dataKey="upside"
                        name="Potential"
                        unit="%"
                        label={{ value: 'Potential (Upside %)', position: 'bottom', fill: '#ccc', offset: 0 }}
                        stroke="#ccc"
                        domain={[-100, 250]}
                        ticks={[-100, -50, 0, 50, 100, 150, 200, 250]}
                    />
                    <YAxis
                        type="number"
                        dataKey="fundamentalScore"
                        name="Quality"
                        label={{ value: 'Quality (Score)', angle: -90, position: 'left', fill: '#ccc', offset: 10 }}
                        stroke="#ccc"
                        domain={[5.5, 9]}
                        ticks={[5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9]}
                    />
                    <ZAxis type="number" range={[100, 100]} />
                    <Tooltip content={<CustomTooltip />} cursor={{ strokeDasharray: '3 3' }} />
                    
                    {/* Quadrant Labels */}
                    <text x="75%" y="10%" fill="#ccc" fontSize="12" fontWeight="bold" textAnchor="middle">Kuadran 1</text>
                    <text x="75%" y="13%" fill="#999" fontSize="10" textAnchor="middle">Excellent Company + Attractive Price</text>
                    
                    <text x="75%" y="87%" fill="#ccc" fontSize="12" fontWeight="bold" textAnchor="middle">Kuadran 2</text>
                    <text x="75%" y="90%" fill="#999" fontSize="10" textAnchor="middle">Good Company + Attractive Price</text>
                    
                    <text x="25%" y="10%" fill="#ccc" fontSize="12" fontWeight="bold" textAnchor="middle">Kuadran 3</text>
                    <text x="25%" y="13%" fill="#999" fontSize="10" textAnchor="middle">Excellent Company + High Premium</text>
                    
                    <text x="25%" y="87%" fill="#ccc" fontSize="12" fontWeight="bold" textAnchor="middle">Kuadran 4</text>
                    <text x="25%" y="90%" fill="#999" fontSize="10" textAnchor="middle">Good Company + High Premium</text>

                    <Scatter name="Stocks" data={data} fill="#38bdf8">
                        <LabelList dataKey="ticker" position="top" style={{ fill: '#fff', fontSize: '10px', fontWeight: 'bold' }} />
                    </Scatter>
                </ReChartsScatterChart>
            </ResponsiveContainer>
        </div>
    );
};

export default ScatterChart;
