import Dashboard from './components/Dashboard'

function App() {
    return (
        <div className="app-container">
            <div className="orientation-warning">
                <div className="phone-icon-wrapper">
                    <div className="phone-icon"></div>
                </div>
                <h2>Please Rotate Your Device</h2>
                <p>This dashboard is optimized for landscape viewing. Please turn your device horizontally for the best experience.</p>
            </div>
            <Dashboard />
        </div>
    )
}

export default App
