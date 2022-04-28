import { Button } from "@chakra-ui/button";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { Text } from "@chakra-ui/layout";
import { NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper } from "@chakra-ui/number-input";
import { useToast } from "@chakra-ui/toast";
import Moralis from "moralis";
import { useState } from "react";
import { useWeb3Transfer } from "react-moralis";
import CustomContainer from "./CustomContainer";

export default function Send() {

    const [amount, setAmount] = useState(0)
    const [receiver, setReceiver] = useState('')
    const handleChange = (value) => setAmount(value)
    const {fetch, isFetching} = useWeb3Transfer({
        amount: Moralis.Units.FromWei(amount),
        receiver: receiver,
        type: 'native'
    })
    const toast = useToast()

    return(
        <CustomContainer>
            <Text fontSize="xl" fontWeight="bold">Send ETH</Text>
            <form onSubmit={e => {
                e.preventDefault()
                await Moralis.enableWeb3()
                fetch({
                    onSuccess: () => {
                        toast({
                            title: 'ETH successfully sent!',
                            description: 'Fresh ETH are showing up into the receiver wallet',
                            status: 'success',
                            duration: 9000,
                            isClosable: true
                        })
                        setReceiver('')
                    },
                    onError: (error) => {
                        toast({
                            title: 'Error',
                            description: error,
                            status: 'error',
                            duration: 9000,
                            isClosable: true
                        })
                    }
                })
            }}>
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
                    <FormLabel htmlFor="receiver" mt="4">Send to</FormLabel>
                    <Input id="receiver" type="text" placeholder="Receiver Address" value={receiver} onChange={e => setReceiver(e.target.value)} />
                </FormControl>
                <Button mt="4" type="submit" colorScheme="purple">💸&nbsp; Send</Button>
            </form>
        </CustomContainer>
    )
}