import React from "react";
import classes from '../Styles/ButtonDivGeneric.module.css'


const ButtonDivGeneric = ({onclick,backgroundcolor,colortext,text}) => {


    return(
        <div className={classes.divGral} onClick={onclick}   style={{ backgroundColor: backgroundcolor}}>
            <h4 className={classes.Text} style={{ color: colortext}}>{text}</h4>
        </div>
    )
}

export default ButtonDivGeneric;