import React from "react";
import ButtonDivGeneric from "./ButtonDivGeneric";
import { useState } from "react";

const WishListButton = () => {

    const [statusAdd, setStatusAdd] = useState(false);

    const SetStatus = () => {
        setStatusAdd(!statusAdd); 
      };
   
    return(
       <ButtonDivGeneric text={statusAdd ? 'Added to wishlist':'Add to wishlist'} backgroundcolor={statusAdd ? '#36B972' : '#F6F6F6' }
        colortext={ statusAdd ? '#F6F6F6' : '#36B972'} onclick={SetStatus}>
       </ButtonDivGeneric>
    )
}

export default WishListButton;