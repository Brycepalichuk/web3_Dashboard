import { ChakraProvider } from "@chakra-ui/react"
// import { MoralisProvider } from "react-moralis"

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      {/* <MoralisProvider appId={process.env.NEXT_PUBLIC_APPID} serverUrl={process.env.MEXT_PUBLIC_SERVERURL}> */}
        <Component {...pageProps} />
      {/* </MoralisProvider> */}
    </ChakraProvider>
  ) 
}

export default MyApp
