import { Button } from "@chakra-ui/button";
import { Center, Flex, Text } from "@chakra-ui/layout";

export default function Header({user, logout}) {
    return(
        <header>
            <Flex>
                <Center>
                    <Text> Web3 Dashboard </Text>
                </Center>
                <Center>
                    <Text>{user.getUsername()}</Text>
                    <Button onClick={logout}>Logout</Button>
                </Center>
            </Flex>
        </header>
    )
}