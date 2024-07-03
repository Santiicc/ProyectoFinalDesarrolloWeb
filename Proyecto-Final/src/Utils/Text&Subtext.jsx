import React from 'react';
import classes from "../Styles/Text_Subtext.module.css"

const Text_Subtext = ({ mode, Text, Subtext }) => {
  const textColor = mode === 'dark' ? '#FFF' : '#515151';

  return (
    <div className={classes.Div}>
      <h6 style={{ color: textColor }} className={classes.Text}>{Text}</h6>
      <h3 style={{ color: textColor }}className={classes.SubText}>{Subtext}</h3>
    </div>
  );
};

export default Text_Subtext;
