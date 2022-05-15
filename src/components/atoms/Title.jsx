import React from 'react';
import PropTypes from 'prop-types';

function Title({ title }) {
    return <span className="font-bold text-2xl block">{title}</span>;
}

Title.propTypes = {
    title: PropTypes.string,
};
export default Title;
