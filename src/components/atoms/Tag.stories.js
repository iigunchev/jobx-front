import React from 'react';

import Tag from './Tag';

export default {
    title: 'Tag',
    component: Tag,
};

const Template = (args) => <Tag {...args} />;

export const Default = Template.bind({});
Default.args = {
    category: 'Crew',
};
