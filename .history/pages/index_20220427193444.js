import { Button } from "@chakra-ui/button"
import { Box, Flex, Text } from "@chakra-ui/layout"
import Head from "next/head"
import { useMoralis } from "react-moralis"
import Header from "../components/Header"

export default function Home() {
  const { isAuthenticated, authenticate, user, logout, isLoggingOut } = useMoralis()
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
        <Text
        fontSize="5xl"
        fontWeight="bold"
        color="white"
        >
          Web3 Dashboard
        </Text>
        <Button
        colorScheme="purple"
        size="lg"
        mt="6"
        onClick={() => authenticate({
          signingMessage: "Sign to login to Web3 Dashboard"
        })}
        >
          Login with MetaMask
        </Button>
      </Flex>
      </>
    )
  }

  return (
    <>
      <Head>
        <title>
          Web 3 Dashboard
        </title>
      </Head>
      <Flex
      direction="column"
      width="100vw"
      height="100vw"
      >
        <Header user={user} logout={logout} isLoggingOut={isLoggingOut}/>
        <Box flex="1" bg="purple.100" px="44" ></Box>
      </Flex>
    </>
  )
}
