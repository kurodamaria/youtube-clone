import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import 'normalize.css/normalize.css'
import {GlobalStyle} from '@Styles'
import {BrowserRouter} from "react-router-dom";
import {ThemeInfoContextProvider} from "./context/ThemeInfoContext";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeInfoContextProvider>
        <GlobalStyle />
        <App />
      </ThemeInfoContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
