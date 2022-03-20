import '../styles/globals.css'
import GlobalStyle from "./themes/GlobalStyle";
import DefaultTheme from "./themes/DefaultTheme";

function MyApp({Component, pageProps}) {
    return (
        <>
            <GlobalStyle/>
            <DefaultTheme>
                <Component {...pageProps} />
            </DefaultTheme>
        </>
    )
}

export default MyApp
