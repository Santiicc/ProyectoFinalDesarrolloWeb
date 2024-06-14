import React from "react";
import { IconPs4,IconPc,IconXbox,IconSwitch} from "../Utils/Icons";


const Platform = ({platform}) => {
   if (platform === 'PlayStation') {
        return(
            <IconPs4></IconPs4>
        );
    }
    if (platform === 'Xbox') {
        return(
            <IconXbox></IconXbox>
        );
    }
    if (platform === 'Pc') {
        return(
            <IconPc></IconPc>
        );
    }
    if (platform === 'Switch') {
        return(
            <IconSwitch></IconSwitch>
        );
    }

};

export default Platform;