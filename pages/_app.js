import { createGlobalStyle, ThemeProvider } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  :root {
    box-sizing: border-box;
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

const theme = {
  white: 'hsl(0, 0%, 100%)',
  white95: 'hsl(0, 0%, 95%)',
  white90: 'hsl(0, 0%, 90%)',
  gray: 'hsl(0, 0%, 80%)',
  blue: 'hsl(229, 100%, 50%)'
}

function MyApp ({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default MyApp
