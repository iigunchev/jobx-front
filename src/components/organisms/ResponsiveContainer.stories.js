import React from 'react';

import ResponsiveContainer from './ResponsiveContainer';

export default {
    title: 'ResponsiveContainer',
    component: ResponsiveContainer,
};

const Template = (args) => <ResponsiveContainer {...args} />;

export const Default = Template.bind({});
Default.args = {
    data: [
        {
            title: 'Crew π',
            description: 'Lista de regalos para el grupo Crew π',
            tags: ['Deportes de riesgo', 'Libros'],
        },
        {
            title: 'Family π',
            description: 'Lista de regalos para el grupo Family π',
            tags: ['Family', 'Sport'],
        },
        {
            title: 'Others π',
            description: 'Lista de regalos para el grupo Others π',
            tags: ['Videojuegos', 'MontaΓ±a'],
        },
    ],
};
