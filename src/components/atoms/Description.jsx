import React from 'react';
import PropTypes from 'prop-types';

function Description({ text }) {
    return <span className="text-base font-medium block">{text}</span>;
}

Description.propTypes = {
    text: PropTypes.string,
};
export default Description;
