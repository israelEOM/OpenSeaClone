import '@/styles/globals.css'
import type { AppProps } from 'next/app'

//INTRNAL IMPORT
import { NavBar, Footer } from "../components/componentsindex";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default App
