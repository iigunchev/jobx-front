import React from 'react';

import Description from './Description';

export default {
    title: 'Description',
    component: Description,
};

const Template = (args) => <Description {...args} />;

export const Default = Template.bind({});
Default.args = {
    text: 'Lista de regalos para el grupo Crew 🎉',
};
