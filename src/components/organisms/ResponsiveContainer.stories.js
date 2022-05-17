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
            title: 'Crew 🎉',
            description: 'Lista de regalos para el grupo Crew 🎉',
            tags: ['Deportes de riesgo', 'Libros'],
        },
        {
            title: 'Family 🎉',
            description: 'Lista de regalos para el grupo Family 🎉',
            tags: ['Family', 'Sport'],
        },
        {
            title: 'Others 🎉',
            description: 'Lista de regalos para el grupo Others 🎉',
            tags: ['Videojuegos', 'Montaña'],
        },
    ],
};
