import { createGlobalStyle } from 'styled-components'
import { LayoutCSSVars } from '@Context'

export const GlobalStyle = createGlobalStyle`
  :root {
    box-sizing: border-box;
    ${LayoutCSSVars}
  }
  *,
  *::before,
  *::after {
    box-sizing: inherit;
    font-family: inherit;
  }
  body {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', Arial, sans-serif;
  }
  /* width */
  ::-webkit-scrollbar {
    width: 8px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background-color: transparent;
    margin: 0 2px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: hsl(0, 0%, 60%);
    border-radius: 5px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: hsl(0, 0%, 80%);
  }
`

export const theme = {
  light: {
    white: 'hsl(0, 0%, 100%)',
    white95: 'hsl(0, 0%, 95%)',
    white85: 'hsl(0, 0%, 85%)',
    white70: 'hsl(0, 0%, 70%)',
    red: 'hsl(0, 100%, 50%)',
    black: 'hsl(0, 0%, 0%)',
    blue: 'hsl(220, 100%, 50%)'
  }
}
