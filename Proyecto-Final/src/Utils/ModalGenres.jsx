import React from "react";
import classes from "../Styles/ModalGenres.module.css";

const ModalGenres = ({ genres }) => {
    return (
        <div className={classes.DivGral}>
            {genres.map((g, index) => (
                <div key={index} className={classes.Genre}>
                    {g}
                </div>
            ))}
        </div>
    );
};

export default ModalGenres;