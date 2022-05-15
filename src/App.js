
import './App.css';
import Description from './components/atoms/Description';
import Tag from './components/atoms/Tag';

function App() {

    return (
        <div className="App">
            <Description text="Lista de regalos para el grupo Crew" />
            <Tag category="Deportes de riesgo"/>
        </div>
    );
}

export default App;
