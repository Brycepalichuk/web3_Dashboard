import { Button } from "@chakra-ui/button";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { Text } from "@chakra-ui/layout";
import CustomContainer from "./CustomContainer";

export default function Profile({user}) {
    return(
        <CustomContainer>
            <Text><b>😎&nbsp; Username:</b> {user.getUsername()}</Text>
            <Text><b>💰&nbsp; Wallet Address:</b> {user.get('ethAddress')}</Text>
            <form>
                <FormControl>
                    <FormLabel htmlFor="username">Set a new username</FormLabel>
                    <Input id="username" type="text" placeholder="ex. LilCat" value={} onChange={}></Input>
                </FormControl>
                <Button type="submit" colorScheme="purple">✅&nbsp; Change Username</Button>
            </form>
        </CustomContainer>
    )
}