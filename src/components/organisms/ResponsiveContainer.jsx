import React from 'react';
// Components
import Card from '../molecules/Card';
// CSS
import './ResponsiveContainer.css';

function ResponsiveContainer({ data }) {
    const handleClick = () => {
        // Action to be defined
        console.log('action');
    };
    // Lista vacía
    if (data.length === 0) {
        return <div>No hay listas de regalos.</div>;
    }
    return (
        <section className="cards__container">
            {data.map((item) => (
                <a
                    className="card__link"
                    href="#"
                    key={item.title}
                    onClick={handleClick}
                >
                    <Card data={item} />
                </a>
            ))}
        </section>
    );
}

export default ResponsiveContainer;
