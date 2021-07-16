import React, { useState } from "react";
import App from "./App";
import Form from "./Pages/sign/From"

export const CopyrightContext = React.createContext(null);

function Dapp() {
  const [isLogged, setIsLogged] = useState("false")

  return (
    <CopyrightContext.Provider >
      {isLogged === true ? <App/> : <Form setIsLogged={setIsLogged}/>}
    </CopyrightContext.Provider>
  );
}

export default Dapp;