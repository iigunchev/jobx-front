import React from 'react';
// Components
import Description from '../atoms/Description';
import Tag from '../atoms/Tag';

function Card({ data }) {
    return (
        <article className="flex flex-col gap-3 justify-center border-xl border-2 rounded-lg border-gray-400 w-[22rem] p-5 hover:bg-purple-200 hover:border-purple-500 cursor-pointer hover:transition-all transition duration-100 ease-out">
            <h2 className="font-bold text-2xl block">Crew 🎉</h2>
            <p className="text-base font-medium block">Lista de regalos para el grupo Crew 🎉</p>
            <div className="flex gap-4 py-1 overflow-x-auto ">
                <Tag category="Deportes de riesgo" />
                <Tag category="Libros" />
            </div>
        </article>
    );
}

export default Card;
