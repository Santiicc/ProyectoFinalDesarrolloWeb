import React from "react";
import ButtonDivGeneric from "./ButtonDivGeneric";
import { useState } from "react";

const PurchaseButton = () => {

    const [statusPurchase, setStatusPurchase] = useState(false);

    const SetStatus = () => {
        setStatusPurchase(!statusPurchase); 
      };
   
    return(
       <ButtonDivGeneric text={statusPurchase ? 'Purchased':'Purchase'} backgroundcolor={statusPurchase ? 'white' : 'transparent' }
       colortext={ statusPurchase ? 'black' : '#36B972'} onclick={SetStatus}>
       </ButtonDivGeneric>
    )
}

export default PurchaseButton;