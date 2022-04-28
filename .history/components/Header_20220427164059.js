import { Button } from "@chakra-ui/button";
import { Center, Flex, Text } from "@chakra-ui/layout";

export default function Header({user}) {
    return(
        <header>
            <Flex>
                <Center>
                    <Text> Web3 Dashboard </Text>
                </Center>
                <Center>
                    <Text>{}</Text>
                    <Button>Logout</Button>
                </Center>
            </Flex>
        </header>
    )
}