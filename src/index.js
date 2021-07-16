
import {
  BrowserRouter as Router
} from "react-router-dom";


import "bootstrap/dist/css/bootstrap.css";
// 1. import `ChakraProvider` component
import { ChakraProvider } from "@chakra-ui/react";


import React from 'react';
import ReactDOM from 'react-dom';

import Dapp from './dapp';


ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider >
  <Dapp />
  </ChakraProvider>
</React.StrictMode>,

  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
