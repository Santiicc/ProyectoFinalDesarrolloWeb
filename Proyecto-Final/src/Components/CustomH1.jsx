import React from 'react';
import PropTypes from 'prop-types';

const CustomH1 = ({ fontFamily, fontSize, fontWeight, children }) => {
    const style = {
        color: '#FFF',
        textAlign: 'center',
        fontFamily: fontFamily || 'Exo',
        fontSize: fontSize || '20px',
        fontStyle: 'normal',
        fontWeight: fontWeight || 700,
        lineHeight: 'normal',
    };

    return <h1 style={style}>{children}</h1>;
};

CustomH1.propTypes = {
    fontFamily: PropTypes.string,
    fontSize: PropTypes.string,
    fontWeight: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]),
    children: PropTypes.node.isRequired,
};

export default CustomH1;
