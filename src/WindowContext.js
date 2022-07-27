import React from "react";

const defaultValue = {
  isMobile: false,
  setIsMobile: () => {} 
}

export default React.createContext(defaultValue);