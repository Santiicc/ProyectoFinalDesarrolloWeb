import React from 'react';
import PropTypes from 'prop-types';

const CustomP = ({ fontFamily, fontSize, fontWeight, children, className }) => {
    const style = {
        textAlign: 'center',
        fontFamily: fontFamily || 'Exo',
        fontSize: fontSize || '16px',
        fontStyle: 'normal',
        fontWeight: fontWeight || 400,
        lineHeight: 'normal',
    };

    return <p style={style} className={className}>{children}</p>;
};

CustomP.propTypes = {
    fontFamily: PropTypes.string,
    fontSize: PropTypes.string,
    fontWeight: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]),
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
};

export default CustomP;
