import { Button } from "@chakra-ui/button"
import { Flex, Text } from "@chakra-ui/layout"
import Head from "next/head"
import { useMoralis } from "react-moralis"

export default function Home() {
  const { isAuthenticated } = useMoralis()
  if(!isAuthenticated) {
    return(
      <>
      <Head>
        <title>Login | Dashboard3</title>
      </Head>
      <Flex 
      direction="column" 
      justifyContent="center" 
      alignItems="center"
      width="100vw"
      height="100vh"
      bgGradient="linear(to-br, teal.400, purple.300)"
      >
        <Text>Dashboard3</Text>
        <Button>Login with MetaMask</Button>
      </Flex>
      </>
    )
  }

  return (
    <div>
       <h1>Hello, world!</h1>
    </div>
  )
}
