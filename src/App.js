import './App.css';
// Components
import ResponsiveContainer from './components/organisms/ResponsiveContainer';
// MockData
import data from './data/data';

function App() {
    return (
        <div className="app_wrapper">
            <h1 className="font-bold text-2xl">Lista de regalos</h1>
            <ResponsiveContainer data={data} />
        </div>
    );
}

export default App;
