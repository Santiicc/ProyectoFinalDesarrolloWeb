import React from "react";
import { IconPs4, IconPc, IconXbox, IconSwitch } from "../Utils/Icons";

const Platform = ({ platform, mode }) => {

  const getIconColor = () => {
    if (mode) {
      const modeLower = mode.toLowerCase();
      if (modeLower.includes("light")) {
        return "#515151";
      } 
      else if (modeLower.includes("dark")) {
        return "white"; 
      }
    }
  };

  const platformLower = platform.toLowerCase();

  switch (true) {
    case platformLower.includes('playstation'):
      return <IconPs4 color={getIconColor()} />;
    case platformLower.includes('xbox'):
      return <IconXbox color={getIconColor()} />;
    case platformLower.includes('pc'):
      return <IconPc color={getIconColor()} />;
    case platformLower.includes('switch'):
      return <IconSwitch color={getIconColor()} />;
    default:
      return null;
  }
};

export default Platform;

