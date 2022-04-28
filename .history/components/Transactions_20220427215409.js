import { Text } from "@chakra-ui/layout";
import { useEffect, useState } from "react";
import { useMoralisWeb3Api } from "react-moralis";
import CustomContainer from "./CustomContainer";

export default function Transactions({user}) {

    const Web3Api = useMoralisWeb3Api()
    const BASE_URL = "https://rinkeby.etherscan.io/tx/"
    const [transactions, setTransactions] = useState([])

    const fetchTransactions = async () => {
        const data = await Web3Api.account.getTransactions({
            chain: "rinkeby",
            address: user.get('ethAddress'),
            limit: 5
        })
        if(data) {
            setTransactions(data.result)
        }
    }

    useEffect(() => {
        fetchTransactions()
    }, [])

    console.log(transactions)

    return (
        <CustomContainer>
           <Text></Text>
        </CustomContainer>
    )
}