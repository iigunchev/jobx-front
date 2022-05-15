import React from 'react';
import PropTypes from 'prop-types';

function Tag({ category }) {
    return (
        <div className="mt-2">
            <span className="bg-green-600 text-white text-sm font-medium px-2 py-1 rounded-2xl whitespace-nowrap">
                {category}
            </span>
        </div>
    );
}

Tag.propTypes = {
    category: PropTypes.string,
};
export default Tag;
