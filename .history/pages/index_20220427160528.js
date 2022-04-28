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
      <Flex>
        <Text>Dashboard3</Text>
        <Button></Button>
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
