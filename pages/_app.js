import '../styles/globals.css'
import { MoralisProvider } from 'react-moralis'

function MyApp({ Component, pageProps }) {
  return (
    <MoralisProvider 
    const serverUrl={process.env.NEXT_PUBLIC_MORALIS_SERVER}
    const appId={process.env.NEXT_PUBLIC_MORALIS_APP_ID}
  >
    <Component {...pageProps} />

  </MoralisProvider>
  )
  
}

export default MyApp
