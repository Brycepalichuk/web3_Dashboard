import { FormControl, FormLabel } from "@chakra-ui/form-control";
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
                </FormControl>
            </form>
        </CustomContainer>
    )
}