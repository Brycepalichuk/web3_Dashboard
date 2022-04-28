import { Button } from "@chakra-ui/button"
import { Box, Flex, Text } from "@chakra-ui/layout"
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import Head from "next/head"
import { useMoralis } from "react-moralis"
import Header from "../components/Header"
import Profile from "../components/Profile"

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
        <Box flex="1" bg="purple.100" px="44" py="20">
          <Tabs size="lg" colorScheme="purple" align="center" variant="enclosed">
            <TabList>
              <Tab fontWeight="bold">Profile</Tab>
              <Tab fontWeight="bold">Balance</Tab>
              <Tab fontWeight="bold">Transactions</Tab>
              <Tab fontWeight="bold">NFTs</Tab>
              <Tab fontWeight="bold">Send ETH</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <Profile user={user} />
              </TabPanel>
              <TabPanel>Balance</TabPanel>
              <TabPanel>Transactions</TabPanel>
              <TabPanel>NFTs</TabPanel>
              <TabPanel>Send ETH</TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Flex>
    </>
  )
}
