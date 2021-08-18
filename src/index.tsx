import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import 'normalize.css/normalize.css'
import {Theme} from '@Styles'
import {ThemeProvider} from "styled-components";
import {GlobalStyle} from '@Styles'
import {BrowserRouter} from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={Theme.light}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
