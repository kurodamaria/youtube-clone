import { createGlobalStyle, ThemeProvider } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  :root {
    box-sizing: border-box;
  }
  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }
  body {
    margin: 0;
    padding: 0;
  }
`

const theme = {
  white: 'hsl(0, 0%, 100%)',
  white95: 'hsl(0, 0%, 95%)',
  white90: 'hsl(0, 0%, 90%)'
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
