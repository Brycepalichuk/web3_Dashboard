import { ChakraProvider } from "@chakra-ui/react"
import { MoralisProvider } from "react-moralis"

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <MoralisProvider appId={"1i5SAYLfcxGELR32S3gArxgSB6jiLhHa6DdkS1mB"} serverUrl={"https://7dhrhd4rkpui.usemoralis.com:2053/server"}>
        <Component {...pageProps} />
      </MoralisProvider>
    </ChakraProvider>
  ) 
}

export default MyApp
