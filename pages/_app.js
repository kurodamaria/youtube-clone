import { ThemeProvider } from 'styled-components'
import { GlobalContextProvider } from '@Context'
import { Navi } from '@PCompo'

import { GlobalStyle, theme } from '@Styles'

function MyApp ({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme.light}>
        <GlobalContextProvider>
          <Navi />
          <Component {...pageProps} />
        </GlobalContextProvider>
      </ThemeProvider>
    </>
  )
}

export default MyApp
