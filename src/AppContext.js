import React, {createContext} from 'react';

const AppContext = createContext({
    walletAddress: '', 
    setWalletAddress: (address) => { }
  });
  
  export default AppContext;