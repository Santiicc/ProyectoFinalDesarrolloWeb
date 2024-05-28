import React from 'react';
import PropTypes from 'prop-types';

const CustomP = ({ fontFamily, fontSize, fontWeight, children }) => {
    const style = {
        color: '#FFF',
        textAlign: 'center',
        fontFamily: fontFamily || 'Exo',
        fontSize: fontSize || '16px',
        fontStyle: 'normal',
        fontWeight: fontWeight || 400,
        lineHeight: 'normal',
    };

    return <p style={style}>{children}</p>;
};

CustomP.propTypes = {
    fontFamily: PropTypes.string,
    fontSize: PropTypes.string,
    fontWeight: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]),
    children: PropTypes.node.isRequired,
};

export default CustomP;
