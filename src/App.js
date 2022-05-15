
import './App.css';
import Description from './components/atoms/Description';
import Tag from './components/atoms/Tag';
import Title from './components/atoms/Title';

function App() {

    return (
        <div className="App">
            <Title title="Crew 🎉" />
            <Description text="Lista de regalos para el grupo Crew" />
            <Tag category="Deportes de riesgo"/>
            <Tag category="Libros"/>
        </div>
    );
}

export default App;
