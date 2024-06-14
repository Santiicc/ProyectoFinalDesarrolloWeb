import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";


const MiBoton = ({ onClick, titulo, className, ...props }) => {
    return (
        <button onClick={onClick} className={classNames(styles.button, className)} {...props}>
            {titulo}
        </button>
    );
};


