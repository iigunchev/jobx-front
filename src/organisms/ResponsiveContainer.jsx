import React from 'react';
// Components
import Card from '../components/molecules/Card';
// CSS
import './ResponsiveContainer.css';

function ResponsiveContainer({ data }) {
    const handleClick = () => {};
    return (
        <section className="cards__container">
            {data.map((item) => (
                <a className="card__link" href="#" key={item.title} onClick={handleClick}>
                    <Card data={item} />
                </a>
            ))}
        </section>
    );
}

export default ResponsiveContainer;
