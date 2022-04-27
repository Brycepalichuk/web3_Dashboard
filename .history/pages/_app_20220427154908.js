import { ChakraProvider } from "@chakra-ui/react"
import { MoralisProvider } from "react-moralis"

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <MoralisProvider appId={process.env.NEXT_PUBLIC_APPID} serverUrl={https://7dhrhd4rkpui.usemoralis.com:2053/server}>
        <Component {...pageProps} />
      </MoralisProvider>
    </ChakraProvider>
  ) 
}

export default MyApp
