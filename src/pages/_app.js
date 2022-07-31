import { Web3ReactProvider } from '@web3-react/core'
import Web3 from 'web3'
import '../../styles/global.css'

function MyApp({ Component, pageProps }) {
  function getLibrary(provider) {
    return new Web3(provider)
  }

  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <Component {...pageProps} />
    </Web3ReactProvider>
  )
}

export default MyApp
