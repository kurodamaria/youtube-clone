import { LayoutContextProvider } from '@Context'
import { Navi } from '@PCompo'
import { GlobalStyle, theme } from '@Styles'
import { ThemeProvider } from 'styled-components'

function MyApp ({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme.light}>
        <LayoutContextProvider>
          <Navi />
          <Component {...pageProps} />
        </LayoutContextProvider>
      </ThemeProvider>
    </>
  )
}

export default MyApp
