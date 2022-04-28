import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Text } from "@chakra-ui/layout";
import { NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper } from "@chakra-ui/number-input";
import { Input } from "@chakra-ui/theme/dist/declarations/src/components";
import { useState } from "react";
import CustomContainer from "./CustomContainer";

export default function Send() {

    const [amount, setAmount] = useState(0)
    const [receiver, setReceiver] = useState('')
    const handleChange = (value) => setAmount(value)
    console.log(receiver)

    return(
        <CustomContainer>
            <Text fontSize="xl" fontWeight="bold">Send ETH</Text>
            <form>
                <FormControl mt="4">
                    <FormLabel htmlFor="amount">
                        Amount of ETH
                    </FormLabel>
                    <NumberInput step={0.1} onChange={handleChange}>
                        <NumberInputField id="amount"  value={amount} />
                        <NumberInputStepper>
                            <NumberIncrementStepper />
                            <NumberDecrementStepper />
                        </NumberInputStepper>
                    </NumberInput>
                    <FormLabel htmlFor="receiver">Send to</FormLabel>
                    <Input id="receiver" type="text" placeholder="Receiver Address" value={e => setReceiver(e.target.value)} />
                </FormControl>
            </form>
        </CustomContainer>
    )
}