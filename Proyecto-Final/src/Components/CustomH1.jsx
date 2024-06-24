
// CustomH1.jsx
import React from 'react';
import PropTypes from 'prop-types';

const CustomH1 = ({ fontFamily, children }) => {
    const style = {
        color: '#FFF',
        textAlign: 'center',
        fontFamily: fontFamily || 'Exo',
        fontSize: '20px',
        fontStyle: 'normal',
        fontWeight: 700,
        lineHeight: 'normal',
    };

    return <h1 style={style}>{children}</h1>;
};

CustomH1.propTypes = {
    fontFamily: PropTypes.string,
    children: PropTypes.node.isRequired,
};

export default CustomH1;
