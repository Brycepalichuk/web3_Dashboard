import { Text } from "@chakra-ui/layout";
import CustomContainer from "./CustomContainer";

export default function Profile({user}) {
    return(
        <CustomContainer>
            <Text><b>😎&nbsp; Username:</b> {user.getUsername}</Text>
        </CustomContainer>
    )
}