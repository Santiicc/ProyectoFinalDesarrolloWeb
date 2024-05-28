import React from "react";
import CustomP from "./CustomP";
import classes from "../Pages/LoginPage.module.css"; 

const CustomCheckbox = ({ checked, onChange, label }) => {
    return (
        <label className={classes["checkbox-label"]}>
            <input type="checkbox" checked={checked} onChange={onChange} />
            <span className={classes.checkmark}></span>
            <CustomP fontFamily="Exo" fontSize="14px" fontWeight="400">{label}</CustomP> 
        </label>
    );
};

export default CustomCheckbox;
