import React from 'react';
// Components
import Tag from '../atoms/Tag';
// CSS
import './Card.css';
function Card({ data }) {
    return (
        <article className="card__wrapper">
            <h2 className="font-bold text-2xl block">{data.title}</h2>
            <p className="text-base font-medium block">{data.description}</p>
            <div className="flex gap-4 py-1 overflow-x-auto ">
                {data.tags.map((tag) => (
                    <Tag key={tag} category={tag} />
                ))}
            </div>
        </article>
    );
}

export default Card;
