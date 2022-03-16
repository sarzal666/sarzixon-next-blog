import '../styles/globals.css'
import GlobalStyle from "./themes/GlobalStyle";

function MyApp({ Component, pageProps }) {
  return (
      <>
        <GlobalStyle />
        <Component {...pageProps} />
      </>
  )
}

export default MyApp
