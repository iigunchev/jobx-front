import React from 'react';

import Card from './Card';

export default {
    title: 'Card',
    component: Card,
};

const Template = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
    data: {
        title: 'Crew 🎉',
        description: 'Lista de regalos para el grupo Crew 🎉',
        tags: ['Deportes de riesgo', 'Libros'],
    },
};
